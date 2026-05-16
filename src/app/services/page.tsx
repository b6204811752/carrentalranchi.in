import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Car } from "lucide-react";
import servicesData from "@/data/services.json";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Our Services | Cab Service Ranchi | Car Rental Ranchi",
  description: "Complete cab services in Ranchi — One Way, Round Trip, Airport Transfer, Local, Outstation, Wedding, Corporate, Tempo Traveller. Call +91 7488341848.",
  alternates: { canonical: "https://carrentalranchi.in/services" },
};

export default function ServicesPage() {
  return (
    <div className="hero-gradient pt-4 pb-0">
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "Services" }]} />
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-2">Our Cab Services in Ranchi</h1>
        <p className="text-gray-300 mb-8 max-w-2xl">Complete transportation solutions for every need — from local city rides to interstate travel.</p>
      </div>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="glass-card p-6 hover:border-primary/30 transition-all group no-underline">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Car size={24} className="text-primary-light" />
                </div>
                <h2 className="text-white font-bold text-lg mb-2">{s.name}</h2>
                <p className="text-gray-400 text-sm mb-4">{s.shortDesc}</p>
                <span className="text-primary-light text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
