import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Pink Ink Cosmetic Tattoo Vancouver. Professional permanent makeup and microblading services by certified artists.",
}

const highlights = [
  {
    title: "Expert Artistry",
    description: "Certified and experienced in the latest permanent makeup techniques"
  },
  {
    title: "Safety First",
    description: "Strict sterilization protocols and professional-grade equipment"
  },
  {
    title: "Custom Approach",
    description: "Personalized service tailored to your unique features and preferences"
  },
  {
    title: "Natural Results",
    description: "Enhance your natural beauty with subtle, realistic results"
  }
]

const certifications = [
  "Licensed Permanent Makeup Artist",
  "Certified in Blood-Borne Pathogens",
  "Advanced Microblading Certification",
  "Powder Brows Specialist",
  "Continuing Education in Latest Techniques"
]

export default function AboutPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Pink Ink
            </h1>
            <p className="text-lg text-gray-600">
              Vancouver's trusted destination for premium permanent makeup services.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Welcome to Pink Ink Cosmetic Tattoo
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Hi, I'm Fawn! I am truly passionate about what I do and dedicated to providing 
                  the best experience. I offer a variety of semi-permanent cosmetic services in 
                  a professional and clean environment.
                </p>
                <p className="mb-4">
                  At Pink Ink, we understand that every client is unique. That's why we take 
                  the time to understand your desired look and create customized solutions that 
                  enhance your natural beauty. Our goal is to help you feel confident and 
                  beautiful every day.
                </p>
                <p>
                  With years of experience and continuous education in the latest techniques, 
                  we ensure that every client receives the highest quality service and 
                  natural-looking results that last.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Professional Certifications
              </h2>
              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-gray-600">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Look?
            </h2>
            <p className="text-gray-600 mb-6">
              Book a consultation to discuss your goals and learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary-600">
                <Link href="/booking">Book Consultation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Commitment
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At Pink Ink, we are committed to providing the highest quality permanent 
                makeup services in Vancouver. We maintain strict sterilization protocols 
                and use only the best professional-grade equipment and pigments.
              </p>
              <p>
                We believe in continuous education and staying up-to-date with the latest 
                techniques and trends in the industry. This ensures that our clients 
                receive the most advanced and effective treatments available.
              </p>
              <p>
                Your safety and satisfaction are our top priorities. We take the time to 
                understand your goals and provide detailed information about our procedures, 
                ensuring you feel confident and comfortable throughout your experience with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
