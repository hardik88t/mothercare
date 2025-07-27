import { HeartPulse, Stethoscope, Baby, Microscope } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <p className="trust-badge mb-4">Compassionate & Professional Care</p>
          <h1 className="medical-heading">Your Health, Our Priority</h1>
          <p className="medical-subheading mt-4 max-w-2xl mx-auto">
            Providing comprehensive gynecological and obstetric care for every stage of a woman's life.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="/services" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors">
              Our Services
            </a>
            <a href="/contact" className="bg-background text-primary border border-primary px-8 py-3 rounded-full font-bold hover:bg-secondary transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="medical-heading text-center mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="medical-card text-center">
              <Stethoscope className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="medical-subheading mb-2">Gynecology</h3>
              <p className="medical-body">
                Routine check-ups, preventive care, and treatment for reproductive health issues.
              </p>
            </div>
            <div className="medical-card text-center">
              <Baby className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="medical-subheading mb-2">Obstetrics</h3>
              <p className="medical-body">
                Comprehensive care through pregnancy, childbirth, and postpartum.
              </p>
            </div>
            <div className="medical-card text-center">
              <Microscope className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="medical-subheading mb-2">Laparoscopy</h3>
              <p className="medical-body">
                Minimally invasive surgery for faster recovery and better outcomes.
              </p>
            </div>
            <div className="medical-card text-center">
              <HeartPulse className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="medical-subheading mb-2">Infertility</h3>
              <p className="medical-body">
                Advanced diagnostics and personalized treatments to help you conceive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Doctor Section */}
      <section className="bg-medical-pink py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="medical-heading mb-4">Meet Our Specialist</h2>
          <p className="medical-subheading max-w-2xl mx-auto mb-8">
            Dr. Jane Doe is a board-certified gynecologist with over 15 years of experience, dedicated to providing personalized and compassionate care.
          </p>
          <a href="/about" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors">
            Learn More About Dr. Doe
          </a>
        </div>
      </section>
    </div>
  );
}