import { Baby, Heart, Sprout, Activity, HeartPulse, Shield, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: Baby,
      title: "Prenatal Care",
      description: "Comprehensive pregnancy monitoring and care from conception through delivery with regular check-ups and advanced screening.",
      features: [
        "Regular prenatal check-ups",
        "Ultrasound imaging",
        "Genetic screening"
      ]
    },
    {
      icon: Heart,
      title: "Gynecological Exams",
      description: "Routine and specialized gynecological examinations for early detection and prevention of women's health issues.",
      features: [
        "Annual wellness exams",
        "Pap smear screening",
        "STI testing"
      ]
    },
    {
      icon: Sprout,
      title: "Fertility Treatment",
      description: "Advanced fertility treatments and reproductive health services to help you start or expand your family.",
      features: [
        "Fertility assessment",
        "IVF treatments",
        "Hormonal therapy"
      ]
    },
    {
      icon: Activity,
      title: "Minimally Invasive Surgery",
      description: "Advanced laparoscopic and robotic surgical procedures with minimal scarring and faster recovery times.",
      features: [
        "Laparoscopic surgery",
        "Hysteroscopy",
        "Robotic surgery"
      ]
    },
    {
      icon: HeartPulse,
      title: "Menopause Management",
      description: "Comprehensive care and support during menopause transition with personalized treatment plans.",
      features: [
        "Hormone replacement therapy",
        "Lifestyle counseling",
        "Symptom management"
      ]
    },
    {
      icon: Shield,
      title: "Cancer Screening",
      description: "Early detection and prevention programs for gynecological cancers with advanced screening technology.",
      features: [
        "Cervical cancer screening",
        "Breast cancer screening",
        "Genetic counseling"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Specialized Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive gynecological care with advanced treatments and personalized attention
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <service.icon className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-accent mr-2 h-4 w-4" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="link" className="text-primary font-semibold hover:text-primary-medium transition-colors p-0">
                Learn More →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
