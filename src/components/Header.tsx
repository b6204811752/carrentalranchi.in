"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown, Car, MapPin, Navigation, Briefcase, Plane, Heart } from "lucide-react";

const services = [
  { name: "One Way Cab", href: "/services/one-way-cab", icon: Navigation },
  { name: "Round Trip", href: "/services/round-trip-cab", icon: Navigation },
  { name: "Airport Transfer", href: "/services/airport-transfer", icon: Plane },
  { name: "Local Cab", href: "/services/local-cab-service", icon: MapPin },
  { name: "Outstation", href: "/services/outstation-cab", icon: Car },
  { name: "Wedding Car", href: "/services/wedding-car-rental", icon: Heart },
  { name: "Corporate", href: "/services/corporate-car-rental", icon: Briefcase },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Fleet", href: "/fleet" },
  { name: "Tours", href: "/tours" },
  { name: "Routes", href: "/routes" },
  { name: "Fare Chart", href: "/fare-chart" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm py-2">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="tel:+917488341848" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone size={14} /> +91 7488341848
            </a>
            <span className="hidden md:inline text-white/70">|</span>
            <span className="hidden md:inline text-white/80">📧 carrentalranchi01@gmail.com</span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-white/80">
            <span>🕐 24/7 Available</span>
            <span>|</span>
            <span>⭐ 4.8/5 Rating</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-dark/95 backdrop-blur-lg border-b border-white/5">
        <div className="container-custom flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <Image
              src="/logo/favicon-48x48.png"
              alt="Car Rental Ranchi Logo"
              width={42}
              height={42}
              className="rounded-xl"
              priority
            />
            <div>
              <span className="text-lg font-bold text-white leading-tight block">Car Rental Ranchi</span>
              <span className="text-[10px] text-primary-light leading-tight block -mt-0.5">Best Cab | Taxi | Car Rental Service in Jharkhand</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setShowServices(true)}
                onMouseLeave={() => link.hasDropdown && setShowServices(false)}
              >
                <Link
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all flex items-center gap-1 no-underline"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} />}
                </Link>
                {link.hasDropdown && showServices && (
                  <div className="absolute top-full left-0 mt-1 w-56 glass-card p-2 shadow-2xl">
                    {services.map((s) => (
                      <Link key={s.name} href={s.href} className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all no-underline">
                        <s.icon size={16} className="text-primary-light" />
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+917488341848" className="btn-accent text-sm !py-2 !px-4">
              <Phone size={16} /> Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-dark-light border-t border-white/5 pb-4">
            <div className="container-custom flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium no-underline">
                  {link.name}
                </Link>
              ))}
              <a href="tel:+917488341848" className="btn-accent text-sm mt-2 justify-center">
                <Phone size={16} /> Call +91 7488341848
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
