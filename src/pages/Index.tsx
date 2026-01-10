import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PortfolioSection />
      <ProcessSection />
      <ServicesSection />
      <TestimonialsSection />
      <ClientsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
