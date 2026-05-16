import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone, Navigation, Clock } from "lucide-react";
import routes from "@/data/routes.json";
import Breadcrumbs from "@/components/Breadcrumbs";
import HeroBackground from "@/components/HeroBackground";

export const metadata: Metadata = {
  title: "All Cab Routes from Ranchi | 100+ Destinations | Car Rental Ranchi",
  description: "Browse all cab routes from Ranchi to cities across Jharkhand, Bihar, West Bengal, Odisha, UP. Book affordable taxi with best per-km rates. Call +91 7488341848.",
  alternates: { canonical: "https://carrentalranchi.in/routes" },
};

export default function RoutesPage() {
  const states = [...new Set(routes.map(r => r.state))];
  return (
    <>
      <div className="relative pt-4 pb-12 overflow-hidden">
        <HeroBackground />
        <div className="hero-gradient absolute inset-0 pointer-events-none z-0" />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={[{ label: "All Routes" }]} />
          <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-2 leading-tight">All <span className="gradient-text">Cab Routes</span> from Ranchi</h1>
          <p className="text-gray-300 mb-4 max-w-2xl text-sm leading-relaxed">Book cab from Ranchi to {routes.length}+ destinations across 5 states. One-way &amp; round trip available at best prices.</p>
        </div>
      </div>

      {states.map(state => {
        const stateRoutes = routes.filter(r => r.state === state);
        return (
          <section key={state} className="section-padding odd:bg-dark-light/50">
            <div className="container-custom">
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-glow !w-10 !h-10"><MapPin size={18} className="text-primary-light" /></div>
                <h2 className="text-xl font-bold">Ranchi to {state} Routes ({stateRoutes.length})</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {stateRoutes.map(r => (
                  <Link key={r.slug} href={`/routes/${r.slug}`} className="route-card no-underline group">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white font-semibold text-sm">Ranchi</span>
                      <ArrowRight size={13} className="text-gray-600 group-hover:text-primary-light transition-colors" />
                      <span className="text-accent font-semibold text-sm">{r.to}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-1"><Navigation size={10} />{r.distance} km</span>
                      <span className="flex items-center gap-1"><Clock size={10} />{r.duration}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <span className="text-primary-light font-bold">₹{r.fares.dzire}+</span>
                      <span className="text-gray-600 text-xs group-hover:text-primary-light transition-colors">View →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-accent/10" />
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-xl font-bold mb-3">Can&apos;t Find Your Route?</h2>
          <p className="text-gray-300 mb-5 text-sm">We serve 500+ destinations. Call us for custom routes!</p>
          <a href="tel:+917488341848" className="btn-accent"><Phone size={18} /> +91 7488341848</a>
        </div>
      </section>
    </>
  );
}
