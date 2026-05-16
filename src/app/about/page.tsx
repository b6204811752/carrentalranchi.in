import { Metadata } from "next";
import { CheckCircle, Award, Users, Car, Shield, Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us | Car Rental Ranchi | Trusted Cab Service Since 2018",
  description: "Learn about Car Rental Ranchi — Ranchi's most trusted cab service. 100+ vehicles, 2450+ happy customers, 24/7 service across Jharkhand. Call +91 7488341848.",
  alternates: { canonical: "https://carrentalranchi.in/about" },
};

export default function AboutPage() {
  return (
    <div className="hero-gradient pt-4 pb-0">
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "About Us" }]} />
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-6">About Car Rental Ranchi</h1>
      </div>
      <section className="section-padding">
        <div className="container-custom max-w-4xl text-gray-300 text-sm leading-relaxed space-y-4">
          <p className="text-base"><strong className="text-white">Car Rental Ranchi</strong> is Ranchi&apos;s most trusted and affordable cab service provider, serving thousands of satisfied customers since 2018. Based in Ranchi, Jharkhand, we provide comprehensive transportation solutions including local cab service, outstation travel, airport transfers, wedding car rental, corporate cab service, and tour packages.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            {[{ icon: Users, val: "2,450+", lbl: "Happy Customers" }, { icon: Car, val: "100+", lbl: "Vehicles" }, { icon: Award, val: "7+", lbl: "Years Experience" }, { icon: Shield, val: "24/7", lbl: "Available" }].map(s => (
              <div key={s.lbl} className="glass-card p-5 text-center">
                <s.icon size={28} className="text-primary-light mx-auto mb-2" />
                <div className="text-white font-bold text-xl">{s.val}</div>
                <div className="text-gray-400 text-xs">{s.lbl}</div>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p>Our mission is to provide safe, reliable, and affordable transportation to every traveler in Jharkhand. We believe that quality cab service should be accessible to everyone — whether you&apos;re a business traveler, a tourist, a family going on vacation, or a couple on their wedding day.</p>
          <h2 className="text-2xl font-bold text-white mt-6">Why Choose Us?</h2>
          <ul className="space-y-2">
            {["Lowest fares starting at ₹10/km — best price in Ranchi","100+ well-maintained, sanitized, AC vehicles","Professional, background-verified drivers","24/7 availability including holidays","Transparent pricing with no hidden charges","Coverage across Jharkhand, Bihar, West Bengal, Odisha, UP","Dedicated customer support via phone and WhatsApp","Free cancellation up to 4 hours before pickup","GST invoices for corporate bookings","Multiple payment options: Cash, UPI, Card, Bank Transfer"].map((item,i) => (
              <li key={i} className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" />{item}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold text-white mt-6">Our Fleet</h2>
          <p>We operate a diverse fleet of 100+ vehicles to cater to every travel need and budget. From budget-friendly sedans like Swift Dzire and Toyota Etios to spacious SUVs like Ertiga and Innova, premium vehicles like Innova Crysta and Fortuner, and large group vehicles like 12 &amp; 17 seater Tempo Travellers.</p>
          <h2 className="text-2xl font-bold text-white mt-6">Areas We Serve</h2>
          <p>While headquartered in Ranchi, our services extend across all 24 districts of Jharkhand and major cities in neighboring states including Patna, Gaya (Bihar), Kolkata, Asansol (West Bengal), Bhubaneswar, Rourkela (Odisha), and Varanasi (Uttar Pradesh).</p>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-r from-primary/20 to-accent/10">
        <div className="container-custom text-center">
          <h2 className="text-xl font-bold mb-3">Ready to Experience the Best Cab Service?</h2>
          <a href="tel:+917488341848" className="btn-accent mt-3"><Phone size={18} /> Call +91 7488341848</a>
        </div>
      </section>
    </div>
  );
}
