import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ConsentProvider } from "@/context/ConsentContext";
import CookieBanner from "@/components/CookieBanner";
import CookiePreferencesModal from "@/components/CookiePreferencesModal";
import Index from "./pages/Index.tsx";
import Biografia from "./pages/Biografia.tsx";
import Discografia from "./pages/Discografia.tsx";
import Contatti from "./pages/Contatti.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import CookiePolicy from "./pages/CookiePolicy.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ConsentProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/biografia" element={<Biografia />} />
            <Route path="/discografia" element={<Discografia />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieBanner />
          <CookiePreferencesModal />
        </ConsentProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
