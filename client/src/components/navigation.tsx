import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import iconPath from "@assets/icon_1753649812671.png";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <img 
              src={iconPath} 
              alt="MotherCare Hospital Icon" 
              className="h-16 w-16 object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")} 
              className="text-slate-700 hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-slate-700 hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-slate-700 hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("doctors")} 
              className="text-slate-700 hover:text-primary transition-colors font-medium"
            >
              Doctors
            </button>
            <button 
              onClick={() => scrollToSection("facilities")} 
              className="text-slate-700 hover:text-primary transition-colors font-medium"
            >
              Facilities
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-slate-700 hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-medium transition-colors font-medium"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-primary"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection("home")} 
              className="block w-full text-left text-slate-700 hover:text-primary transition-colors font-medium py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="block w-full text-left text-slate-700 hover:text-primary transition-colors font-medium py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className="block w-full text-left text-slate-700 hover:text-primary transition-colors font-medium py-2"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("doctors")} 
              className="block w-full text-left text-slate-700 hover:text-primary transition-colors font-medium py-2"
            >
              Doctors
            </button>
            <button 
              onClick={() => scrollToSection("facilities")} 
              className="block w-full text-left text-slate-700 hover:text-primary transition-colors font-medium py-2"
            >
              Facilities
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="block w-full text-left text-slate-700 hover:text-primary transition-colors font-medium py-2"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="w-full bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-medium transition-colors font-medium"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
