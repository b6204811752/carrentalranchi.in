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

const jsonLdBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  "@id": "https://carrentalranchi.in/#business",
  name: "Car Rental Ranchi",
  description: "Best car rental and cab service in Ranchi, Jharkhand. Affordable taxi booking for local, outstation, airport transfer, wedding, and corporate travel.",
  url: "https://carrentalranchi.in",
  telephone: "+91-7488341848",
  email: "carrentalranchi01@gmail.com",
  image: "https://carrentalranchi.in/logo/favicon-48x48.png",
  address: { "@type": "PostalAddress", streetAddress: "Main Road", addressLocality: "Ranchi", addressRegion: "Jharkhand", addressCountry: "IN", postalCode: "834001" },
  geo: { "@type": "GeoCoordinates", latitude: 23.3441, longitude: 85.3096 },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
  priceRange: "₹10/km - ₹22/km",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Google Pay, PhonePe, Paytm, Bank Transfer",
  areaServed: [
    { "@type": "State", name: "Jharkhand" },
    { "@type": "State", name: "Bihar" },
    { "@type": "State", name: "West Bengal" },
    { "@type": "State", name: "Odisha" },
    { "@type": "State", name: "Uttar Pradesh" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cab Services in Ranchi",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local Cab Service Ranchi", description: "Hourly rental cabs for city travel" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outstation Cab from Ranchi", description: "One-way & round trip to 100+ cities" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ranchi Airport Transfer", description: "Birsa Munda Airport pickup & drop" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Car Rental Ranchi", description: "Decorated premium vehicles for weddings" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Car Rental", description: "Monthly packages for businesses" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tempo Traveller Ranchi", description: "12 & 17 seater for group travel" } },
    ],
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "2450", bestRating: "5", worstRating: "1" },
  review: [
    { "@type": "Review", author: { "@type": "Person", name: "Rajesh Kumar" }, datePublished: "2026-03-15", reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Excellent service! Booked Ranchi to Jamshedpur cab. Driver was on time, car was clean. Best cab service in Ranchi." },
    { "@type": "Review", author: { "@type": "Person", name: "Priya Singh" }, datePublished: "2026-02-20", reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Used Car Rental Ranchi for my wedding. The decorated Innova Crysta was stunning. Highly recommended!" },
    { "@type": "Review", author: { "@type": "Person", name: "Amit Verma" }, datePublished: "2026-04-10", reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Regular customer for Ranchi to Patna route. Always reliable, affordable, and comfortable. 5 stars!" },
  ],
  sameAs: [
    "https://www.facebook.com/carrentalranchi",
    "https://www.instagram.com/carrentalranchi",
    "https://twitter.com/carrentalranchi",
  ],
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://carrentalranchi.in/#website",
  name: "Car Rental Ranchi",
  url: "https://carrentalranchi.in",
  description: "Best cab service in Ranchi, Jharkhand. Book affordable taxi for local, outstation, airport, wedding travel.",
  publisher: { "@id": "https://carrentalranchi.in/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://carrentalranchi.in/routes?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-IN",
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://carrentalranchi.in/#organization",
  name: "Car Rental Ranchi",
  url: "https://carrentalranchi.in",
  logo: {
    "@type": "ImageObject",
    url: "https://carrentalranchi.in/logo/favicon-48x48.png",
    width: 48,
    height: 48,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7488341848",
    contactType: "customer service",
    availableLanguage: ["Hindi", "English"],
    areaServed: "IN",
    contactOption: "TollFree",
  },
  sameAs: [
    "https://www.facebook.com/carrentalranchi",
    "https://www.instagram.com/carrentalranchi",
    "https://twitter.com/carrentalranchi",
  ],
  foundingDate: "2018",
  foundingLocation: "Ranchi, Jharkhand, India",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50, maxValue: 100 },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
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
