import { HeartPulse, Stethoscope, Baby, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <p className="trust-badge mb-4" style={{ backgroundColor: 'color-mix(in srgb, var(--success) 10%, transparent)', color: 'var(--success)' }}>
            Compassionate & Professional Care
          </p>
          <h1 className="medical-heading" style={{ color: 'var(--success)' }}>Your Health, Our Priority</h1>
          <p className="medical-subheading mt-4 max-w-2xl mx-auto">
            Providing comprehensive gynecological and obstetric care for every stage of a woman's life.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="medical-heading text-center mb-12" style={{ color: 'var(--success)' }}>Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Stethoscope className="w-12 h-12 mx-auto text-success mb-4" />
                <CardTitle className="medical-subheading">Gynecology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="medical-body">
                  Routine check-ups, preventive care, and treatment for reproductive health issues.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Baby className="w-12 h-12 mx-auto text-success mb-4" />
                <CardTitle className="medical-subheading">Obstetrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="medical-body">
                  Comprehensive care through pregnancy, childbirth, and postpartum.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Microscope className="w-12 h-12 mx-auto text-success mb-4" />
                <CardTitle className="medical-subheading">Laparoscopy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="medical-body">
                  Minimally invasive surgery for faster recovery and better outcomes.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <HeartPulse className="w-12 h-12 mx-auto text-success mb-4" />
                <CardTitle className="medical-subheading">Infertility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="medical-body">
                  Advanced diagnostics and personalized treatments to help you conceive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Doctor Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--medical-pink)' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="medical-heading mb-4" style={{ color: 'var(--success)' }}>Meet Our Specialist</h2>
          <p className="medical-subheading max-w-2xl mx-auto mb-8">
            Dr. Jane Doe is a board-certified gynecologist with over 15 years of experience, dedicated to providing personalized and compassionate care.
          </p>
          <Button asChild size="lg">
            <Link href="/about">Learn More About Dr. Doe</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
