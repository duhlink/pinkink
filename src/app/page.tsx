import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Clock, Shield, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="absolute inset-0 bg-white/90" />
        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Welcome to Pink Ink<br />
            <span className="text-primary">Cosmetic Tattoo</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Professional microblading and permanent makeup services in Vancouver. 
            Enhance your natural beauty with our expert cosmetic tattoo services.
          </p>
          <div className="flex gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-600">
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.title} className="bg-white rounded-lg shadow-lg overflow-hidden service-card">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/service-placeholder.svg"
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-primary font-medium mb-4">{service.price}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/services#${service.id}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Pink Ink</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Client Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Look?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards effortless beauty.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/booking">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

const featuredServices = [
  {
    id: "powder-brows",
    title: "Powder Brows",
    description: "Achieve a soft, powdered effect that mimics perfectly filled-in brows.",
    price: "Starting at $600"
  },
  {
    id: "microblading",
    title: "Microblading",
    description: "Natural-looking, hair-like strokes for perfectly defined brows.",
    price: "Starting at $600"
  },
  {
    id: "nano-brows",
    title: "Nano Brows",
    description: "Machine-based technique suitable for all skin types.",
    price: "Starting at $675"
  }
]

const features = [
  {
    title: "Expert Artist",
    description: "Certified professional with years of experience",
    icon: <Sparkles className="w-full h-full" />
  },
  {
    title: "Natural Results",
    description: "Enhancement that looks naturally beautiful",
    icon: <Star className="w-full h-full" />
  },
  {
    title: "Safe & Sterile",
    description: "Strict sterilization protocols",
    icon: <Shield className="w-full h-full" />
  },
  {
    title: "Long-Lasting",
    description: "Results that last for years",
    icon: <Clock className="w-full h-full" />
  }
]

const testimonials = [
  {
    text: "Absolutely love my new brows! The attention to detail and professionalism was outstanding.",
    name: "Sarah M.",
    service: "Powder Brows"
  },
  {
    text: "Best decision I've made! Natural looking results and a fantastic experience overall.",
    name: "Jennifer L.",
    service: "Microblading"
  },
  {
    text: "Amazing results! The process was comfortable and the results exceeded my expectations.",
    name: "Michelle K.",
    service: "Nano Brows"
  }
]
