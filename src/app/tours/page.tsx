import { Metadata } from "next";
import Link from "next/link";
import { Clock, IndianRupee, MapPin, ArrowRight } from "lucide-react";
import tours from "@/data/tours.json";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tour Packages from Ranchi | Jharkhand Tourism | Car Rental Ranchi",
  description: "Explore Jharkhand & beyond with our tour packages from Ranchi. Netarhat, Betla, Deoghar, waterfalls, Kolkata & more. Starting ₹1500. Call +91 7488341848.",
  alternates: { canonical: "https://carrentalranchi.in/tours" },
};

export default function ToursPage() {
  return (
    <div className="hero-gradient pt-4 pb-0">
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "Tour Packages" }]} />
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-2">Tour Packages from Ranchi</h1>
        <p className="text-gray-300 mb-8 max-w-2xl">Explore the best of Jharkhand and neighboring states with our curated tour packages. All tours include AC cab with professional driver.</p>
      </div>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map(t => (
              <Link key={t.slug} href={`/tours/${t.slug}`} className="glass-card overflow-hidden group no-underline hover:border-primary/30 transition-all">
                <div className="h-36 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <MapPin size={36} className="text-primary-light opacity-40 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-5">
                  <h2 className="text-white font-bold text-base mb-2">{t.name}</h2>
                  <div className="flex gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Clock size={12} /> {t.duration}</span>
                    <span className="flex items-center gap-1"><IndianRupee size={12} /> From ₹{t.price}</span>
                  </div>
                  <p className="text-gray-400 text-xs line-clamp-2 mb-3">{t.desc}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {t.places.slice(0,3).map(p => <span key={p} className="text-[10px] bg-white/5 rounded px-2 py-0.5 text-gray-300">{p}</span>)}
                    {t.places.length > 3 && <span className="text-[10px] text-gray-500">+{t.places.length-3} more</span>}
                  </div>
                  <span className="text-primary-light text-xs flex items-center gap-1 group-hover:gap-2 transition-all">View Details <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
