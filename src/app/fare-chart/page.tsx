import { Metadata } from "next";
import fleet from "@/data/fleet.json";
import routes from "@/data/routes.json";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Cab Fare Chart Ranchi | Per Km Rates | Car Rental Ranchi",
  description: "Check cab fare chart for Ranchi. Per km rates for Sedan, SUV, Innova, Crysta, Tempo Traveller. Route-wise fare calculator. Call +91 7488341848.",
  alternates: { canonical: "https://carrentalranchi.in/fare-chart" },
};

export default function FareChartPage() {
  const topRoutes = routes.slice(0, 20);
  return (
    <div className="hero-gradient pt-4 pb-0">
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "Fare Chart" }]} />
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-2">Cab Fare Chart — Ranchi</h1>
        <p className="text-gray-300 mb-8 max-w-2xl">Transparent pricing with no hidden charges. Check our per-km rates and route-wise fares below.</p>
      </div>
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-xl font-bold mb-5">Per Kilometer Rates</h2>
          <div className="glass-card overflow-x-auto">
            <table className="fare-table">
              <thead><tr><th>Vehicle</th><th>Type</th><th>Seats</th><th>Per Km</th><th>Base (10hr/100km)</th><th>Driver Allowance</th></tr></thead>
              <tbody>
                {fleet.map(v => (
                  <tr key={v.id}>
                    <td className="text-white font-medium">{v.name}</td>
                    <td className="text-gray-400">{v.categoryLabel}</td>
                    <td>{v.passengers}</td>
                    <td className="text-primary-light font-bold">₹{v.perKm}/km</td>
                    <td className="text-accent font-medium">₹{v.basePrice}</td>
                    <td className="text-gray-400">₹{v.passengers > 6 ? 400 : 300}/day</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section-padding bg-dark-light/50">
        <div className="container-custom">
          <h2 className="text-xl font-bold mb-5">Route-wise Fare Estimates</h2>
          <div className="glass-card overflow-x-auto">
            <table className="fare-table">
              <thead><tr><th>Route</th><th>Distance</th><th>Duration</th><th>Sedan</th><th>SUV</th><th>Innova</th><th>Crysta</th></tr></thead>
              <tbody>
                {topRoutes.map(r => (
                  <tr key={r.slug}>
                    <td className="text-white font-medium">Ranchi → {r.to}</td>
                    <td>{r.distance} km</td>
                    <td className="text-gray-400">{r.duration}</td>
                    <td className="text-primary-light">₹{r.fares.dzire}</td>
                    <td>₹{r.fares.ertiga}</td>
                    <td>₹{r.fares.innova}</td>
                    <td className="text-accent font-medium">₹{r.fares.crysta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">* All fares are estimates for one-way travel. Toll charges and state taxes are extra. Round trip rates are lower per km.</p>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-r from-primary/20 to-accent/10">
        <div className="container-custom text-center">
          <h2 className="text-xl font-bold mb-3">Get Exact Fare for Your Trip</h2>
          <p className="text-gray-300 mb-4 text-sm">Call us for a customized quote based on your exact route.</p>
          <a href="tel:+917488341848" className="btn-accent"><Phone size={18} /> +91 7488341848</a>
        </div>
      </section>
    </div>
  );
}
