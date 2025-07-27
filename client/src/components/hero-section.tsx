import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-light to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Expert Care for <span className="text-primary">Women's Health</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Comprehensive gynecological care with compassion, expertise, and state-of-the-art facilities. Your health and comfort are our top priorities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary-medium transition-colors font-semibold text-lg"
              >
                Book Consultation
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-colors font-semibold text-lg"
              >
                <a href="tel:+1234567890">Emergency Care</a>
              </Button>
            </div>
          </div>
          
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Mother holding newborn baby in hospital setting showing maternal care" 
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-primary text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center text-center">
              <Phone className="mr-3 h-5 w-5" />
              <span className="font-semibold">24/7 Emergency: </span>
              <a href="tel:+1234567890" className="ml-2 font-bold text-lg hover:underline">
                +1 (234) 567-8900
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
