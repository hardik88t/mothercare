import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import DoctorsSection from "@/components/doctors-section";
import FacilitiesSection from "@/components/facilities-section";
import TestimonialsSection from "@/components/testimonials-section";
import HealthTipsSection from "@/components/health-tips-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DoctorsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <HealthTipsSection />
      <ContactSection />
      <Footer />
      
      {/* Floating Emergency Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <a
          href="tel:+1234567890"
          className="bg-red-500 hover:bg-red-600 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
          title="Emergency Contact"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
