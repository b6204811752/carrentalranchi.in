import { Metadata } from "next";
import FleetSection from "@/components/FleetSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Our Fleet | Car Rental Ranchi | Sedan, SUV, Innova, Tempo Traveller",
  description: "Browse our fleet of 100+ vehicles. Swift Dzire, Toyota Etios, Innova, Innova Crysta, Ertiga, Scorpio, Fortuner, Tempo Traveller. Call +91 7488341848.",
  alternates: { canonical: "https://carrentalranchi.in/fleet" },
};

export default function FleetPage() {
  return (
    <div className="hero-gradient pt-4 pb-0">
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "Our Fleet" }]} />
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-2">Our Vehicle Fleet</h1>
        <p className="text-gray-300 mb-4 max-w-2xl">100+ well-maintained, sanitized vehicles for every travel need. From budget sedans to premium SUVs and tempo travellers.</p>
      </div>
      <FleetSection />
    </div>
  );
}
