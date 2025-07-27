export default function Home() {
  return (
    <div>
      <section className="bg-primary-light text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Your Health, Our Priority</h1>
        <p className="text-xl">
          Providing compassionate and comprehensive gynecological care.
        </p>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Obstetrics</h3>
              <p>
                Comprehensive care for pregnancy, childbirth, and the postpartum
                period.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Gynecology</h3>
              <p>
                Addressing all aspects of women's reproductive health.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Laparoscopy</h3>
              <p>
                Minimally invasive surgical procedures for various conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary-light py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Meet Our Specialist</h2>
          <p className="text-xl mb-8">
            Dr. Jane Doe is a dedicated and experienced gynecologist.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-light transition-colors">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
