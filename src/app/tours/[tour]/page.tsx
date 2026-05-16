import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, MapPin, Clock, IndianRupee, CheckCircle } from "lucide-react";
import tours from "@/data/tours.json";
import fleet from "@/data/fleet.json";
import BookingForm from "@/components/BookingForm";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import HeroBackground from "@/components/HeroBackground";

export function generateStaticParams() {
  return tours.map(t => ({ tour: t.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ tour: string }> }): Promise<Metadata> {
  const { tour } = await params;
  const t = tours.find(t => t.slug === tour);
  if (!t) return {};
  return { title: t.metaTitle, description: t.metaDesc, alternates: { canonical: `https://carrentalranchi.in/tours/${t.slug}` } };
}

export default async function TourPage({ params }: { params: Promise<{ tour: string }> }) {
  const { tour } = await params;
  const t = tours.find(t => t.slug === tour);
  if (!t) notFound();
  const faqs = [
    { q: `What is the cost of ${t.name}?`, a: `The ${t.name} starts at ₹${t.price} per person. Price varies based on vehicle type, group size, and customizations. Call +91 7488341848 for exact quote.` },
    { q: `What is included in the package?`, a: `Package includes AC cab with experienced driver, fuel charges, and all sightseeing as per itinerary. Hotel accommodation, meals, entry tickets, and tolls are extra unless specified.` },
    { q: `Can I customize this tour?`, a: `Yes! All our tour packages are fully customizable. You can add/remove destinations, change duration, and choose your preferred vehicle type.` },
    { q: `How do I book this tour?`, a: `Call us at +91 7488341848 or WhatsApp us with your group size, preferred dates, and any special requirements. We'll create a customized itinerary and quote for you.` },
  ];
  return (
    <>
      <div className="relative pt-4 pb-12 overflow-hidden">
        <HeroBackground />
        <div className="hero-gradient absolute inset-0 pointer-events-none z-0" />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={[{ label: "Tours", href: "/tours" }, { label: t.name }]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">{t.name}</h1>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="flex items-center gap-1 bg-primary/20 text-primary-light text-sm px-3 py-1 rounded-full"><Clock size={14} /> {t.duration}</span>
                <span className="flex items-center gap-1 bg-accent/20 text-accent text-sm px-3 py-1 rounded-full"><IndianRupee size={14} /> From ₹{t.price}</span>
              </div>
              <p className="text-gray-300 mb-5 text-sm leading-relaxed">{t.desc}</p>
              <h3 className="text-white font-semibold mb-2">Places Covered:</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {t.places.map(p => <span key={p} className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-gray-300 flex items-center gap-1"><MapPin size={12} className="text-accent" />{p}</span>)}
              </div>
              <a href="tel:+917488341848" className="btn-accent"><Phone size={18} /> Book This Tour</a>
            </div>
            <BookingForm />
          </div>
        </div>
      </div>
      
      <TrustBadges compact />
      <section className="section-padding">
        <div className="container-custom max-w-4xl text-gray-300 text-sm leading-relaxed space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2"><span className="w-1.5 h-6 bg-accent rounded-full inline-block"></span>About {t.name}</h2>
          <p>{t.desc} This carefully curated tour package from Car Rental Ranchi covers the most iconic destinations, ensuring you experience the best of the region in comfort and style.</p>
          <h3 className="text-xl font-bold text-white mt-8 mb-4 flex items-center gap-2"><span className="w-1.5 h-5 bg-primary rounded-full inline-block"></span>Tour Highlights</h3>
          <ul className="space-y-3">{t.places.map((p,i) => <li key={i} className="flex items-start gap-3"><span className="text-primary-light mt-0.5 shrink-0">❖</span> <span className="text-gray-300">Visit {p}</span></li>)}</ul>
          <h3 className="text-xl font-bold text-white mt-8 mb-4 flex items-center gap-2"><span className="w-1.5 h-5 bg-primary rounded-full inline-block"></span>Available Vehicles for This Tour</h3>
          <div className="premium-card overflow-hidden mt-3 shimmer">
            <table className="fare-table">
              <thead><tr><th>Vehicle</th><th>Capacity</th><th>Per Km</th><th>Best For</th></tr></thead>
              <tbody>{fleet.slice(0,5).map(v => <tr key={v.id}><td className="text-white font-medium">{v.name}</td><td>{v.passengers} pax</td><td className="text-primary-light font-bold">₹{v.perKm}/km</td><td className="text-gray-400 text-xs">{v.bestFor}</td></tr>)}</tbody>
            </table>
          </div>
          <h3 className="text-xl font-bold text-white mt-8 mb-4 flex items-center gap-2"><span className="w-1.5 h-5 bg-primary rounded-full inline-block"></span>What&apos;s Included</h3>
          <ul className="space-y-2">{["AC cab with professional driver","Fuel charges for entire trip","Flexible pickup from your hotel/home","Multiple stops as per itinerary","24/7 customer support during trip"].map((x,i)=><li key={i} className="flex items-start gap-3"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5"/><span className="text-gray-300">{x}</span></li>)}</ul>
          <h3 className="text-xl font-bold text-white mt-8 mb-4 flex items-center gap-2"><span className="w-1.5 h-5 bg-red-500 rounded-full inline-block"></span>What&apos;s Not Included</h3>
          <ul className="space-y-2">{["Hotel accommodation","Meals and beverages","Monument/park entry tickets","Toll charges and parking fees","Personal expenses"].map((x,i)=><li key={i} className="flex items-start gap-3"><span className="text-red-400 font-bold shrink-0 mt-0">✕</span> <span className="text-gray-400">{x}</span></li>)}</ul>
        </div>
      </section>
      <FAQSection faqs={faqs} title={`${t.name} — FAQ`} />
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-accent/10" />
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-xl font-bold mb-3">Book {t.name}</h2>
          <p className="text-gray-300 mb-4 text-sm">Starting from ₹{t.price}. Customizable for your group.</p>
          <a href="tel:+917488341848" className="btn-accent mt-3 text-base"><Phone size={18} /> +91 7488341848</a>
        </div>
      </section>
    </>
  );
}
