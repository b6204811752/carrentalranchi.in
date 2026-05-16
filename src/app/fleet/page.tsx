import { Metadata } from "next";
import FleetSection from "@/components/FleetSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import HeroBackground from "@/components/HeroBackground";

export const metadata: Metadata = {
  title: "Our Fleet | Car Rental Ranchi | Sedan, SUV, Innova, Tempo Traveller",
  description: "Browse our fleet of 100+ vehicles. Swift Dzire, Toyota Etios, Innova, Innova Crysta, Ertiga, Scorpio, Fortuner, Tempo Traveller. Call +91 7488341848.",
  alternates: { canonical: "https://carrentalranchi.in/fleet" },
};

export default function FleetPage() {
  return (
    <>
      <div className="relative pt-4 pb-12 overflow-hidden">
        <HeroBackground />
        <div className="hero-gradient absolute inset-0 pointer-events-none z-0" />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={[{ label: "Our Fleet" }]} />
          <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-2 leading-tight">Our <span className="gradient-text">Vehicle Fleet</span></h1>
          <p className="text-gray-300 max-w-2xl text-sm leading-relaxed">100+ well-maintained, sanitized vehicles for every travel need. From budget sedans to premium SUVs and tempo travellers.</p>
        </div>
      </div>
      <FleetSection />
    </>
  );
}
