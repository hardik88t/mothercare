import { siteData } from '@/data';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FloatingCard } from '@/components/ui/floating-card';
import { GradientText } from '@/components/ui/gradient-text';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

export default function HomePage() {
  const { practice, services, doctors } = siteData;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="text-center relative z-10">
          <AnimateOnScroll animation="fadeUp">
            <h1 className="heading-display mb-6">
              <GradientText gradient="primary">
                {practice.name}
              </GradientText>
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeUp" delay={0.2}>
            <p className="body-large max-w-2xl mx-auto mb-8">
              {practice.tagline}
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeUp" delay={0.4}>
            <p className="body-regular max-w-3xl mx-auto mb-12">
              {practice.description}
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeUp" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="glow">
                Book Appointment
              </Button>
              <Button size="xl" variant="outline">
                Emergency: (555) 123-4567
              </Button>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Floating Cards */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingCard 
            className="absolute top-20 left-10 w-48 opacity-20"
            delay={0}
            duration={8}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">🏥</div>
              <p className="text-sm">24/7 Care</p>
            </div>
          </FloatingCard>
          
          <FloatingCard 
            className="absolute top-40 right-10 w-48 opacity-20"
            delay={2}
            duration={10}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">👩‍⚕️</div>
              <p className="text-sm">Expert Doctors</p>
            </div>
          </FloatingCard>
          
          <FloatingCard 
            className="absolute bottom-20 left-1/4 w-48 opacity-20"
            delay={4}
            duration={12}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">🔬</div>
              <p className="text-sm">Advanced Technology</p>
            </div>
          </FloatingCard>
        </div>
      </Section>

      {/* Stats Section */}
      <Section spacing="lg" background="muted">
        <AnimateOnScroll animation="fadeUp">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center gradient-border">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">
                  {services.length}+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-regular">Specialized Services</p>
              </CardContent>
            </Card>
            
            <Card className="text-center gradient-border">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">
                  {doctors.length}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-regular">Expert Physicians</p>
              </CardContent>
            </Card>
            
            <Card className="text-center gradient-border">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">
                  {new Date().getFullYear() - practice.establishedYear}+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-regular">Years of Excellence</p>
              </CardContent>
            </Card>
          </div>
        </AnimateOnScroll>
      </Section>
    </div>
  );
}