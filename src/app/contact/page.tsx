import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import HeroBackground from "@/components/HeroBackground";

export const metadata: Metadata = {
  title: "Contact Us | Car Rental Ranchi | Call +91 7488341848",
  description: "Contact Car Rental Ranchi for cab booking. Call +91 7488341848, Email carrentalranchi01@gmail.com. 24/7 available. Ranchi, Jharkhand.",
  alternates: { canonical: "https://carrentalranchi.in/contact" },
};

export default function ContactPage() {
  return (
    <>
      <div className="relative pt-4 pb-12 overflow-hidden">
        <HeroBackground />
        <div className="hero-gradient absolute inset-0 pointer-events-none z-0" />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
          <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-2 leading-tight"><span className="gradient-text">Contact</span> Car Rental Ranchi</h1>
          <p className="text-gray-300 text-sm">We&apos;re available 24/7. Call, WhatsApp, or fill the form.</p>
        </div>
      </div>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: "Phone", value: "+91 7488341848", href: "tel:+917488341848", desc: "Call us 24/7 for instant booking" },
                  { icon: MessageCircle, label: "WhatsApp", value: "+91 7488341848", href: "https://wa.me/917488341848", desc: "Quick booking via WhatsApp" },
                  { icon: Mail, label: "Email", value: "carrentalranchi01@gmail.com", href: "mailto:carrentalranchi01@gmail.com", desc: "For quotes and corporate inquiries" },
                  { icon: MapPin, label: "Location", value: "Ranchi, Jharkhand 834001", href: "#", desc: "Serving all of Jharkhand & nearby states" },
                  { icon: Clock, label: "Hours", value: "24/7 — Always Open", href: "#", desc: "We never close. Book anytime." },
                ].map((item, i) => (
                  <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="premium-card p-5 flex items-start gap-4 no-underline block shimmer">
                    <div className="icon-glow shrink-0">
                      <item.icon size={22} className="text-primary-light" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs">{item.label}</div>
                      <div className="text-white font-bold">{item.value}</div>
                      <div className="text-gray-500 text-xs mt-1">{item.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
