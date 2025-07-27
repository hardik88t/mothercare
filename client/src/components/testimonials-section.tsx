import { Star, Shield, Award, FileCheck } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The care I received during my pregnancy was exceptional. Dr. Johnson and her team made me feel comfortable and confident throughout the entire journey. I couldn't have asked for better support.",
      name: "Sarah M.",
      service: "Prenatal Care Patient",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b131?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      quote: "After struggling with fertility issues, Dr. Chen helped us achieve our dream of starting a family. His expertise and compassionate approach made all the difference. We are forever grateful.",
      name: "Maria L.",
      service: "Fertility Treatment Patient",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      quote: "The minimally invasive surgery I had was a complete success. The recovery was much faster than expected, and the care team was amazing throughout the entire process. Highly recommend!",
      name: "Jennifer K.",
      service: "Surgery Patient",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">What Our Patients Say</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real experiences from women who have trusted us with their health and care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} - Happy patient testimonial photo`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                  <p className="text-slate-600 text-sm">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-600">
            <div className="flex items-center">
              <Shield className="text-primary mr-2 h-5 w-5" />
              <span className="font-medium">HIPAA Compliant</span>
            </div>
            <div className="flex items-center">
              <Award className="text-primary mr-2 h-5 w-5" />
              <span className="font-medium">Accredited Facility</span>
            </div>
            <div className="flex items-center">
              <FileCheck className="text-primary mr-2 h-5 w-5" />
              <span className="font-medium">Board Certified Doctors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
