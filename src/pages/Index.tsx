import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { PortfoliosSection } from '@/components/PortfoliosSection';
import { CalculatorSection } from '@/components/CalculatorSection';
import { CompanyVisionSection } from '@/components/CompanyVisionSection';
import { ShariaSection } from '@/components/ShariaSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { FAQSection } from '@/components/FAQSection';
import { StatsSection } from '@/components/StatsSection';
import { Footer } from '@/components/Footer';
import { MiniTicker } from '@/components/home/MiniTicker';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MiniTicker />
      <PortfoliosSection />
      <CalculatorSection />
      <CompanyVisionSection />
      <ShariaSection />
      <FeaturesSection />
      <FAQSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
