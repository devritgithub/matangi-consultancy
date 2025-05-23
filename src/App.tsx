
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LinkCreation from "./pages/LinkCreation";
import FoodConnection from "./pages/FoodConnection";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import MatangiSolutions from "./pages/MatangiSolutions";
import FinBudget from "./pages/FinBudget";
import ContactUs from "./pages/contact";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
         <FloatingWhatsapp /> 
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/financial" element={<MatangiSolutions />} />
            <Route path="/real-estate" element={<FinBudget />} />
            <Route path="/link-creation" element={<LinkCreation />} />
            <Route path="/food-connection" element={<FoodConnection />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
