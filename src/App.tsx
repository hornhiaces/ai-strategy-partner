import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";

const AIConsulting = lazy(() => import("./pages/AIConsulting"));
const EnterpriseAIStrategy = lazy(() => import("./pages/EnterpriseAIStrategy"));
const AIAutomation = lazy(() => import("./pages/AIAutomation"));
const AIIntegration = lazy(() => import("./pages/AIIntegration"));
const AIAdvisory = lazy(() => import("./pages/AIAdvisory"));
const HandsOnAIProductCoaching = lazy(() => import("./pages/HandsOnAIProductCoaching"));
const ExternalRedirect = lazy(() => import("./pages/ExternalRedirect"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/ai-consulting" element={<AIConsulting />} />
                <Route path="/enterprise-ai-strategy" element={<EnterpriseAIStrategy />} />
                <Route path="/ai-automation" element={<AIAutomation />} />
                <Route path="/ai-integration" element={<AIIntegration />} />
                <Route path="/ai-advisory" element={<AIAdvisory />} />
                <Route path="/hands-on-ai-product-coaching" element={<HandsOnAIProductCoaching />} />
                <Route path="/out" element={<ExternalRedirect />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
