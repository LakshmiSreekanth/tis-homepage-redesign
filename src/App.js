import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/animation/ScrollProgress";
import HeroSection from "./components/sections/HeroSection";
import MarqueeStripe from "./components/sections/MarqueeStripe";
import AboutSection from "./components/sections/AboutSection";
import AcademicsSection from "./components/sections/AcademicsSection";
import SportsSection from "./components/sections/SportsSection";
import CampusSection from "./components/sections/CampusSection";
import VoicesSection from "./components/sections/VoicesSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import CtaSection from "./components/sections/CtaSection";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <HeroSection />
        <MarqueeStripe />
        <AboutSection />
        <AcademicsSection />
        <SportsSection />
        <CampusSection />
        <VoicesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
