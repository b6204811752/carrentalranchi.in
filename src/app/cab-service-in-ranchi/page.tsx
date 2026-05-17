import { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, CheckCircle, Clock, Car, Star, ArrowRight, Plane, Train, Building2, Heart, Briefcase, Users, Shield, Navigation } from "lucide-react";
import routes from "@/data/routes.json";
import fleet from "@/data/fleet.json";
import BookingForm from "@/components/BookingForm";
import FareCalculator from "@/components/FareCalculator";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import HeroBackground from "@/components/HeroBackground";

export const metadata: Metadata = {
  title: "Cab Service in Ranchi | #1 Car Rental Ranchi | Taxi Booking ₹12/km | 24/7",
  description: "Best cab service in Ranchi, Jharkhand. Book local taxi, outstation cab, Birsa Munda Airport transfer, wedding car. AC sedan, SUV, Innova. 24/7. Call +91 7488341848.",
  alternates: { canonical: "https://carrentalranchi.in/cab-service-in-ranchi" },
  openGraph: { title: "Cab Service in Ranchi | Best Car Rental & Taxi Booking", description: "Ranchi's #1 rated cab service. Local, outstation, airport, wedding. From ₹12/km. Call +91 7488341848." },
  keywords: ["cab service in ranchi", "taxi service ranchi", "car rental ranchi", "ranchi cab booking", "ranchi taxi", "outstation cab ranchi", "airport taxi ranchi", "local cab ranchi", "ranchi cab near me", "best cab service ranchi", "cab in ranchi", "car on rent in ranchi", "taxi in ranchi", "outstation taxi booking ranchi", "airport cab booking ranchi", "local taxi booking ranchi", "ranchi cab service", "car rental in ranchi", "taxi booking in ranchi", "local cab in ranchi", "airport cab in ranchi", "outstation cab in ranchi", "best cab service in ranchi", "top cab service in ranchi", "trusted cab service in ranchi", "professional cab service in ranchi", "reliable cab service in ranchi", "cab rental in ranchi", "taxi rental in ranchi", "innova in ranchi", "tempo traveller in ranchi", "suv in ranchi", "sedan in ranchi", "wedding car in ranchi", "airport transfer in ranchi", "outstation taxi booking in ranchi", "local taxi booking in ranchi", "airport cab booking in ranchi", "best cab service in ranchi", "top cab service in ranchi", "trusted cab service in ranchi", "professional cab service in ranchi", "reliable cab service in ranchi", "cab rental in ranchi", "taxi rental in ranchi", "innova in ranchi", "tempo traveller in ranchi", "suv in ranchi", "sedan in ranchi", "wedding car in ranchi", "airport transfer in ranchi", "best taxi service in ranchi", "best car rental in ranchi", "best taxi booking in ranchi", "best local taxi in ranchi", "best airport taxi in ranchi", "best outstation taxi in ranchi", "best wedding car in ranchi", "best airport transfer in ranchi", "best cab rental in ranchi", "best taxi rental in ranchi", "best innova in ranchi", "best tempo traveller in ranchi", "best suv in ranchi", "best sedan in ranchi", "best cab service in ranchi", "best taxi service in ranchi", "best car rental in ranchi", "best taxi booking in ranchi", "best local taxi in ranchi", "best airport taxi in ranchi", "best outstation taxi in ranchi", "best wedding car in ranchi", "best airport transfer in ranchi", "best cab rental in ranchi", "best taxi rental in ranchi", "best innova in ranchi", "best tempo traveller in ranchi", "best suv in ranchi", "best sedan in ranchi", "best cab service in ranchi", "best taxi service in ranchi", "best car rental in ranchi", "best taxi booking in ranchi", "best local taxi in ranchi", "best airport taxi in ranchi", "best outstation taxi in ranchi", "best wedding car in ranchi", "best airport transfer in ranchi", "best cab rental in ranchi", "best taxi rental in ranchi", "best innova in ranchi", "best tempo traveller in ranchi", "best suv in ranchi", "best sedan in ranchi", "ranchi taxi", "ranchi tour and travels", "ranchi cab service", "ranchi taxi service", "rental cab in ranchi", "rental taxi in ranchi"],
};

