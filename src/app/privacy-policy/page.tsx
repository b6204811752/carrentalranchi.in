import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Privacy Policy | Car Rental Ranchi", description: "Privacy Policy for Car Rental Ranchi cab service website.", alternates: { canonical: "https://carrentalranchi.in/privacy-policy" } };

export default function PrivacyPage() {
  return (
    <div className="hero-gradient pt-4 pb-0">
      <div className="container-custom"><Breadcrumbs items={[{ label: "Privacy Policy" }]} /><h1 className="text-3xl font-bold mt-2 mb-6">Privacy Policy</h1></div>
      <section className="section-padding"><div className="container-custom max-w-3xl text-gray-300 text-sm leading-relaxed space-y-4">
        <p><strong className="text-white">Last Updated:</strong> May 2025</p>
        <p>Car Rental Ranchi (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy describes how we collect, use, and protect your personal information when you use our website and services.</p>
        <h2 className="text-xl font-bold text-white">Information We Collect</h2>
        <p>We collect information you voluntarily provide when booking a cab: name, phone number, email, pickup/drop locations, travel dates. We also collect website usage data through cookies and analytics.</p>
        <h2 className="text-xl font-bold text-white">How We Use Your Information</h2>
        <ul><li>To process your cab bookings and provide transportation services</li><li>To communicate booking confirmations and driver details</li><li>To improve our services and website experience</li><li>To send promotional offers (only with your consent)</li></ul>
        <h2 className="text-xl font-bold text-white">Data Protection</h2>
        <p>We implement appropriate security measures to protect your personal data. We do not sell or share your information with third parties except as necessary to provide our services.</p>
        <h2 className="text-xl font-bold text-white">Contact</h2>
        <p>For privacy-related queries, contact us at <a href="mailto:carrentalranchi01@gmail.com" className="text-primary-light">carrentalranchi01@gmail.com</a> or call <a href="tel:+917488341848" className="text-primary-light">+91 7488341848</a>.</p>
      </div></section>
    </div>
  );
}
