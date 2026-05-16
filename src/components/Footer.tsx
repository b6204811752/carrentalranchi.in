import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Star, ExternalLink } from "lucide-react";
import routes from "@/data/routes.json";
import cities from "@/data/cities.json";

const popularRoutes = routes.slice(0, 12);

const serviceLinks = [
  { name: "One Way Cab", href: "/services/one-way-cab" },
  { name: "Round Trip Cab", href: "/services/round-trip-cab" },
  { name: "Airport Transfer", href: "/services/airport-transfer" },
  { name: "Local Cab Service", href: "/services/local-cab-service" },
  { name: "Outstation Cab", href: "/services/outstation-cab" },
  { name: "Wedding Car Rental", href: "/services/wedding-car-rental" },
  { name: "Corporate Car Rental", href: "/services/corporate-car-rental" },
  { name: "Tempo Traveller", href: "/services/tempo-traveller" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Fleet", href: "/fleet" },
  { name: "Tour Packages", href: "/tours" },
  { name: "Fare Chart", href: "/fare-chart" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQ", href: "/faq" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-white/5">
      {/* Cities Hub — Internal Linking for SEO */}
      <div className="container-custom pt-10 pb-6">
        <h3 className="text-white font-semibold mb-4 text-base text-center">Cities We Serve</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {cities.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className="text-xs bg-white/5 hover:bg-primary/10 border border-white/8 rounded-full px-3 py-1.5 text-gray-400 hover:text-primary-light transition-colors no-underline">
              Cab in {c.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom section-padding !pt-6 !pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo/favicon-48x48.png" alt="Car Rental Ranchi Logo" width={42} height={42} className="rounded-xl" />
              <div>
                <span className="text-lg font-bold text-white block">Car Rental Ranchi</span>
                <span className="text-[10px] text-primary-light block -mt-0.5">Best Cab | Taxi | Car Rental Service in Jharkhand</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Ranchi&apos;s most trusted cab service since 2018. Affordable, safe, and reliable car rental for local, outstation, airport, wedding &amp; corporate travel across Jharkhand and India.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+917488341848" className="flex items-center gap-2 text-gray-300 hover:text-primary-light transition-colors">
                <Phone size={14} className="text-primary-light" /> +91 7488341848
              </a>
              <a href="mailto:carrentalranchi01@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-primary-light transition-colors">
                <Mail size={14} className="text-primary-light" /> carrentalranchi01@gmail.com
              </a>
              <span className="flex items-center gap-2 text-gray-300">
                <MapPin size={14} className="text-primary-light" /> Main Road, Ranchi, Jharkhand 834001
              </span>
              <span className="flex items-center gap-2 text-gray-300">
                <Clock size={14} className="text-primary-light" /> 24/7 Available — 365 Days
              </span>
            </div>

            {/* Business Credentials — Trust Signal */}
            <div className="mt-4 p-3 bg-white/3 rounded-lg border border-white/5">
              <p className="text-gray-500 text-[11px] leading-relaxed">
                <strong className="text-gray-400">Registered Business</strong> — Car Rental Ranchi, Est. 2018, Ranchi, Jharkhand, India. Serving 2,450+ customers across 5 states.
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Our Services</h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-gray-400 hover:text-primary-light text-sm transition-colors no-underline">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-gray-400 hover:text-primary-light text-sm transition-colors no-underline">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Popular Routes</h3>
            <ul className="flex flex-col gap-2">
              {popularRoutes.map((r) => (
                <li key={r.slug}>
                  <Link href={`/routes/${r.slug}`} className="text-gray-400 hover:text-primary-light text-sm transition-colors no-underline">
                    Ranchi to {r.to} Cab
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-5">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Car Rental Ranchi. All Rights Reserved. | Ranchi, Jharkhand, India</p>
          <div className="flex items-center gap-1">
            <Star size={14} className="text-accent" />
            <span>Rated 4.8/5 by 2,450+ customers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