const areas = ["Doranda", "Main Road", "Lalpur", "Ratu Road", "Kanke", "Namkum", "Hatia", "Morabadi", "Bariatu", "Ashok Nagar", "Kokar", "Harmu", "Hinoo", "Chutia", "Piska More", "Argora", "Kadru", "Booty More", "Tupudana", "Dibdih"];

const pickupPoints = [
  { name: "Birsa Munda Airport (IXR)", type: "airport", icon: Plane },
  { name: "Ranchi Junction Railway Station", type: "railway", icon: Train },
  { name: "Hatia Railway Station", type: "railway", icon: Train },
  { name: "Albert Ekka Chowk, Main Road", type: "landmark", icon: MapPin },
  { name: "Firayalal Chowk", type: "landmark", icon: MapPin },
  { name: "RIMS Hospital, Bariatu", type: "hospital", icon: Building2 },
  { name: "Ranchi University, Morabadi", type: "education", icon: Building2 },
  { name: "BIT Mesra Campus Gate", type: "education", icon: Building2 },
];

const attractions = [
  { name: "Pahari Mandir", desc: "Ancient hilltop Shiva temple with 2140 steps and panoramic views", dist: "3 km" },
  { name: "Tagore Hill", desc: "Where Rabindranath Tagore's father meditated; stunning sunset views", dist: "4 km" },
  { name: "Kanke Dam", desc: "Scenic reservoir perfect for evening boating and picnics", dist: "8 km" },
  { name: "Rock Garden", desc: "Man-made garden with waterfalls, sculptures, and lush greenery", dist: "5 km" },
  { name: "Jagannath Temple", desc: "Beautiful replica of Puri Jagannath Temple with annual Rath Yatra", dist: "6 km" },
  { name: "Ranchi Lake", desc: "Heart of the city — boating, food stalls, and evening walks", dist: "1 km" },
  { name: "Hundru Falls", desc: "Spectacular 98m waterfall on Subarnarekha river, best in monsoon", dist: "45 km" },
  { name: "Dassam Falls", desc: "Beautiful cascade on Kanchi river surrounded by forests", dist: "40 km" },
  { name: "Jonha Falls", desc: "Also known as Gautamdhara — serene waterfall with Buddha temple", dist: "40 km" },
];

