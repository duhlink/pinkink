import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Professional cosmetic tattoo services including microblading, powder brows, and permanent makeup in Vancouver. Natural-looking results by certified artists.",
}

const services = [
  {
    id: "powder-brows",
    title: "Powder Brows",
    description: "Powder brows are a great option for all skin types and gives your brows a beautiful soft powdery look. Perfect for those wanting a more defined, makeup-like appearance.",
    price: "$600.00",
    duration: "2 hrs",
    includes: [
      "Initial consultation",
      "Custom brow design",
      "Topical anesthetic",
      "Aftercare instructions",
      "Touch-up session (if needed)"
    ],
    image: "/images/service-placeholder.svg"
  },
  {
    id: "microblading",
    title: "Microblading",
    description: "Done manually with a handheld tool to create the illusion of real hair. Not suitable for all skin types (i.e. oily skin). Perfect for achieving natural-looking, hair-like strokes.",
    price: "$600.00",
    duration: "2 hrs",
    includes: [
      "Initial consultation",
      "Custom brow mapping",
      "Topical anesthetic",
      "Aftercare instructions",
      "Touch-up session (if needed)"
    ],
    image: "/images/service-placeholder.svg"
  },
  {
    id: "combo-brows",
    title: "Combo Brows",
    description: "A combination of microblading and powder brows for the best of both worlds. Get natural hair-like strokes combined with a soft powder effect.",
    price: "$600.00",
    duration: "2 hrs 30 mins",
    includes: [
      "Initial consultation",
      "Custom combination design",
      "Topical anesthetic",
      "Aftercare instructions",
      "Touch-up session (if needed)"
    ],
    image: "/images/service-placeholder.svg"
  },
  {
    id: "nano-brows",
    title: "Nano Brows",
    description: "This new and very popular service is much like microblading only instead of using a handheld tool, it's done with a machine. Suitable for all skin types.",
    price: "$675.00",
    duration: "3 hrs",
    includes: [
      "Initial consultation",
      "Custom brow design",
      "Topical anesthetic",
      "Aftercare instructions",
      "Touch-up session (if needed)"
    ],
    image: "/images/service-placeholder.svg"
  },
  {
    id: "eyeliner",
    title: "Eyeliner Tattoo",
    description: "Choose whichever eyeliner style you desire to make your eyes pop and simplify your makeup routine. Available in various styles.",
    price: "$400.00",
    duration: "2 hrs",
    includes: [
      "Consultation",
      "Custom design",
      "Topical anesthetic",
      "Aftercare instructions",
      "Touch-up session (if needed)"
    ],
    image: "/images/service-placeholder.svg"
  },
  {
    id: "lip-blush",
    title: "Lip Blush",
    description: "Lip blush gives your lips a beautiful and naturally fuller appearance by adding more color and definition.",
    price: "$600.00",
    duration: "2 hrs 30 mins",
    includes: [
      "Consultation",
      "Color customization",
      "Topical anesthetic",
      "Aftercare instructions",
      "Touch-up session (if needed)"
    ],
    image: "/images/service-placeholder.svg"
  }
]

export default function ServicesPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gray-600">
              Professional cosmetic tattoo services tailored to enhance your natural beauty.
            </p>
            <div className="mt-4 p-4 bg-primary/10 rounded-lg">
              <p className="font-medium">Free Consultation Available</p>
              <p className="text-sm text-gray-600">
                Book a 30-minute consultation to discuss your desired look and get all your questions answered.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {services.map((service) => (
              <div 
                key={service.id}
                id={service.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden service-card"
              >
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Price:</span>
                        <span>{service.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Duration:</span>
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h3 className="font-medium mb-2">Includes:</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {service.includes.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild className="w-full bg-primary hover:bg-primary-600">
                      <Link href="/booking">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium text-lg mb-2">Annual Touch Up</h3>
                <p className="text-gray-600 mb-2">
                  Within 10-18 months from last appointment
                </p>
                <div className="flex justify-between text-sm">
                  <span>$300.00</span>
                  <span>2 hrs</span>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium text-lg mb-2">Lash Line Enhancement</h3>
                <p className="text-gray-600 mb-2">
                  Gives your eyelashes a fuller and darker appearance
                </p>
                <div className="flex justify-between text-sm">
                  <span>$350.00</span>
                  <span>1 hr 30 mins</span>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium text-lg mb-2">Beauty Mark</h3>
                <p className="text-gray-600 mb-2">
                  Add color to an existing beauty mark or create a new one
                </p>
                <div className="flex justify-between text-sm">
                  <span>$50.00</span>
                  <span>30 mins</span>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium text-lg mb-2">Freckles</h3>
                <p className="text-gray-600 mb-2">
                  Natural looking freckles to enhance your look
                </p>
                <div className="flex justify-between text-sm">
                  <span>$150.00</span>
                  <span>45 mins</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-2">How long do results last?</h3>
                <p className="text-gray-600">
                  Results typically last 1-3 years, depending on the service and individual factors 
                  such as skin type and lifestyle. Annual touch-ups are recommended to maintain the best results.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Is the procedure painful?</h3>
                <p className="text-gray-600">
                  We use topical anesthetics to minimize discomfort during the procedure. Most 
                  clients report minimal to moderate discomfort.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">What is the healing process like?</h3>
                <p className="text-gray-600">
                  Healing typically takes 7-14 days. You'll receive detailed aftercare instructions 
                  to ensure optimal results. Touch-ups may be needed depending on how your skin heals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
