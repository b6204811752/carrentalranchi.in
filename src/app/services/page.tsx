import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Car } from "lucide-react";
import servicesData from "@/data/services.json";
import Breadcrumbs from "@/components/Breadcrumbs";
import HeroBackground from "@/components/HeroBackground";

export const metadata: Metadata = {
  title: "Our Services | Cab Service Ranchi | Car Rental Ranchi",
  description: "Complete cab services in Ranchi — One Way, Round Trip, Airport Transfer, Local, Outstation, Wedding, Corporate, Tempo Traveller. Call +91 7488341848.",
  alternates: { canonical: "https://carrentalranchi.in/services" },
};

export default function ServicesPage() {
  return (
    <>
      <div className="relative pt-4 pb-12 overflow-hidden">
        <HeroBackground />
        <div className="hero-gradient absolute inset-0 pointer-events-none z-0" />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-2 leading-tight">Our <span className="gradient-text">Cab Services</span> in Ranchi</h1>
          <p className="text-gray-300 max-w-2xl text-sm leading-relaxed">Complete transportation solutions for every need — from local city rides to interstate travel.</p>
        </div>
      </div>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="premium-card p-6 group no-underline shimmer">
                <div className="icon-glow mb-4">
                  <Car size={22} className="text-primary-light" />
                </div>
                <h2 className="text-white font-bold text-lg mb-2">{s.name}</h2>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{s.shortDesc}</p>
                <span className="text-primary-light text-sm flex items-center gap-1 group-hover:gap-2 transition-all font-medium">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
