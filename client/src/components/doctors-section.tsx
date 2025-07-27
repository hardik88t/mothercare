import { Button } from "@/components/ui/button";
import { GraduationCap, Award } from "lucide-react";

export default function DoctorsSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Chief of Gynecology",
      bio: "Specializing in high-risk pregnancies and minimally invasive surgery with over 15 years of experience.",
      education: "Harvard Medical School",
      experience: "15+ Years Experience",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Fertility Specialist",
      bio: "Leading expert in reproductive endocrinology and infertility treatments with exceptional success rates.",
      education: "Johns Hopkins University",
      experience: "12+ Years Experience",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Maternal-Fetal Medicine",
      bio: "Board-certified in maternal-fetal medicine, specializing in high-risk pregnancies and prenatal diagnosis.",
      education: "Stanford Medical School",
      experience: "18+ Years Experience",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Meet Our Expert Doctors</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our team of board-certified gynecologists and specialists are dedicated to providing you with the highest quality care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <img 
                src={doctor.image} 
                alt={`${doctor.name} - Professional doctor portrait`}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-lg"
              />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{doctor.name}</h3>
              <p className="text-primary font-semibold mb-4">{doctor.specialty}</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {doctor.bio}
              </p>
              <div className="space-y-2 text-sm text-slate-600 mb-6">
                <div className="flex items-center justify-center">
                  <GraduationCap className="mr-2 text-primary h-4 w-4" />
                  <span>{doctor.education}</span>
                </div>
                <div className="flex items-center justify-center">
                  <Award className="mr-2 text-primary h-4 w-4" />
                  <span>{doctor.experience}</span>
                </div>
              </div>
              <Button 
                onClick={scrollToContact}
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-medium transition-colors font-medium"
              >
                Book Consultation
              </Button>
            </div>
          ))}
        </div>

        {/* All Doctors CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors font-semibold"
          >
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
}
