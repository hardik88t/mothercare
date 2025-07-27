import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="medical-heading" style={{ color: 'var(--success)' }}>Contact Us</h1>
          <p className="medical-subheading mt-4 max-w-2xl mx-auto">
            We're here to help. Reach out to us to schedule an appointment or ask any questions you may have.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="medical-subheading">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="medical-subheading">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block font-bold mb-2 text-sm">Name</label>
                      <Input type="text" id="name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-bold mb-2 text-sm">Email</label>
                      <Input type="email" id="email" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block font-bold mb-2 text-sm">Message</label>
                    <Textarea id="message" rows={5} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}