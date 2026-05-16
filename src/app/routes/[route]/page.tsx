import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Clock, Navigation, Phone, ArrowRight, CheckCircle, Star, Route, Fuel, AlertTriangle, Info, Calendar } from "lucide-react";
import routes from "@/data/routes.json";
import fleet from "@/data/fleet.json";
import routeDetailsData from "@/data/routeDetails.json";
import BookingForm from "@/components/BookingForm";
import FareCalculator from "@/components/FareCalculator";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import HeroBackground from "@/components/HeroBackground";
import FleetSection from "@/components/FleetSection";

const routeDetails: Record<string, {
  highwayName: string; viaRoute: string; enRouteCities: string[];
  restStops: string[]; roadCondition: string; tollInfo: string;
  bestTimeToTravel: string; travelTips: string; aboutDestination: string;
}> = routeDetailsData;

export function generateStaticParams() {
  return routes.map((r) => ({ route: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ route: string }> }): Promise<Metadata> {
  const { route } = await params;
  const r = routes.find((r) => r.slug === route);
  if (!r) return {};
  return {
    title: r.metaTitle,
    description: r.metaDesc,
    alternates: { canonical: `https://carrentalranchi.in/routes/${r.slug}` },
    openGraph: { title: r.metaTitle, description: r.metaDesc },
  };
}

export default async function RoutePage({ params }: { params: Promise<{ route: string }> }) {
  const { route } = await params;
  const r = routes.find((r) => r.slug === route);
  if (!r) notFound();

  const details = routeDetails[r.slug];

  const faqs = [
    { q: `What is the cab fare from Ranchi to ${r.to}?`, a: `The cab fare from Ranchi to ${r.to} starts at ₹${r.fares.dzire} in a Swift Dzire sedan (${r.distance} km × ₹${fleet[0].perKm}/km). SUV rates: Ertiga ₹${r.fares.ertiga}, Innova ₹${r.fares.innova}, Innova Crysta ₹${r.fares.crysta}. ${details ? `Toll charges (${details.tollInfo}) are additional.` : 'Toll charges and state taxes are additional at actuals.'} No hidden charges guaranteed.` },
    { q: `How far is ${r.to} from Ranchi by road?`, a: `${r.to} is approximately ${r.distance} km from Ranchi${details ? ` via ${details.highwayName}` : ' via the fastest highway route'}. The journey takes about ${r.duration} by car depending on traffic and weather conditions.${details ? ` Route: ${details.viaRoute}.` : ''} Our GPS-equipped drivers take the most efficient route.` },
    { q: `Is one-way cab available from Ranchi to ${r.to}?`, a: `Yes! Car Rental Ranchi offers both one-way drop and round-trip cab service from Ranchi to ${r.to}. With one-way cab, you pay only for ${r.distance} km — no return charges. This is the most economical option for single-direction travel.` },
    { q: `Can I book a cab from ${r.to} to Ranchi?`, a: `Absolutely! We provide cab service from ${r.to} to Ranchi as well. The distance (${r.distance} km) and fare structure remain the same. Call +91 7488341848 or WhatsApp to book your return trip.` },
    { q: `Which car is best for Ranchi to ${r.to} trip?`, a: `For the ${r.distance} km journey, we recommend: Swift Dzire for budget solo/couple travel, Ertiga for small families (4-6 persons), Toyota Innova for larger groups and extra comfort, Innova Crysta for premium/business travel, and Tempo Traveller for groups of 10+. All vehicles are AC, well-maintained, and GPS-tracked.` },
    { q: `Do you provide airport pickup for Ranchi to ${r.to}?`, a: `Yes! We offer 24/7 airport pickup from Birsa Munda Airport (Ranchi Airport) with flight tracking. Our driver will be waiting at the arrival gate with a name board. Direct drop to ${r.to} without any stops.` },
    { q: `What payment methods do you accept?`, a: `We accept Cash, Google Pay, PhonePe, Paytm, UPI, net banking, and bank transfer. You can pay before or after the trip as per your convenience. No advance booking amount required for most trips.` },
    { q: `Is night travel available from Ranchi to ${r.to}?`, a: `Yes, we provide 24/7 cab service including late night and early morning departures. Night charges (10 PM - 6 AM) may apply at ₹1-2/km extra depending on the vehicle type. Our drivers are experienced in night driving on this route.` },
    { q: `Can I cancel my Ranchi to ${r.to} cab booking?`, a: `Yes, free cancellation is available up to 4 hours before the scheduled pickup time. Cancellations within 4 hours may attract 50% charges. No-show or cancellation after driver dispatch incurs full charges.` },
    { q: `How do I book a Ranchi to ${r.to} cab?`, a: `Booking is simple: Call +91 7488341848 or WhatsApp your travel details (pickup address, date, time, vehicle preference). You'll receive instant confirmation with driver details and exact fare. No app download needed!` },
    { q: `Do you offer round trip packages for ${r.to}?`, a: `Yes! Round trip packages include both Ranchi → ${r.to} and ${r.to} → Ranchi journey with waiting time. You get discounted per-km rates compared to two separate one-way bookings. Driver stays with you for the entire trip.` },
    { q: `Are your drivers experienced on the Ranchi to ${r.to} route?`, a: `Yes, all our drivers assigned to this route have 5+ years of driving experience and are specifically familiar with the Ranchi-${r.to} highway. They know all rest stops, fuel stations, food joints, and shortcuts. All drivers are police-verified and professionally trained.` },
  ];

  const related = routes.filter((x) => x.state === r.state && x.slug !== r.slug).slice(0, 6);

  const jsonLdRoute = {
    "@context": "https://schema.org", "@type": "TaxiService",
    name: `Ranchi to ${r.to} Cab Service - Car Rental Ranchi`,
    description: r.metaDesc,
    provider: {
      "@type": "Organization", name: "Car Rental Ranchi", telephone: "+91-7488341848",
      url: "https://carrentalranchi.in",
      address: { "@type": "PostalAddress", addressLocality: "Ranchi", addressRegion: "Jharkhand", addressCountry: "IN" },
    },
    areaServed: [{ "@type": "City", name: "Ranchi" }, { "@type": "City", name: r.to }],
    priceRange: `₹${r.fares.dzire} - ₹${r.fares.crysta}`,
    availableChannel: {
      "@type": "ServiceChannel", servicePhone: { "@type": "ContactPoint", telephone: "+91-7488341848" },
      serviceUrl: `https://carrentalranchi.in/routes/${r.slug}`,
    },
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org", "@type": "HowTo",
    name: `How to Book Ranchi to ${r.to} Cab`,
    description: `Book a cab from Ranchi to ${r.to} in 3 easy steps with Car Rental Ranchi.`,
    step: [
      { "@type": "HowToStep", position: 1, name: "Call or WhatsApp", text: "Call +91 7488341848 or send your travel details via WhatsApp" },
      { "@type": "HowToStep", position: 2, name: "Confirm Booking", text: "Share pickup location, date, time & vehicle choice. Get instant confirmation with fare." },
      { "@type": "HowToStep", position: 3, name: "Enjoy Your Ride", text: "Driver arrives at your doorstep on time. Sit back, relax, and enjoy the journey!" },
    ],
    totalTime: "PT2M",
  };

  return (
    <>
      <div className="relative pt-4 pb-12 overflow-hidden">
        <HeroBackground />
        <div className="hero-gradient absolute inset-0 pointer-events-none z-0" />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={[{ label: "Routes", href: "/routes" }, { label: `Ranchi to ${r.to}` }]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
            <div>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="section-heading">{r.state}</span>
                <span className="bg-accent/15 text-accent text-xs font-medium px-3 py-1 rounded-full">{r.distance} km</span>
                {details && <span className="bg-white/8 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">{details.highwayName}</span>}
              </div>
              <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
                Ranchi to {r.to} <span className="gradient-text">Cab Service</span> — Book Taxi at ₹{fleet[0].perKm}/km
              </h1>
              <p className="text-gray-300 mb-5 text-sm leading-relaxed">
                Book affordable cab from Ranchi to {r.to} ({r.distance} km, {r.duration}). {details ? `Via ${details.highwayName}. ` : ''}One-way &amp; round trip taxi available in sedan, SUV, Innova Crysta. Professional drivers, AC vehicles, 24/7 service. Call +91 7488341848.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="stat-card !p-3">
                  <Navigation size={18} className="text-primary-light mx-auto mb-1" />
                  <div className="text-white font-bold">{r.distance} km</div>
                  <div className="text-gray-500 text-xs">Distance</div>
                </div>
                <div className="stat-card !p-3">
                  <Clock size={18} className="text-accent mx-auto mb-1" />
                  <div className="text-white font-bold">{r.duration}</div>
                  <div className="text-gray-500 text-xs">Duration</div>
                </div>
                <div className="stat-card !p-3">
                  <Star size={18} className="text-yellow-400 mx-auto mb-1" />
                  <div className="text-white font-bold">₹{r.fares.dzire}</div>
                  <div className="text-gray-500 text-xs">Starting Fare</div>
                </div>
              </div>
              <a href="tel:+917488341848" className="btn-accent"><Phone size={18} /> Book Now — +91 7488341848</a>
            </div>
            <BookingForm fromCity="Ranchi" toCity={r.to} />
          </div>
        </div>
      </div>

      <TrustBadges compact />

      {/* Route Via Section — Unique content competitors don't have */}
      {details && (
        <section className="section-padding bg-dark-light/50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Ranchi to {r.to} Route Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card-light p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Route size={18} className="text-primary-light" />
                  <h3 className="text-white font-semibold">Route &amp; Highway</h3>
                </div>
                <p className="text-gray-300 text-sm mb-2"><strong>Highway:</strong> {details.highwayName}</p>
                <p className="text-gray-300 text-sm"><strong>Via:</strong> {details.viaRoute}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {details.enRouteCities.map(c => (
                    <span key={c} className="text-xs bg-primary/10 text-primary-light px-2.5 py-1 rounded-full border border-primary/20">{c}</span>
                  ))}
                </div>
              </div>
              <div className="glass-card-light p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Info size={18} className="text-accent" />
                  <h3 className="text-white font-semibold">Road Conditions</h3>
                </div>
                <p className="text-gray-300 text-sm">{details.roadCondition}</p>
              </div>
              <div className="glass-card-light p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Fuel size={18} className="text-green-400" />
                  <h3 className="text-white font-semibold">Rest Stops &amp; Food</h3>
                </div>
                <ul className="space-y-1.5">
                  {details.restStops.map((stop, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                      <CheckCircle size={14} className="text-green-400 shrink-0 mt-0.5" />
                      {stop}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card-light p-5">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle size={18} className="text-yellow-400" />
                  <h3 className="text-white font-semibold">Toll &amp; Travel Tips</h3>
                </div>
                <p className="text-gray-300 text-sm mb-2"><strong>Toll:</strong> {details.tollInfo}</p>
                <p className="text-gray-300 text-sm"><strong>Best Time:</strong> {details.bestTimeToTravel}</p>
              </div>
            </div>
            {details.travelTips && (
              <div className="glass-card-light p-5 mt-4 border-l-4 border-accent">
                <p className="text-gray-300 text-sm"><strong className="text-accent">💡 Pro Tip:</strong> {details.travelTips}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Fare Table */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Ranchi to {r.to} Cab Fare — All Vehicle Types</h2>
          <div className="glass-card overflow-hidden">
            <table className="fare-table">
              <thead><tr><th>Vehicle</th><th>Type</th><th>Per Km</th><th>Estimated Fare</th><th>Capacity</th></tr></thead>
              <tbody>
                {fleet.map((v) => (
                  <tr key={v.id}>
                    <td className="text-white font-medium">{v.name}</td>
                    <td className="text-gray-400">{v.categoryLabel}</td>
                    <td className="text-primary-light font-medium">₹{v.perKm}/km</td>
                    <td className="text-accent font-bold">₹{Math.round(r.distance * v.perKm)}</td>
                    <td className="text-gray-400">{v.passengers} persons</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">* Toll charges and state taxes extra. Driver allowance ₹300-400/day for trips exceeding 300 km/day.</p>
        </div>
      </section>

      {/* Fare Calculator */}
      <section className="section-padding bg-dark-light/50">
        <div className="container-custom max-w-2xl">
          <FareCalculator defaultFrom="Ranchi" defaultTo={r.to} defaultDistance={r.distance} />
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Ranchi to {r.to} Cab Service — Complete Travel Guide</h2>
          <div className="text-gray-300 text-sm leading-relaxed space-y-4">
            <p>Looking for a reliable and affordable <strong>cab service from Ranchi to {r.to}</strong>? <strong>Car Rental Ranchi</strong> is the most trusted name for <strong>Ranchi to {r.to} taxi service</strong>, offering the lowest fares starting at just <strong>₹{fleet[0].perKm}/km</strong> with zero hidden charges. Whether you need a <strong>one-way cab from Ranchi to {r.to}</strong>, a <strong>round trip taxi booking</strong>, or a comfortable <strong>outstation cab for {r.to}</strong>, we guarantee the best travel experience with professional drivers, clean AC vehicles, and 24/7 availability.</p>

            <p>The <strong>Ranchi to {r.to} distance</strong> is approximately <strong>{r.distance} km</strong>{details ? ` via ${details.highwayName}` : ''}, and the journey takes around <strong>{r.duration}</strong>{details ? `. The route passes through ${details.enRouteCities.join(', ')}` : ' via the best national highway route'}. Our experienced chauffeurs know every road, shortcut, and pit stop on this route, ensuring you reach {r.to} safely and on time.</p>

            {/* About Destination — Unique per-route content */}
            {details && (
              <>
                <h3 className="text-xl font-bold text-white mt-6">About {r.to}</h3>
                <p>{details.aboutDestination}</p>
              </>
            )}

            <h3 className="text-xl font-bold text-white mt-6">Ranchi to {r.to} Cab Fare — Transparent Pricing</h3>
            <p>We believe in <strong>100% transparent pricing</strong> with no surprise charges. Our <strong>Ranchi to {r.to} cab fare</strong> is calculated on a simple per-kilometer basis:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>Sedan (Swift Dzire/Etios):</strong> ₹{r.fares.dzire} for {r.distance} km one-way — best for solo travelers and couples</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>SUV (Ertiga):</strong> ₹{r.fares.ertiga} for {r.distance} km one-way — ideal for families of 4-6</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>Premium (Innova):</strong> ₹{r.fares.innova} for {r.distance} km one-way — extra comfort and luggage space</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>Luxury (Innova Crysta):</strong> ₹{r.fares.crysta} for {r.distance} km one-way — top-tier comfort for business/VIP travel</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-6">Why Car Rental Ranchi is the Best Choice for {r.to} Trip</h3>
            <ul className="space-y-2">
              {[
                `Lowest fares in Jharkhand — starting at ₹${fleet[0].perKm}/km with absolutely no hidden charges or surge pricing`,
                "One-way cab option available — pay only for the distance you travel, no return fare",
                "24/7 booking & availability — early morning 4 AM, late night 11 PM, weekends, holidays",
                "Professional, police-verified drivers with 5+ years of experience on Jharkhand routes",
                "100% AC, sanitized vehicles — regular deep cleaning, hand sanitizer, masks available",
                "GPS-tracked vehicles — real-time location sharing with family for complete safety",
                "Free cancellation up to 4 hours before pickup — no questions asked",
                "Door-to-door service — pickup from your home, hotel, office, railway station, or airport",
                "Flexible payment — Cash, Google Pay, PhonePe, Paytm, UPI, bank transfer all accepted",
                "Dedicated customer support — call +91 7488341848 anytime for trip assistance"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" />{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-white mt-6">How to Book Ranchi to {r.to} Cab — Simple 3-Step Process</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
              <div className="glass-card-light p-4 text-center">
                <div className="text-2xl mb-2">📞</div>
                <h4 className="text-white font-semibold text-sm mb-1">Step 1: Call or WhatsApp</h4>
                <p className="text-gray-400 text-xs">Call <a href="tel:+917488341848" className="text-primary-light">+91 7488341848</a> or send your travel details via WhatsApp</p>
              </div>
              <div className="glass-card-light p-4 text-center">
                <div className="text-2xl mb-2">✅</div>
                <h4 className="text-white font-semibold text-sm mb-1">Step 2: Confirm Booking</h4>
                <p className="text-gray-400 text-xs">Share pickup location, date, time &amp; vehicle choice. Get instant confirmation with fare.</p>
              </div>
              <div className="glass-card-light p-4 text-center">
                <div className="text-2xl mb-2">🚗</div>
                <h4 className="text-white font-semibold text-sm mb-1">Step 3: Enjoy Your Ride</h4>
                <p className="text-gray-400 text-xs">Driver arrives at your doorstep on time. Sit back, relax, and enjoy the journey!</p>
              </div>
            </div>

            {r.attractions.length > 0 && (
              <>
                <h3 className="text-xl font-bold text-white mt-6">Top Places to Visit in {r.to}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {r.attractions.map((a, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/3 rounded-lg p-2.5 border border-white/5">
                      <MapPin size={14} className="text-accent shrink-0" />
                      <span className="text-gray-200">{a}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <h3 className="text-xl font-bold text-white mt-6">Frequently Searched — Ranchi to {r.to}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                `Ranchi to ${r.to} cab`, `Ranchi to ${r.to} taxi`, `Ranchi to ${r.to} taxi fare`,
                `Ranchi to ${r.to} cab booking`, `Ranchi to ${r.to} one way cab`,
                `Ranchi to ${r.to} round trip cab`, `${r.to} to Ranchi cab`,
                `Ranchi to ${r.to} car rental`, `Ranchi to ${r.to} cab service`,
                `Ranchi to ${r.to} distance`, `cheapest cab Ranchi to ${r.to}`,
                `Ranchi airport to ${r.to} cab`, `Ranchi to ${r.to} Innova booking`,
                `best cab service Ranchi to ${r.to}`, `Car Rental Ranchi to ${r.to}`,
              ].map((kw, i) => (
                <span key={i} className="text-[10px] bg-white/5 border border-white/8 rounded-full px-2.5 py-1 text-gray-400">{kw}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Routes */}
      {related.length > 0 && (
        <section className="section-padding bg-dark-light/50">
          <div className="container-custom">
            <h2 className="text-xl font-bold mb-6">More Routes in {r.state}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((x) => (
                <Link key={x.slug} href={`/routes/${x.slug}`} className="glass-card-light p-4 hover:border-primary/30 transition-all no-underline flex items-center justify-between">
                  <div>
                    <span className="text-white font-medium text-sm">Ranchi → {x.to}</span>
                    <div className="text-gray-500 text-xs mt-1">{x.distance} km • {x.duration}</div>
                  </div>
                  <span className="text-accent font-bold text-sm">₹{x.fares.dzire}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FleetSection compact />

      <FAQSection faqs={faqs} title={`Ranchi to ${r.to} Cab — FAQ`} />

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-accent/10" />
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Book Ranchi to {r.to} Cab Now</h2>
          <p className="text-gray-300 mb-5 text-sm">Starting at just ₹{r.fares.dzire}. Call now for instant booking!</p>
          <a href="tel:+917488341848" className="btn-accent text-base"><Phone size={18} /> +91 7488341848</a>
        </div>
      </section>

      {/* Updated: dateModified for freshness signal */}
      <div className="container-custom py-4 text-center">
        <p className="text-gray-600 text-xs">Last updated: May 2026 | Ranchi to {r.to} cab service by Car Rental Ranchi</p>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdRoute) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }} />
    </>
  );
}
