import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DeliveryFramework from "@/components/DeliveryFramework";
import Credibility from "@/components/Credibility";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <section id="services">
        <Services />
      </section>
      <section id="approach">
        <DeliveryFramework />
      </section>
      <section id="about">
        <Credibility />
      </section>
      <section id="contact">
        <FinalCTA />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
