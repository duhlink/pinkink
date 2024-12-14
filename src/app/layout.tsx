import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MainNav from "@/components/layout/main-nav"
import MobileNav from "@/components/layout/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://cosmetictattoovancouver.com'),
  title: {
    default: "Pink Ink Cosmetic Tattoo Vancouver | Professional Microblading & PMU",
    template: "%s | Pink Ink Cosmetic Tattoo Vancouver"
  },
  description: "Vancouver's premier cosmetic tattoo studio specializing in microblading, powder brows, and permanent makeup. Natural-looking, professional results by certified artists.",
  keywords: [
    "cosmetic tattoo vancouver",
    "microblading vancouver",
    "powder brows vancouver",
    "permanent makeup vancouver",
    "eyebrow tattoo",
    "PMU vancouver",
    "semi permanent makeup",
    "Pink Ink Cosmetic Tattoo"
  ],
  authors: [{ name: "Pink Ink Cosmetic Tattoo" }],
  creator: "Pink Ink Cosmetic Tattoo",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://cosmetictattoovancouver.com",
    title: "Pink Ink Cosmetic Tattoo Vancouver | Professional Microblading & PMU",
    description: "Vancouver's premier cosmetic tattoo studio specializing in microblading, powder brows, and permanent makeup.",
    siteName: "Pink Ink Cosmetic Tattoo Vancouver",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pink Ink Cosmetic Tattoo Vancouver",
    description: "Vancouver's premier cosmetic tattoo studio specializing in microblading, powder brows, and permanent makeup.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Add your Google verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              Pink Ink
            </div>
            <MainNav />
            <MobileNav />
          </div>
        </header>
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-50 border-t">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Contact</h3>
                <p>Vancouver, BC</p>
                <a 
                  href="mailto:info@pinkinkcosmetictattoo.com" 
                  className="text-primary hover:text-primary-600 transition-colors"
                >
                  info@pinkinkcosmetictattoo.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Hours</h3>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday: By appointment</p>
                <p>Sunday: Closed</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
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
            <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Pink Ink Cosmetic Tattoo. All rights reserved.</p>
              <p className="mt-2">
                <a href="/privacy-policy" className="hover:text-primary">Privacy Policy</a>
                {" • "}
                <a href="/terms" className="hover:text-primary">Terms of Service</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
