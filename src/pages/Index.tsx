import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DeliveryFramework from "@/components/DeliveryFramework";
import Credibility from "@/components/Credibility";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <DeliveryFramework />
      <Credibility />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
