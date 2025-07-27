export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Obstetrics</h2>
          <p>
            Our obstetrics services include prenatal care, delivery, and
            postpartum care. We are dedicated to ensuring a healthy pregnancy
            and a safe delivery for you and your baby.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Gynecology</h2>
          <p>
            We offer a wide range of gynecological services, including annual
            exams, pap smears, and treatment for various conditions such as
            fibroids, endometriosis, and menopause.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Laparoscopy</h2>
          <p>
            Our skilled surgeons perform minimally invasive laparoscopic
            procedures for various conditions, resulting in less pain,
            shorter recovery times, and smaller incisions.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Infertility</h2>
          <p>
            We provide comprehensive evaluation and treatment for infertility,
            helping you achieve your dream of parenthood.
          </p>
        </div>
      </div>
    </div>
  );
}
