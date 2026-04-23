import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  analytics,
  defaultConsent,
  type ConsentState,
  type ConsentCategory,
} from "@/config/analytics";

type ConsentContextValue = {
  consent: ConsentState | null; // null = utente non ha ancora scelto
  isBannerOpen: boolean;
  isModalOpen: boolean;
  openBanner: () => void;
  closeBanner: () => void;
  openModal: () => void;
  closeModal: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: Omit<ConsentState, "timestamp" | "necessary">) => void;
  hasConsent: (category: ConsentCategory) => boolean;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

// Funzione che legge il consenso da localStorage. Ritorna null se scaduto o mai impostato.
const loadConsent = (): ConsentState | null => {
  try {
    const raw = localStorage.getItem(analytics.consentStorageKey);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    // Controllo scadenza
    const ageMs = Date.now() - parsed.timestamp;
    const maxAgeMs = analytics.consentDurationDays * 24 * 60 * 60 * 1000;
    if (ageMs > maxAgeMs) {
      localStorage.removeItem(analytics.consentStorageKey);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
};

// Aggiorna Google Consent Mode v2 in base allo stato consenso
const updateGoogleConsent = (consent: ConsentState) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", {
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
    analytics_storage: consent.statistics ? "granted" : "denied",
    functionality_storage: consent.preferences ? "granted" : "denied",
    personalization_storage: consent.preferences ? "granted" : "denied",
    security_storage: "granted", // sempre consentito (anti-frode)
  });
};

// Carica dinamicamente lo script GA4 al primo consenso (lazy load)
let ga4Loaded = false;
const loadGA4Script = () => {
  if (ga4Loaded || !analytics.ga4MeasurementId) return;
  ga4Loaded = true;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analytics.ga4MeasurementId}`;
  document.head.appendChild(script);
};

// Carica dinamicamente Meta Pixel se abilitato
let pixelLoaded = false;
const loadMetaPixel = () => {
  if (pixelLoaded || !analytics.metaPixelId) return;
  pixelLoaded = true;
  // Inline standard Meta Pixel snippet
  /* eslint-disable @typescript-eslint/no-explicit-any */
  (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  window.fbq?.("init", analytics.metaPixelId);
  window.fbq?.("track", "PageView");
  /* eslint-enable @typescript-eslint/no-explicit-any */
};

// Carica dinamicamente Microsoft Clarity se abilitato
let clarityLoaded = false;
const loadClarity = () => {
  if (clarityLoaded || !analytics.clarityProjectId) return;
  clarityLoaded = true;
  // Microsoft Clarity snippet (versione ufficiale)
  window.clarity("consent");
  const script = document.createElement("script");
  script.async = true;
  script.type = "text/javascript";
  script.src = "https://www.clarity.ms/tag/" + analytics.clarityProjectId;
  document.head.appendChild(script);
};

export const ConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [isBannerOpen, setBannerOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  // Al mount: carica consenso esistente o apri banner
  useEffect(() => {
    const existing = loadConsent();
    if (existing) {
      setConsent(existing);
      updateGoogleConsent(existing);
      if (existing.statistics) {
        loadGA4Script();
        loadClarity();
      }
      if (existing.marketing && analytics.metaPixelId) loadMetaPixel();
    } else {
      setBannerOpen(true);
    }
  }, []);

  const persistAndApply = useCallback((next: ConsentState) => {
    localStorage.setItem(analytics.consentStorageKey, JSON.stringify(next));
    setConsent(next);
    updateGoogleConsent(next);
    if (next.statistics) {
      loadGA4Script();
      loadClarity();
    }
    if (next.marketing && analytics.metaPixelId) loadMetaPixel();
    setBannerOpen(false);
    setModalOpen(false);
  }, []);

  const acceptAll = useCallback(() => {
    persistAndApply({
      necessary: true,
      statistics: true,
      marketing: true,
      preferences: true,
      timestamp: Date.now(),
    });
  }, [persistAndApply]);

  const rejectAll = useCallback(() => {
    persistAndApply({
      ...defaultConsent,
      timestamp: Date.now(),
    });
  }, [persistAndApply]);

  const savePreferences = useCallback(
    (prefs: Omit<ConsentState, "timestamp" | "necessary">) => {
      persistAndApply({
        necessary: true,
        ...prefs,
        timestamp: Date.now(),
      });
    },
    [persistAndApply]
  );

  const hasConsent = useCallback(
    (category: ConsentCategory) => {
      if (!consent) return category === "necessary";
      return consent[category] === true;
    },
    [consent]
  );

  const value: ConsentContextValue = {
    consent,
    isBannerOpen,
    isModalOpen,
    openBanner: () => setBannerOpen(true),
    closeBanner: () => setBannerOpen(false),
    openModal: () => setModalOpen(true),
    closeModal: () => setModalOpen(false),
    acceptAll,
    rejectAll,
    savePreferences,
    hasConsent,
  };

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
};

export const useConsent = () => {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
};

// Dichiarazioni globali per gtag e fbq
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
    dataLayer: unknown[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq?: (...args: any[]) => void;
    _fbq?: unknown;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clarity?: (...args: any[]) => void;
  }
}