const faqs = [
  { q: "What is the cheapest cab fare in Ranchi?", a: "Our cab fares start at ₹12/km for Swift Dzire sedan. Local packages: 4hrs/40km from ₹800, 8hrs/80km from ₹1,500. Airport transfer from ₹400. No hidden charges — the fare you see is what you pay." },
  { q: "How do I book a cab in Ranchi?", a: "Call +91 7488341848, WhatsApp us, or fill the form on this page. Share pickup/drop, date, time, and vehicle preference. We confirm instantly with driver details and exact fare." },
  { q: "Do you provide Ranchi Airport taxi service?", a: "Yes! 24/7 airport transfer at Birsa Munda Airport (IXR). Our drivers track your flight and wait at arrival gate with name board. 60 minutes free waiting after landing. Fare from ₹400." },
  { q: "Which areas in Ranchi do you cover?", a: "We cover every locality: Doranda, Main Road, Lalpur, Ratu Road, Kanke, Namkum, Hatia, Morabadi, Bariatu, Ashok Nagar, Kokar, Harmu, Hinoo, Chutia, Piska More, Argora, Kadru, Booty More, and all surrounding areas." },
  { q: "Do you provide outstation cab from Ranchi?", a: "Yes! One-way and round trip to 100+ destinations: Jamshedpur (₹1,799), Dhanbad (₹2,999), Bokaro (₹1,799), Patna (₹7,999), Kolkata (₹8,999), Deoghar (₹6,499), and more." },
  { q: "Which vehicles are available in Ranchi?", a: "Swift Dzire, Toyota Etios, Honda Amaze (sedans), Maruti Ertiga, Toyota Innova, Innova Crysta, Mahindra Scorpio, Toyota Fortuner (SUVs), 12/17 seater Tempo Travellers. All AC, GPS-tracked." },
  { q: "Is your cab service available 24/7 in Ranchi?", a: "Yes! 365 days a year, 24/7. Early morning 4 AM, late night 11 PM, festivals, holidays — we never say no. Call +91 7488341848 anytime." },
  { q: "Do you provide wedding car rental in Ranchi?", a: "Yes! Decorated Innova Crysta (₹3,500), Fortuner (₹5,000), luxury cars for Barat, Doli, reception. Fleet available for guest transport. Book 2-4 weeks in advance." },
  { q: "What payment methods do you accept?", a: "Cash, Google Pay, PhonePe, Paytm, any UPI, net banking, bank transfer. Pay before or after trip. No advance required for most bookings." },
  { q: "Is Car Rental Ranchi safe for women and families?", a: "Absolutely! All drivers are police-verified with 5+ years experience. GPS tracking with live location sharing. 24/7 emergency helpline. First-aid kits in every car." },
  { q: "Do you provide corporate cab service in Ranchi?", a: "Yes! Monthly packages, employee transport, client pickups, airport transfers. GST invoices, dedicated account manager, 99.9% on-time guarantee." },
  { q: "What is the cancellation policy?", a: "Free cancellation up to 4 hours before pickup — full refund. Within 4 hours: 50% charges. No-show after driver dispatch: full charges." },
];

