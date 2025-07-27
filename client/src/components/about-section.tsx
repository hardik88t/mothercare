import { Users, Heart, Building2, Clock } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About MotherCare Hospital</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dedicated to providing exceptional gynecological and maternal care with over 20 years of trusted service
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern hospital building exterior with glass facade and landscaped entrance" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-800">Our Mission</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              At MotherCare, we are committed to providing comprehensive, compassionate care for women at every stage of life. Our team of experienced gynecologists and specialists work together to ensure the highest quality of medical care in a comfortable, supportive environment.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-primary-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary h-8 w-8" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Expert Doctors</h4>
                <p className="text-slate-600">Board-certified specialists</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary h-8 w-8" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Compassionate Care</h4>
                <p className="text-slate-600">Patient-centered approach</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="text-primary h-8 w-8" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Modern Facilities</h4>
                <p className="text-slate-600">State-of-the-art equipment</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-primary h-8 w-8" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">24/7 Support</h4>
                <p className="text-slate-600">Always here when you need us</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-primary to-primary-medium rounded-2xl text-white p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-primary-light">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-primary-light">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-primary-light">Expert Doctors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-primary-light">Successful Procedures</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
