import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalMapSection from "@/components/GlobalMapSection";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://carrentalranchi.in"),
  title: {
    default: "Car Rental Ranchi | Best Cab Service in Ranchi | Taxi Booking ₹10/km",
    template: "%s | Car Rental Ranchi",
  },
  description:
    "Ranchi's #1 car rental & cab service. Book sedan, SUV, Innova for local, outstation, airport transfer, wedding. 24/7 service. Call +91 7488341848.",
  keywords: [
    "car rental ranchi","cab service ranchi","taxi service ranchi","ranchi cab booking",
    "ranchi taxi","outstation cab ranchi","airport taxi ranchi","ranchi to jamshedpur cab",
    "ranchi to patna cab","ranchi to kolkata cab","wedding car ranchi","corporate cab ranchi",
  ],
  authors: [{ name: "Car Rental Ranchi" }],
  creator: "Car Rental Ranchi",
  publisher: "Car Rental Ranchi",
  formatDetection: { telephone: true, email: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Car Rental Ranchi",
    title: "Car Rental Ranchi | Best Cab & Taxi Service in Ranchi, Jharkhand",
    description: "Book affordable cab service in Ranchi. Local, outstation, airport, wedding car rental. 24/7 available. Call +91 7488341848.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://carrentalranchi.in" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  name: "Car Rental Ranchi",
  description: "Best car rental and cab service in Ranchi, Jharkhand. Affordable taxi booking for local, outstation, airport transfer, wedding, and corporate travel.",
  url: "https://carrentalranchi.in",
  telephone: "+91-7488341848",
  email: "carrentalranchi01@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Ranchi", addressRegion: "Jharkhand", addressCountry: "IN", postalCode: "834001" },
  geo: { "@type": "GeoCoordinates", latitude: 23.3441, longitude: 85.3096 },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
  priceRange: "₹10/km - ₹22/km",
  areaServed: ["Ranchi","Jharkhand","Bihar","West Bengal","Odisha","Uttar Pradesh"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cab Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local Cab Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outstation Cab" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Airport Transfer" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Car Rental" } },
    ],
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "2450", bestRating: "5" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Ranchi" />
        <meta name="geo.position" content="23.3441;85.3096" />
        <meta name="ICBM" content="23.3441, 85.3096" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <GlobalMapSection />
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
      </body>
    </html>
  );
}
