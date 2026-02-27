import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import AIConsulting from "./pages/AIConsulting";
import EnterpriseAIStrategy from "./pages/EnterpriseAIStrategy";
import AIAutomation from "./pages/AIAutomation";
import AIIntegration from "./pages/AIIntegration";
import AIAdvisory from "./pages/AIAdvisory";
import HandsOnAIProductCoaching from "./pages/HandsOnAIProductCoaching";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ai-consulting" element={<AIConsulting />} />
            <Route path="/enterprise-ai-strategy" element={<EnterpriseAIStrategy />} />
            <Route path="/ai-automation" element={<AIAutomation />} />
            <Route path="/ai-integration" element={<AIIntegration />} />
            <Route path="/ai-advisory" element={<AIAdvisory />} />
            <Route path="/hands-on-ai-product-coaching" element={<HandsOnAIProductCoaching />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
