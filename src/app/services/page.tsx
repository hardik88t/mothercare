import { Stethoscope, Baby, Microscope, HeartPulse } from 'lucide-react';

export default function Services() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="medical-heading">Our Comprehensive Services</h1>
          <p className="medical-subheading mt-4 max-w-3xl mx-auto">
            We offer a full spectrum of gynecological and obstetric services, tailored to meet your individual needs with the utmost care and professionalism.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start gap-6">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Stethoscope className="w-8 h-8" />
              </div>
              <div>
                <h3 className="medical-subheading mb-2">General Gynecology</h3>
                <p className="medical-body">
                  From routine annual exams and Pap smears to complex reproductive health issues, we provide a foundation for lifelong wellness. Our services include contraception management, STI testing, and preventive care.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Baby className="w-8 h-8" />
              </div>
              <div>
                <h3 className="medical-subheading mb-2">Obstetrics & Prenatal Care</h3>
                <p className="medical-body">
                  Our team supports you through every step of your pregnancy journey, from preconception counseling to delivery and postpartum care. We offer advanced fetal monitoring and personalized birth plans.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Microscope className="w-8 h-8" />
              </div>
              <div>
                <h3 className="medical-subheading mb-2">Minimally Invasive Surgery</h3>
                <p className="medical-body">
                  We specialize in laparoscopic and hysteroscopic procedures to treat conditions like fibroids, endometriosis, and ovarian cysts. These techniques ensure less pain, smaller incisions, and a quicker return to your daily life.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <HeartPulse className="w-8 h-8" />
              </div>
              <div>
                <h3 className="medical-subheading mb-2">Infertility & Family Planning</h3>
                <p className="medical-body">
                  Facing challenges with conception can be difficult. We provide a comprehensive range of diagnostic services and fertility treatments, including ovulation induction and IUI, to support your path to parenthood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
