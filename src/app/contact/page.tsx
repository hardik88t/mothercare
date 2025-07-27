export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-4">
            We are here to help you with all your healthcare needs. Please
            feel free to contact us with any questions or to schedule an
            appointment.
          </p>
          <p className="font-bold">Address:</p>
          <p>123 Main Street, Anytown, USA 12345</p>
          <p className="font-bold mt-4">Phone:</p>
          <p>(123) 456-7890</p>
          <p className="font-bold mt-4">Email:</p>
          <p>info@mothercare.com</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-light transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
