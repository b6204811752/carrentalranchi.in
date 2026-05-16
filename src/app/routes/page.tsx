import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import routes from "@/data/routes.json";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "All Cab Routes from Ranchi | 100+ Destinations | Car Rental Ranchi",
  description: "Browse all cab routes from Ranchi to cities across Jharkhand, Bihar, West Bengal, Odisha, UP. Book affordable taxi with best per-km rates. Call +91 7488341848.",
  alternates: { canonical: "https://carrentalranchi.in/routes" },
};

export default function RoutesPage() {
  const states = [...new Set(routes.map(r => r.state))];
  return (
    <div className="hero-gradient pt-4 pb-0">
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "All Routes" }]} />
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-2">All Cab Routes from Ranchi</h1>
        <p className="text-gray-300 mb-8 max-w-2xl">Book cab from Ranchi to {routes.length}+ destinations across 5 states. One-way &amp; round trip available at best prices.</p>
      </div>
      {states.map(state => {
        const stateRoutes = routes.filter(r => r.state === state);
        return (
          <section key={state} className="section-padding odd:bg-dark-light/50">
            <div className="container-custom">
              <h2 className="text-xl font-bold mb-5 flex items-center gap-2"><MapPin size={20} className="text-primary-light" /> Ranchi to {state} Routes ({stateRoutes.length})</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {stateRoutes.map(r => (
                  <Link key={r.slug} href={`/routes/${r.slug}`} className="glass-card-light p-4 hover:border-primary/30 transition-all no-underline group">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white font-medium text-sm">Ranchi</span>
                      <ArrowRight size={14} className="text-gray-600 group-hover:text-primary-light transition-colors" />
                      <span className="text-accent font-medium text-sm">{r.to}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">{r.distance} km • {r.duration}</span>
                      <span className="text-primary-light font-bold">₹{r.fares.dzire}+</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}
      <section className="py-12 bg-gradient-to-r from-primary/20 to-accent/10">
        <div className="container-custom text-center">
          <h2 className="text-xl font-bold mb-3">Can&apos;t Find Your Route?</h2>
          <p className="text-gray-300 mb-5 text-sm">We serve 500+ destinations. Call us for custom routes!</p>
          <a href="tel:+917488341848" className="btn-accent"><Phone size={18} /> +91 7488341848</a>
        </div>
      </section>
    </div>
  );
}
