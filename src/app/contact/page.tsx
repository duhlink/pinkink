import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Pink Ink Cosmetic Tattoo Vancouver. Book a consultation or ask questions about our permanent makeup services.",
}

export default function ContactPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Have questions? We're here to help with all your cosmetic tattoo needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-gray-600">105 W 6th Street</p>
                    <p className="text-gray-600">Vancouver, WA 98660</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a 
                      href="mailto:pinkinkcosmetictattoo@gmail.com"
                      className="text-primary hover:text-primary-600 transition-colors"
                    >
                      pinkinkcosmetictattoo@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <a 
                      href="tel:+19716789047"
                      className="text-primary hover:text-primary-600 transition-colors"
                    >
                      +1 971-678-9047
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Instagram className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Instagram</h3>
                    <a 
                      href="https://www.instagram.com/pinkinkcosmetictattoo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-600 transition-colors"
                    >
                      @pinkinkcosmetictattoo
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h3 className="font-medium mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>By appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Links
              </h2>
              <div className="space-y-4">
                <Button asChild className="w-full bg-primary hover:bg-primary-600">
                  <a href="/booking">Book Appointment</a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="/services">View Services</a>
                </Button>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-4">Important Information</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    A consultation is required before booking any permanent makeup service. 
                    This allows us to assess your needs and ensure the best possible results.
                  </p>
                  <p>
                    For the most up-to-date availability and instant booking, please use our 
                    online booking system.
                  </p>
                  <p>
                    We recommend booking your appointment in advance as our schedule fills up quickly.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h3 className="font-medium mb-4">Cancellation Policy</h3>
                <p className="text-gray-600">
                  We require 48 hours notice for cancellations. Late cancellations or 
                  no-shows may result in forfeiture of your deposit.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Location
            </h2>
            <div className="aspect-[16/9] w-full bg-gray-100 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.2790257891584!2d-122.67845542326755!3d45.62751427107893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a8c1c63570d9%3A0x7e8e98a2c23f5f1a!2s105%20W%206th%20St%2C%20Vancouver%2C%20WA%2098660!5e0!3m2!1sen!2sus!4v1708471824048!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
