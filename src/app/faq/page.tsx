import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | Car Rental Ranchi | Frequently Asked Questions",
  description: "Find answers to common questions about Car Rental Ranchi cab service. Booking, fares, vehicles, routes, payment, cancellation policy. Call +91 7488341848.",
  alternates: { canonical: "https://carrentalranchi.in/faq" },
};

const faqs = [
  { q: "What is the cheapest cab fare in Ranchi?", a: "Our cab fares start at ₹10/km for a Swift Dzire sedan. Local packages start at ₹800 for 4 hours/40 km." },
  { q: "How do I book a cab?", a: "Call +91 7488341848, WhatsApp us, or fill the booking form on our website. Instant confirmation." },
  { q: "Do you provide one-way cab service?", a: "Yes! Pay only for distance traveled. No return charges. Available on 100+ routes." },
  { q: "Which vehicles are available?", a: "Swift Dzire, Toyota Etios, Honda Amaze, Ertiga, Innova, Innova Crysta, Scorpio, Fortuner, Tempo Travellers." },
  { q: "Do you provide airport pickup?", a: "Yes! 24/7 airport transfer at Birsa Munda Airport with 60 min free waiting time." },
  { q: "What is the cancellation policy?", a: "Free cancellation up to 4 hours before pickup. Partial charges apply for late cancellations." },
  { q: "Do you provide GST invoices?", a: "Yes, proper GST invoices for all bookings, especially useful for corporate customers." },
  { q: "What payment methods do you accept?", a: "Cash, UPI (PhonePe, Google Pay, Paytm), debit/credit cards, and bank transfer." },
  { q: "Are your drivers verified?", a: "Yes, all drivers are background-verified, experienced, and familiar with routes across Jharkhand." },
  { q: "Do you operate on holidays?", a: "Yes! We operate 24/7/365 including all national holidays, festivals, and weekends." },
  { q: "Can I book for outstation multi-day trips?", a: "Yes! Multi-day packages available with minimum 300 km/day and driver allowance of ₹300-400/day." },
  { q: "Do you provide wedding car rental?", a: "Yes! Decorated Innova Crysta, Fortuner, and luxury cars available for weddings. Book 2-4 weeks in advance." },
];

export default function FAQPage() {
  return (
    <div className="hero-gradient pt-4 pb-0">
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "FAQ" }]} />
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-300 mb-4">Find answers to common questions about our cab service.</p>
      </div>
      <FAQSection faqs={faqs} title="" />
      <section className="py-12 bg-gradient-to-r from-primary/20 to-accent/10">
        <div className="container-custom text-center">
          <h2 className="text-xl font-bold mb-3">Still Have Questions?</h2>
          <a href="tel:+917488341848" className="btn-accent mt-3"><Phone size={18} /> Call +91 7488341848</a>
        </div>
      </section>
    </div>
  );
}
