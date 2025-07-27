import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import logoPath from "@assets/logo_1753649812671.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img 
              src={logoPath} 
              alt="MotherCare Hospital Logo" 
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-slate-300 mb-6 leading-relaxed">
              Providing exceptional gynecological and maternal care with compassion, expertise, and state-of-the-art facilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("doctors")} 
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Our Doctors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("facilities")} 
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Facilities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Prenatal Care</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Fertility Treatment</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Gynecological Exams</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Minimally Invasive Surgery</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Cancer Screening</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="mr-3 text-primary h-4 w-4" />
                <span className="text-slate-300">
                  123 Healthcare Boulevard<br />
                  Medical Center, MC 12345
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-primary h-4 w-4" />
                <span className="text-slate-300">+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-primary h-4 w-4" />
                <span className="text-slate-300">info@mothercare.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 MotherCare Hospital. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Patient Rights</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
