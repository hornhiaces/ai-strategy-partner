import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import DeliveryFramework from "@/components/DeliveryFramework";
import Credibility from "@/components/Credibility";
import ComingSoon from "@/components/ComingSoon";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import SEOHead from "@/components/SEOHead";
import {
  OrganizationSchema,
  FAQSchema,
  BreadcrumbSchema,
  homepageFAQs,
} from "@/components/StructuredData";

const SITE_URL = "https://salinas-ai-consulting.com";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="AI Strategy & Product Coaching | Salinas AI Consulting"
        description="Enterprise-level AI strategy with hands-on execution capability. AI consulting for enterprises, founders & small businesses. Free consultation."
        path="/"
      />
      <OrganizationSchema />
      <FAQSchema faqs={homepageFAQs} />
      <BreadcrumbSchema items={[{ name: "Home", url: SITE_URL }]} />

      <Header />
      <Hero />
      <section id="services">
        <Services />
      </section>
      <section id="philosophy">
        <Philosophy />
      </section>
      <section id="approach">
        <DeliveryFramework />
      </section>
      <section id="about">
        <Credibility />
      </section>
      <ComingSoon />
      <section id="contact">
        <FinalCTA />
      </section>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
