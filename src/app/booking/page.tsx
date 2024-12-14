import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Schedule your cosmetic tattoo appointment with Pink Ink Vancouver. Easy online booking for microblading, powder brows, and permanent makeup services.",
}

export default function BookingPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Book Your Appointment
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Transform your look with our professional cosmetic tattoo services. 
              Choose your preferred service and time below.
            </p>
            <div className="bg-primary/10 rounded-lg p-4 mb-8 text-sm">
              <p className="font-medium text-primary">Important Notice</p>
              <p className="text-gray-600">
                A deposit is required to secure your booking. This amount will be 
                deducted from your final service cost.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Online Booking
            </h2>
            <p className="text-gray-600 mb-8">
              Click below to access our online booking system where you can view availability 
              and schedule your appointment.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-600">
              <a 
                href="https://pink-ink-llc.square.site"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Book Now <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="space-y-6 text-gray-600">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Booking Policy
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Please arrive 10 minutes before your appointment time</li>
                <li>48-hour cancellation notice required</li>
                <li>Deposit is non-refundable for late cancellations</li>
                <li>Consultation is included in your appointment</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Preparation Guidelines
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Avoid blood thinners 48 hours before your appointment</li>
                <li>No alcohol 24 hours before the procedure</li>
                <li>Come with clean, makeup-free skin</li>
                <li>Avoid sun exposure and tanning before your appointment</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Questions?
              </h2>
              <p className="mb-4">
                If you have any questions about booking or our services, please don't 
                hesitate to contact us.
              </p>
              <a 
                href="mailto:pinkinkcosmetictattoo@gmail.com"
                className="text-primary hover:text-primary-600 font-medium"
              >
                pinkinkcosmetictattoo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
