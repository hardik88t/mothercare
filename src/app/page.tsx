import { doctors } from '@/data/doctors'
import { medicalServices, getFeaturedServices } from '@/data/services'

export default function Home() {
  const featuredServices = getFeaturedServices()
  const featuredDoctors = doctors.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="trust-badge">🏥 Trusted Healthcare Since 2010</span>
          </div>
          <h1 className="medical-heading mb-6">
            Comprehensive Women's Healthcare
            <br />
            <span className="text-primary">You Can Trust</span>
          </h1>
          <p className="medical-body max-w-2xl mx-auto mb-8 text-lg">
            MotherCare provides expert gynecological and obstetric care with modern facilities,
            experienced doctors, and 24/7 emergency services. Your health and comfort are our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-colors">
              Book Appointment
            </button>
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-3 rounded-lg font-semibold transition-colors">
              Emergency: (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="medical-heading mb-4">Our Medical Services</h2>
            <p className="medical-body max-w-2xl mx-auto">
              Comprehensive women's healthcare services delivered by experienced specialists
              using state-of-the-art medical technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <div key={service.id} className="medical-card group cursor-pointer">
                <div className="text-primary mb-4 text-2xl">🏥</div>
                <h3 className="medical-subheading mb-3 text-lg">{service.name}</h3>
                <p className="medical-body text-sm mb-4">{service.shortDescription}</p>
                {service.isEmergency && (
                  <span className="emergency-badge">24/7 Available</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="medical-heading mb-4">Meet Our Expert Doctors</h2>
            <p className="medical-body max-w-2xl mx-auto">
              Our team of highly qualified gynecologists and specialists are dedicated
              to providing personalized, compassionate care for every patient.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredDoctors.map((doctor) => (
              <div key={doctor.id} className="medical-card text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👩‍⚕️</span>
                </div>
                <h3 className="medical-subheading mb-2">{doctor.name}</h3>
                <p className="text-primary font-medium mb-2">{doctor.title}</p>
                <p className="medical-body text-sm mb-3">
                  {doctor.experience} years experience
                </p>
                <div className="flex items-center justify-center gap-1 mb-3">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-medium">{doctor.rating}</span>
                  <span className="medical-body text-sm">({doctor.reviewCount} reviews)</span>
                </div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {doctor.specialization.slice(0, 2).map((spec, index) => (
                    <span key={index} className="trust-badge text-xs">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 px-4 bg-destructive/5 border-t border-destructive/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-destructive mb-4">24/7 Emergency Care</h2>
          <p className="medical-body mb-6">
            For urgent medical situations, our emergency team is available round the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+15551234567" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 px-8 py-3 rounded-lg font-bold transition-colors">
              📞 Emergency: (555) 123-4567
            </a>
            <span className="medical-body">
              📍 123 Healthcare Ave, Medical District, City 12345
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
