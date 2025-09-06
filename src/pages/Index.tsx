import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VisionSection from "@/components/VisionSection";
import ProgressSection from "@/components/ProgressSection";
import TechnologySection from "@/components/TechnologySection";
import FutureSection from "@/components/FutureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <VisionSection />
      <ProgressSection />
      <TechnologySection />
      <FutureSection />
      <Footer />
    </div>
  );
};

export default Index;
