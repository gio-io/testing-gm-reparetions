import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiciosSection from "@/components/ServiciosSection";
import ConfianzaSection from "@/components/ConfianzaSection";
import CoberturaSection from "@/components/CoberturaSection";
import ProcesoSection from "@/components/ProcesoSection";
import TestimoniosSection from "@/components/TestimoniosSection";
import FAQSection from "@/components/FAQSection";
import ContactoSection from "@/components/ContactoSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileCTABar from "@/components/MobileCTABar";

export default function Home() {
  return (
    <>
      {/* Skip to content link for keyboard users */}
      <a href="#servicios" className="skip-link">
        Saltar al contenido principal
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ServiciosSection />
        <ConfianzaSection />
        <CoberturaSection />
        <ProcesoSection />
        <TestimoniosSection />
        <FAQSection />
        <ContactoSection />
      </main>

      <Footer />

      {/* Persistent floating CTAs */}
      <WhatsAppFloat />
      <MobileCTABar />
    </>
  );
}
