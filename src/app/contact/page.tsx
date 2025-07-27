export default function Contact() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="medical-heading">Contact Us</h1>
          <p className="medical-subheading mt-4 max-w-2xl mx-auto">
            We're here to help. Reach out to us to schedule an appointment or ask any questions you may have.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="medical-card">
              <h2 className="medical-subheading mb-4">Get in Touch</h2>
              <p className="medical-body mb-6">
                Our team is available to assist you during our office hours. We look forward to hearing from you.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-foreground">Address:</h3>
                  <p className="text-muted-foreground">123 Main Street, Anytown, USA 12345</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Phone:</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Email:</h3>
                  <p className="text-muted-foreground">info@mothercare.com</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Hours:</h3>
                  <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            <div className="medical-card">
              <h2 className="medical-subheading mb-4">Send us a Message</h2>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block font-bold mb-2 text-sm">Name</label>
                    <input type="text" id="name" className="w-full p-2 border border-input rounded-md bg-background" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-bold mb-2 text-sm">Email</label>
                    <input type="email" id="email" className="w-full p-2 border border-input rounded-md bg-background" />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block font-bold mb-2 text-sm">Message</label>
                  <textarea id="message" rows={5} className="w-full p-2 border border-input rounded-md bg-background" />
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-md font-bold hover:bg-primary/90 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
