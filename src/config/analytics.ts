// Configurazione centrale dei tracker analytics.
// Modifica qui per aggiornare ID di GA4 e Meta Pixel.

export const analytics = {
  // Google Analytics 4 Measurement ID (formato G-XXXXXXXXXX)
  ga4MeasurementId: "G-ETV8BVXNTK",

  // Meta Pixel ID (formato numerico, es. 1234567890123456)
  // Lascia stringa vuota per disabilitare Meta Pixel
  metaPixelId: "",

  // Nome del cookie di consenso in localStorage
  consentStorageKey: "iddd-consent-v1",

  // Durata in giorni prima di richiedere nuovamente il consenso
  consentDurationDays: 180,
} as const;

export type ConsentCategory = "necessary" | "statistics" | "marketing" | "preferences";

export type ConsentState = {
  necessary: true; // sempre attivo, non modificabile
  statistics: boolean;
  marketing: boolean;
  preferences: boolean;
  timestamp: number; // ms epoch del momento del consenso
};

export const defaultConsent: Omit<ConsentState, "timestamp"> = {
  necessary: true,
  statistics: false,
  marketing: false,
  preferences: false,
};
