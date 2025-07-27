import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function HealthTipsSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscribeNewsletterMutation = useMutation({
    mutationFn: async (data: { email: string }) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive monthly health tips and wellness advice.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribeNewsletterMutation.mutate({ email });
    }
  };

  const healthTips = [
    {
      category: "Nutrition",
      title: "Essential Nutrients During Pregnancy",
      description: "Learn about the key vitamins and minerals needed for a healthy pregnancy and how to incorporate them into your daily diet.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      category: "Wellness",
      title: "Managing Menopause Symptoms",
      description: "Discover natural ways to manage menopause symptoms and maintain your quality of life during this transition.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      category: "Prevention",
      title: "Importance of Regular Screenings",
      description: "Understanding when and why regular gynecological screenings are crucial for early detection and prevention.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Health Tips & Resources</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay informed with expert advice and educational resources for women's health
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {healthTips.map((tip, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={tip.image} 
                alt={tip.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{tip.category}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{tip.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {tip.description}
                </p>
                <Button variant="link" className="text-primary font-semibold hover:text-primary-medium transition-colors p-0">
                  Read More →
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary to-primary-medium rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Health Tips</h3>
          <p className="mb-6 opacity-90">Get monthly health tips and wellness advice delivered to your inbox</p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-full text-slate-800 border-0 bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              disabled={subscribeNewsletterMutation.isPending}
              className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors"
            >
              {subscribeNewsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
