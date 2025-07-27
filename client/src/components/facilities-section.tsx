import { Activity, Microscope, Baby, Heart } from "lucide-react";

export default function FacilitiesSection() {
  const facilities = [
    {
      icon: Activity,
      title: "Advanced Operating Theaters",
      description: "State-of-the-art surgical suites equipped with the latest technology for minimally invasive procedures."
    },
    {
      icon: Microscope,
      title: "On-Site Laboratory",
      description: "Comprehensive diagnostic services with rapid test results for immediate care decisions."
    },
    {
      icon: Baby,
      title: "NICU & Delivery Suites",
      description: "Specialized neonatal intensive care unit and comfortable delivery rooms for a safe birthing experience."
    },
    {
      icon: Heart,
      title: "Comfortable Recovery Rooms",
      description: "Private rooms designed for healing and recovery with family-friendly amenities."
    }
  ];

  const facilityFeatures = [
    {
      title: "4D Ultrasound Technology",
      description: "Advanced imaging for detailed prenatal monitoring",
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Private Patient Rooms",
      description: "Comfortable accommodations for your stay",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Advanced Monitoring",
      description: "24/7 patient monitoring and care systems",
      image: "https://images.unsplash.com/photo-1581093804475-577d72e38aa0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Family Amenities",
      description: "Comfortable spaces for families and visitors",
      image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">State-of-the-Art Facilities</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Modern medical equipment and comfortable environments designed for your care and comfort
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern hospital operating room with advanced medical equipment and sterile environment" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          
          <div className="space-y-8">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                  <facility.icon className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{facility.title}</h3>
                  <p className="text-slate-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facility Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilityFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl text-center shadow-lg">
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
