"use client"

import { useEffect } from "react"

interface SquareBookingProps {
  merchantId: string
}

export default function SquareBooking({ merchantId }: SquareBookingProps) {
  useEffect(() => {
    // Load Square Appointments JS
    const script = document.createElement("script")
    script.src = "https://square.site/appointments/buyer/widget/#{merchantId}.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    // Cleanup
    return () => {
      document.body.removeChild(script)
    }
  }, [merchantId])

  return (
    <div 
      id="square-appointments-wrapper" 
      className="w-full min-h-[600px] bg-white rounded-lg shadow-lg p-4"
    >
      <div className="flex items-center justify-center h-[500px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-500">Loading booking calendar...</p>
        </div>
      </div>
    </div>
  )
}