export default function RanchiCityPage() {
  const topRoutes = routes.filter(r => ["ranchi-to-jamshedpur-cab", "ranchi-to-dhanbad-cab", "ranchi-to-bokaro-cab", "ranchi-to-hazaribagh-cab", "ranchi-to-deoghar-cab", "ranchi-to-patna-cab", "ranchi-to-kolkata-cab", "ranchi-to-varanasi-cab", "ranchi-to-giridih-cab", "ranchi-to-ramgarh-cab", "ranchi-to-netarhat-cab", "ranchi-to-rourkela-cab"].includes(r.slug));

  const jsonLd = {
    "@context": "https://schema.org", "@type": ["LocalBusiness", "TaxiService"],
    "@id": "https://carrentalranchi.in/cab-service-in-ranchi#business",
    name: "Car Rental Ranchi - Best Cab Service in Ranchi",
    description: "Ranchi's #1 rated cab service. Local taxi, outstation, airport transfer, wedding car, corporate travel. 24/7 available.",
    url: "https://carrentalranchi.in/cab-service-in-ranchi",
    telephone: "+91-7488341848", email: "carrentalranchi01@gmail.com",
    address: { "@type": "PostalAddress", streetAddress: "Main Road", addressLocality: "Ranchi", addressRegion: "Jharkhand", addressCountry: "IN", postalCode: "834001" },
    geo: { "@type": "GeoCoordinates", latitude: 23.3441, longitude: 85.3096 },
    areaServed: { "@type": "City", name: "Ranchi", containedInPlace: { "@type": "State", name: "Jharkhand" } },
    openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
    priceRange: "₹12/km - ₹25/km",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "2450", bestRating: "5" },
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-10 pb-16 overflow-hidden">
        <HeroBackground />
        <div className="hero-gradient absolute inset-0 pointer-events-none z-0" />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={[{ label: "Cab Service in Ranchi" }]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
                <Star size={14} className="text-accent" />
                <span className="text-primary-light text-sm font-medium">Ranchi&apos;s #1 Rated Cab Service — 4.8★ Google Rating</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Best <span className="gradient-text">Cab Service</span> in Ranchi — Car Rental &amp; Taxi Booking
              </h1>
              <p className="text-gray-300 text-base leading-relaxed mb-5 max-w-xl">
                Book the most trusted cab service in Ranchi, Jharkhand. Local taxi, outstation trips to Jamshedpur, Patna &amp; Kolkata, Birsa Munda Airport transfer, wedding car rental. AC vehicles, verified drivers, <strong className="text-accent">starting ₹12/km</strong>. Available 24/7/365.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a href="tel:+917488341848" className="btn-accent justify-center"><Phone size={18} /> Call Now — 7488341848</a>
                <a href="https://wa.me/917488341848" target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">WhatsApp Booking</a>
              </div>
            </div>
            <div className="hidden lg:block"><BookingForm fromCity="Ranchi" /></div>
          </div>
        </div>
      </section>
      <div className="container-custom lg:hidden -mt-8 relative z-20 mb-8"><BookingForm fromCity="Ranchi" /></div>

      <TrustBadges />

      {/* Ranchi-Specific Intro */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Cab Service in Ranchi — Your Complete Transportation Solution</h2>
          <div className="text-gray-300 text-sm leading-relaxed space-y-4">
            <p><strong>Car Rental Ranchi</strong> is the most trusted and affordable <strong>cab service in Ranchi</strong>, the capital city of Jharkhand. Located at an elevation of 651 meters (2,140 ft) on the Chota Nagpur Plateau, Ranchi enjoys pleasant weather year-round, making it an ideal base for travel across eastern India. Whether you need a <strong>local taxi in Ranchi</strong> for daily commute, an <strong>outstation cab from Ranchi</strong> to Jamshedpur, Patna, or Kolkata, <strong>Birsa Munda Airport transfer</strong>, or a premium <strong>wedding car rental</strong>, we provide end-to-end transportation with 100+ vehicles and 50+ experienced drivers.</p>

            <p>Ranchi is well-connected by air (Birsa Munda Airport with daily flights to Delhi, Mumbai, Kolkata, Hyderabad, Bangalore), rail (Ranchi Junction and Hatia Station), and road via NH-33, NH-23, and NH-75. Our cab service covers <strong>every locality in Ranchi</strong> — from Doranda and Main Road to Namkum and Piska More — with a pickup time of just 15-30 minutes from booking.</p>
          </div>
        </div>
      </section>

      {/* Pickup Points Grid */}
      <section className="section-padding bg-dark-light/50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-heading">📍 Pickup Locations</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-3">Popular Pickup Points in Ranchi</h2>
            <p className="text-gray-400 text-sm mt-2">Our drivers reach any Ranchi location within <strong className="text-primary-light">15-30 minutes</strong></p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pickupPoints.map(p => (
              <div key={p.name} className="premium-card p-5 flex items-center gap-4 shimmer">
                <div className="icon-glow shrink-0"><p.icon size={20} className="text-primary-light" /></div>
                <div>
                  <div className="text-white text-sm font-semibold leading-snug">{p.name}</div>
                  <div className="text-gray-500 text-xs capitalize mt-0.5">{p.type}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4 text-center">All Ranchi Areas We Serve</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {areas.map(a => (<span key={a} className="text-xs bg-white/5 border border-white/8 rounded-full px-4 py-2 text-gray-300 hover:bg-primary/10 hover:text-primary-light hover:border-primary/20 transition-all cursor-default">{a}</span>))}
            </div>
          </div>
        </div>
      </section>

      {/* Fare Table */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold mb-2">Cab Fare in Ranchi — Transparent Pricing</h2>
          <p className="text-gray-400 text-sm mb-6">No hidden charges. No surge pricing. What you see is what you pay.</p>
          <div className="glass-card overflow-hidden">
            <table className="fare-table">
              <thead><tr><th>Vehicle</th><th>Type</th><th>Per Km</th><th>4 Hr Package</th><th>8 Hr Package</th><th>Best For</th></tr></thead>
              <tbody>
                {fleet.slice(0, 6).map(v => (
                  <tr key={v.id}>
                    <td className="text-white font-medium">{v.name}</td>
                    <td><span className="text-xs bg-primary/20 text-primary-light px-2 py-0.5 rounded-full">{v.categoryLabel}</span></td>
                    <td className="text-accent font-bold">₹{v.perKm}/km</td>
                    <td className="text-gray-300">₹{Math.round(v.basePrice * 0.7)}</td>
                    <td className="text-gray-300">₹{v.basePrice}</td>
                    <td className="text-gray-400 text-xs">{v.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fare Calculator */}
      <section className="section-padding bg-dark-light/50">
        <div className="container-custom max-w-2xl">
          <h2 className="text-xl font-bold mb-5">Fare Calculator — Ranchi</h2>
          <FareCalculator defaultFrom="Ranchi" defaultDistance={0} defaultTo="" />
        </div>
      </section>

      {/* Popular Routes from Ranchi */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-heading">🚗 Popular Routes</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-3">Cab Routes from Ranchi</h2>
            <p className="text-gray-400 text-sm mt-2">One-way &amp; round trip to <strong className="text-white">100+ destinations</strong> from Ranchi</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {topRoutes.map(r => (
              <Link key={r.slug} href={`/routes/${r.slug}`} className="route-card group no-underline">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-green-500/10 flex items-center justify-center"><MapPin size={13} className="text-green-400" /></div>
                  <span className="text-white font-semibold text-sm">Ranchi</span>
                  <ArrowRight size={12} className="text-gray-600 group-hover:text-primary-light transition-colors" />
                  <span className="text-accent font-semibold text-sm">{r.to}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Navigation size={10} />{r.distance} km</span>
                  <span className="flex items-center gap-1"><Clock size={10} />{r.duration}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-primary-light font-bold text-lg">₹{r.fares.dzire}</span>
                  <span className="text-gray-500 text-xs group-hover:text-primary-light transition-colors">View Details →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/routes" className="btn-primary text-base">View All 50+ Routes <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Tourist Sightseeing */}
      <section className="section-padding bg-dark-light/50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-heading">🏛️ Explore Ranchi</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-3">Ranchi Sightseeing — Tourist Cab Packages</h2>
            <p className="text-gray-400 text-sm mt-2">Explore Ranchi&apos;s waterfalls, temples, and scenic spots with our local cab service</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {attractions.map(a => (
              <div key={a.name} className="premium-card p-6 shimmer">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="icon-glow-amber w-10 h-10 rounded-xl flex items-center justify-center">
                      <MapPin size={16} className="text-accent" />
                    </div>
                    <h3 className="text-white font-bold text-base">{a.name}</h3>
                  </div>
                  <span className="text-[11px] bg-accent/15 text-accent px-2.5 py-1 rounded-full font-medium shrink-0 ml-2">{a.dist}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-heading">🛎️ Our Services</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-3">Cab Services Available in Ranchi</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: MapPin, title: "Local Cab", desc: "4hr/40km ₹800 • 8hr/80km ₹1,500", color: "text-primary-light" },
              { icon: Navigation, title: "Outstation Cab", desc: "One-way & round trip to 100+ cities", color: "text-primary-light" },
              { icon: Plane, title: "Airport Transfer", desc: "Birsa Munda Airport • from ₹400", color: "text-blue-400" },
              { icon: Train, title: "Station Pickup", desc: "Ranchi Junction & Hatia Station", color: "text-blue-400" },
              { icon: Heart, title: "Wedding Cars", desc: "Decorated Crysta, Fortuner, Luxury", color: "text-pink-400" },
              { icon: Briefcase, title: "Corporate Cab", desc: "Monthly plans • GST invoices", color: "text-purple-400" },
              { icon: Users, title: "Tempo Traveller", desc: "12 & 17 seater AC for groups", color: "text-orange-400" },
              { icon: Car, title: "Tour Packages", desc: "Hundru, Dassam, Netarhat day trips", color: "text-accent" },
            ].map((s, i) => (
              <div key={i} className="premium-card p-5 text-center shimmer">
                <div className="icon-glow mx-auto mb-4"><s.icon size={22} className={s.color} /></div>
                <h3 className="text-white font-bold text-sm mb-1.5">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-dark-light/50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-heading">⭐ Why Choose Us</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-3">Why Ranchi Travelers Trust Car Rental Ranchi</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Star, title: "4.8★ Google Rating", desc: "Rated #1 cab service in Ranchi by 2,450+ verified customers", color: "text-yellow-400" },
              { icon: Shield, title: "Police-Verified Drivers", desc: "Background-checked professionals with 5+ years experience", color: "text-green-400" },
              { icon: Car, title: "100+ Vehicle Fleet", desc: "Swift Dzire to Fortuner — all AC, GPS-tracked, sanitized", color: "text-primary-light" },
              { icon: Clock, title: "24/7/365 Availability", desc: "Book anytime — 4 AM, 11 PM, festivals, holidays", color: "text-blue-400" },
              { icon: Navigation, title: "15-Min Pickup", desc: "Driver at your doorstep within 15-30 minutes across Ranchi", color: "text-accent" },
              { icon: CheckCircle, title: "Zero Hidden Charges", desc: "Transparent per-km pricing. No surge pricing ever", color: "text-primary-light" },
            ].map(w => (
              <div key={w.title} className="gradient-border p-6">
                <div className="icon-glow mb-4"><w.icon size={22} className={w.color} /></div>
                <h3 className="text-white font-bold mb-2">{w.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather & Travel Tips */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-8">
            <span className="section-heading">🌤️ Travel Tips</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-3">Ranchi Weather &amp; Travel Guide</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed text-center mb-8">Ranchi enjoys a <strong className="text-white">pleasant sub-tropical climate</strong> year-round at 651m elevation on the Chota Nagpur Plateau.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="stat-card"><div className="text-3xl mb-2">☀️</div><h4 className="text-white font-bold text-sm mb-1">Summer (Mar–Jun)</h4><p className="text-gray-400 text-xs">20–37°C. Mild compared to plains. Best for waterfall visits.</p></div>
            <div className="stat-card"><div className="text-3xl mb-2">🌧️</div><h4 className="text-white font-bold text-sm mb-1">Monsoon (Jul–Sep)</h4><p className="text-gray-400 text-xs">Heavy rainfall. Waterfalls at full glory. Book SUV for safety.</p></div>
            <div className="stat-card"><div className="text-3xl mb-2">❄️</div><h4 className="text-white font-bold text-sm mb-1">Winter (Oct–Feb)</h4><p className="text-gray-400 text-xs">5–20°C. Best season. Ideal for Netarhat, Betla trips.</p></div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Cab Service in Ranchi — Frequently Asked Questions" />

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-accent/10" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
        <div className="container-custom text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="animate-pulse-slow text-green-400 text-xs">●</span>
            <span className="text-gray-300 text-sm">Drivers available now</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Ranchi Cab Now</h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto text-base">Best rates, verified drivers, 24/7 availability. Your trusted cab partner in Ranchi.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+917488341848" className="btn-accent text-base px-8 py-4 text-lg font-bold"><Phone size={20} /> Call +91 7488341848</a>
            <a href="https://wa.me/917488341848" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">WhatsApp Booking</a>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <div className="container-custom py-4 text-center">
        <p className="text-gray-600 text-xs">Last updated: May 2026 | Cab Service in Ranchi by Car Rental Ranchi, Jharkhand</p>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
