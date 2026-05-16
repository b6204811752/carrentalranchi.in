import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Terms & Conditions | Car Rental Ranchi", description: "Terms and Conditions for Car Rental Ranchi cab booking service.", alternates: { canonical: "https://carrentalranchi.in/terms" } };

export default function TermsPage() {
  return (
    <div className="hero-gradient pt-4 pb-0">
      <div className="container-custom"><Breadcrumbs items={[{ label: "Terms & Conditions" }]} /><h1 className="text-3xl font-bold mt-2 mb-6">Terms &amp; Conditions</h1></div>
      <section className="section-padding"><div className="container-custom max-w-3xl text-gray-300 text-sm leading-relaxed space-y-4">
        <p><strong className="text-white">Last Updated:</strong> May 2025</p>
        <h2 className="text-xl font-bold text-white">Booking & Payment</h2>
        <ul><li>Booking is confirmed only after verbal/written confirmation from our team.</li><li>Fares are based on per-km rates. Toll charges, parking, and state taxes are extra.</li><li>For outstation trips, minimum 300 km/day applies. Driver allowance ₹300-400/day.</li><li>Payment can be made via Cash, UPI, Card, or Bank Transfer.</li></ul>
        <h2 className="text-xl font-bold text-white">Cancellation Policy</h2>
        <ul><li>Free cancellation up to 4 hours before scheduled pickup.</li><li>50% charge for cancellations within 4 hours of pickup.</li><li>100% charge for no-show or cancellation after driver dispatch.</li></ul>
        <h2 className="text-xl font-bold text-white">Passenger Responsibilities</h2>
        <ul><li>Passengers must behave respectfully with the driver.</li><li>Illegal activities, smoking, and alcohol consumption in the vehicle are prohibited.</li><li>Luggage must not exceed the vehicle&apos;s capacity.</li></ul>
        <h2 className="text-xl font-bold text-white">Liability</h2>
        <p>Car Rental Ranchi is not liable for delays caused by traffic, road conditions, weather, or government restrictions. We strive for on-time service but cannot guarantee exact arrival times.</p>
        <h2 className="text-xl font-bold text-white">Contact</h2>
        <p>For queries about these terms, contact <a href="tel:+917488341848" className="text-primary-light">+91 7488341848</a> or email <a href="mailto:carrentalranchi01@gmail.com" className="text-primary-light">carrentalranchi01@gmail.com</a>.</p>
      </div></section>
    </div>
  );
}
