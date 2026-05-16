import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, MapPin, CheckCircle, Clock, Car, Star, ArrowRight } from "lucide-react";
import cities from "@/data/cities.json";
import routes from "@/data/routes.json";
import fleet from "@/data/fleet.json";
import BookingForm from "@/components/BookingForm";
import FareCalculator from "@/components/FareCalculator";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const c = cities.find((c) => c.slug === city);
  if (!c) return {};
  return { title: c.metaTitle, description: c.metaDesc, alternates: { canonical: `https://carrentalranchi.in/${c.slug}` } };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = cities.find((c) => c.slug === city);
  if (!c) notFound();

  const cityRoutes = routes.filter(r => r.to === c.name).slice(0, 1);
  const fromRanchi = routes.find(r => r.to === c.name);
  const otherCityRoutes = routes.filter(r => r.state === c.state && r.to !== c.name).slice(0, 6);

  const faqs = [
    { q: `What is the cab fare in ${c.name}?`, a: `Local cab fare in ${c.name} starts at just ₹10/km for sedan (Swift Dzire/Etios). SUV rates start at ₹13/km (Ertiga) and ₹15/km (Innova). Hourly packages: 4hr/40km from ₹800, 8hr/80km from ₹1,500. Airport/station transfer fares depend on distance. No hidden charges.` },
    { q: `Is cab service available 24/7 in ${c.name}?`, a: `Yes! Car Rental Ranchi provides 24/7 cab service in ${c.name} — 365 days a year. Whether it's early morning 4 AM, late night 11 PM, weekends, festivals, or holidays, we are always available. Call +91 7488341848 anytime.` },
    { q: `Which cars are available for rent in ${c.name}?`, a: `We offer a wide range of vehicles in ${c.name}: Sedan (Swift Dzire, Toyota Etios, Honda Amaze), SUV (Maruti Ertiga, Toyota Innova), Premium (Innova Crysta, Mahindra Scorpio, Toyota Fortuner), and Group vehicles (12-seater and 17-seater Tempo Traveller). All vehicles are AC, well-maintained, and GPS-equipped.` },
    { q: `Can I book a cab from ${c.name} to Ranchi?`, a: `Absolutely! We provide both ${c.name} to Ranchi and Ranchi to ${c.name} cab service. ${fromRanchi ? `Distance: ${fromRanchi.distance} km, estimated time: ${fromRanchi.duration}, fare starting from ₹${fromRanchi.fares.dzire} (sedan).` : 'Call +91 7488341848 for exact fare.'} One-way and round trip options available.` },
    { q: `Do you provide outstation cab from ${c.name}?`, a: `Yes! We provide outstation cab service from ${c.name} to all major cities across Jharkhand (Ranchi, Jamshedpur, Dhanbad, Bokaro), Bihar (Patna, Gaya), West Bengal (Kolkata, Durgapur), Odisha (Rourkela, Bhubaneswar), and UP (Varanasi). One-way and round trip available.` },
    { q: `How do I book a cab in ${c.name}?`, a: `Booking is super easy! Call +91 7488341848 or send your travel details via WhatsApp (pickup location, date, time, vehicle preference). You'll receive instant confirmation with driver name, phone number, and exact fare. No app download needed.` },
    { q: `Do you offer wedding car rental in ${c.name}?`, a: `Yes! We offer premium wedding car rental in ${c.name} including decorated vehicles, luxury cars (Fortuner, BMW), and vintage-style cars for baarat. We also provide fleet of cars for guest transportation. Book early for best availability.` },
    { q: `What payment methods do you accept in ${c.name}?`, a: `We accept all payment methods: Cash, Google Pay, PhonePe, Paytm, any UPI app, net banking, and bank transfer. Pay before or after the trip. No advance required for most bookings within ${c.name}.` },
    { q: `Is your cab service safe for women and families?`, a: `Absolutely! Safety is our #1 priority. All drivers are police-verified, professionally trained, and have 5+ years experience. Vehicles have GPS tracking with live location sharing. We also have a 24/7 emergency helpline and first-aid kits in every car.` },
    { q: `Do you provide corporate cab service in ${c.name}?`, a: `Yes! We offer dedicated corporate cab service with monthly packages, employee transportation, client pickups, and airport transfers for businesses in ${c.name}. Customized billing, dedicated account manager, and priority booking included.` },
    { q: `Can I hire a Tempo Traveller in ${c.name}?`, a: `Yes! We have 12-seater and 17-seater AC Tempo Travellers available in ${c.name} for group travel, pilgrimages, office outings, wedding parties, and family trips. Push-back seats, music system, and ample luggage space included.` },
    { q: `What is the cancellation policy?`, a: `Free cancellation up to 4 hours before scheduled pickup — full refund, no questions asked. Cancellations within 4 hours: 50% charges apply. No-show or cancellation after driver dispatch: full charges. We keep it simple and fair.` },
  ];

  return (
    <>
      <div className="hero-gradient pt-4 pb-12">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: c.name }]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
            <div>
              <span className="bg-primary/20 text-primary-light text-xs font-medium px-3 py-1 rounded-full">{c.state}</span>
              <h1 className="text-2xl md:text-4xl font-bold mt-3 mb-3">Best Cab Service in {c.name} — Car Rental &amp; Taxi Booking</h1>
              <p className="text-gray-300 mb-4">Book affordable cab service in {c.name}, {c.state}. Local taxi, outstation, airport transfer at ₹10/km. 24/7 available. AC sedan, SUV, Innova. Call +91 7488341848.</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {fromRanchi && (
                  <div className="glass-card-light p-3 text-center">
                    <div className="text-accent font-bold">{fromRanchi.distance} km</div>
                    <div className="text-gray-500 text-xs">from Ranchi</div>
                  </div>
                )}
                <div className="glass-card-light p-3 text-center">
                  <div className="text-white font-bold">{c.pop}</div>
                  <div className="text-gray-500 text-xs">Population</div>
                </div>
                <div className="glass-card-light p-3 text-center">
                  <div className="text-primary-light font-bold">₹10/km</div>
                  <div className="text-gray-500 text-xs">Starting Fare</div>
                </div>
              </div>
              <a href="tel:+917488341848" className="btn-accent"><Phone size={18} /> Book Cab in {c.name}</a>
            </div>
            <BookingForm fromCity={c.name} />
          </div>
        </div>
      </div>

      {/* Fare Calculator */}
      <section className="section-padding bg-dark-light/50">
        <div className="container-custom max-w-2xl">
          <h2 className="text-xl font-bold mb-5">Fare Calculator — {c.name}</h2>
          <FareCalculator defaultFrom={c.name} defaultDistance={fromRanchi?.distance || 0} defaultTo={fromRanchi ? "Ranchi" : ""} />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Best Cab Service in {c.name} — Complete Guide</h2>
          <div className="text-gray-300 text-sm leading-relaxed space-y-4">
            <p><strong>Car Rental Ranchi</strong> provides the most reliable and affordable <strong>cab service in {c.name}</strong>, {c.state}. Whether you need a <strong>local taxi in {c.name}</strong> for daily commute, an <strong>outstation cab from {c.name}</strong> for intercity travel, <strong>airport transfer</strong>, <strong>railway station pickup</strong>, or a <strong>wedding car rental in {c.name}</strong>, we are your one-stop solution for all transportation needs. With 7+ years of experience and 2,450+ satisfied customers, we are the #1 rated <strong>car rental service in {c.name}</strong>.</p>

            <p>{c.name} is known for being {c.famous}. Our fleet of 100+ vehicles and team of professionally trained, police-verified drivers ensure that every ride in {c.name} is safe, comfortable, and on time. We operate <strong>24 hours a day, 7 days a week, 365 days a year</strong> — rain or shine, festival or holiday, we never say no to your booking.</p>

            <h3 className="text-xl font-bold text-white mt-6">Cab Services Available in {c.name}</h3>
            <p>We offer a comprehensive range of <strong>taxi services in {c.name}</strong> designed to meet every travel requirement:</p>
            <ul className="space-y-2">
              {[
                `Local cab service in ${c.name} — hourly rental packages (4hr/40km, 8hr/80km, 12hr/120km) for city travel, shopping, hospital visits, meetings`,
                `Outstation cab from ${c.name} — one-way and round trip to all major cities across Jharkhand, Bihar, West Bengal, Odisha, and UP`,
                `Airport transfer service — Birsa Munda Airport pickup/drop, available 24/7 with flight tracking`,
                `Railway station transfer — pickup/drop from ${c.name} Railway Station and nearby stations`,
                `Wedding car rental in ${c.name} — decorated cars, luxury vehicles (Fortuner, BMW, Audi) for wedding ceremonies and baarat`,
                `Corporate cab service — monthly packages for businesses, employee transportation, client pickups`,
                `Tempo Traveller rental — 12-seater and 17-seater for group pilgrimages, office outings, family trips`,
                `Tour package cabs — customized sightseeing tours in and around ${c.name} with knowledgeable drivers`,
              ].map((s, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" />{s}</li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-white mt-6">Cab Fare &amp; Pricing in {c.name} — Transparent Rates</h3>
            <p>Our <strong>taxi fare in {c.name}</strong> is the most competitive in the market. We follow a simple, transparent per-kilometer pricing model with <strong>zero hidden charges</strong>:</p>
            <div className="glass-card overflow-hidden mt-3">
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
            <p className="text-gray-400 text-xs">* Minimum billing: 300 km/day for outstation trips. Driver allowance ₹300-400/day. Toll and parking charges extra at actuals.</p>

            <h3 className="text-xl font-bold text-white mt-6">Why Choose Car Rental Ranchi in {c.name}?</h3>
            <p>There are many <strong>taxi services in {c.name}</strong>, but here&apos;s what makes <strong>Car Rental Ranchi</strong> the preferred choice for thousands of travelers:</p>
            <ul className="space-y-2">
              {[
                `Lowest fares in ${c.name} — starting at just ₹10/km for sedan, no surge pricing ever`,
                "100% AC, sanitized fleet — Swift Dzire, Ertiga, Innova, Innova Crysta, Fortuner, Tempo Traveller",
                "Police-verified, experienced drivers — courteous, non-smoking, well-groomed professionals",
                "24/7 availability — book anytime, travel anytime, even at 3 AM on a holiday",
                "GPS tracking on all vehicles — share live location with family for peace of mind",
                "Multiple payment options — Cash, UPI (GPay, PhonePe, Paytm), bank transfer",
                "Free cancellation up to 4 hours before pickup — full refund, no questions asked",
                `Door-to-door service — pickup from any address in ${c.name}, including homes, hotels, offices, hospitals`,
                "Dedicated trip coordinator — single point of contact for your entire journey",
                "4.8/5 Google rating — trusted by 2,450+ happy customers across Jharkhand",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" />{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-white mt-6">Popular Localities &amp; Areas We Cover in {c.name}</h3>
            <p>Our <strong>cab service covers every corner of {c.name}</strong>. No matter where you are in the city, our driver will reach you within 15-30 minutes of booking. Here are the popular localities we serve:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {c.areas.map(a => (
                <span key={a} className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-gray-300">{a}</span>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mt-6">How to Book a Cab in {c.name} — 3 Easy Steps</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
              <div className="glass-card-light p-4 text-center">
                <div className="text-2xl mb-2">📞</div>
                <h4 className="text-white font-semibold text-sm mb-1">Step 1: Call Us</h4>
                <p className="text-gray-400 text-xs">Call <a href="tel:+917488341848" className="text-primary-light">+91 7488341848</a> or WhatsApp your travel details</p>
              </div>
              <div className="glass-card-light p-4 text-center">
                <div className="text-2xl mb-2">✅</div>
                <h4 className="text-white font-semibold text-sm mb-1">Step 2: Get Confirmation</h4>
                <p className="text-gray-400 text-xs">Receive instant booking confirmation with driver details and exact fare</p>
              </div>
              <div className="glass-card-light p-4 text-center">
                <div className="text-2xl mb-2">🚗</div>
                <h4 className="text-white font-semibold text-sm mb-1">Step 3: Travel</h4>
                <p className="text-gray-400 text-xs">Driver arrives at your doorstep. Enjoy a safe, comfortable ride!</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-6">Popular Routes from {c.name}</h3>
            <p>Looking to travel from {c.name} to other cities? Here are some of the most popular <strong>outstation cab routes from {c.name}</strong>:</p>
            {fromRanchi && (
              <ul className="space-y-1">
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-accent shrink-0 mt-0.5" /><strong>{c.name} to Ranchi:</strong> {fromRanchi.distance} km, ~{fromRanchi.duration}, from ₹{fromRanchi.fares.dzire}</li>
              </ul>
            )}
            <p>We also provide cab service from {c.name} to Jamshedpur, Dhanbad, Bokaro, Patna, Kolkata, Varanasi, Gaya, Durgapur, and 100+ other destinations. Call <a href="tel:+917488341848" className="text-primary-light font-medium">+91 7488341848</a> for custom route pricing.</p>

            <h3 className="text-xl font-bold text-white mt-6">Frequently Searched — {c.name} Cab Keywords</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                `cab service in ${c.name}`, `taxi service ${c.name}`, `${c.name} cab booking`,
                `car rental ${c.name}`, `${c.name} to Ranchi cab`, `local cab ${c.name}`,
                `outstation cab ${c.name}`, `${c.name} airport taxi`, `${c.name} taxi fare`,
                `cheapest cab in ${c.name}`, `${c.name} car hire`, `${c.name} taxi booking online`,
                `best cab service ${c.name}`, `${c.name} wedding car`, `${c.name} corporate cab`,
                `${c.name} tempo traveller`, `${c.name} Innova booking`, `24/7 cab ${c.name}`,
                `${c.name} cab near me`, `${c.name} one way taxi`,
              ].map((kw, i) => (
                <span key={i} className="text-[10px] bg-white/5 border border-white/8 rounded-full px-2.5 py-1 text-gray-400">{kw}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {otherCityRoutes.length > 0 && (
        <section className="section-padding bg-dark-light/50">
          <div className="container-custom">
            <h2 className="text-xl font-bold mb-5">Other Routes in {c.state}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherCityRoutes.map(r => (
                <Link key={r.slug} href={`/routes/${r.slug}`} className="glass-card-light p-4 hover:border-primary/30 transition-all no-underline flex justify-between items-center">
                  <div><span className="text-white text-sm font-medium">Ranchi → {r.to}</span><div className="text-gray-500 text-xs mt-1">{r.distance} km</div></div>
                  <span className="text-accent font-bold text-sm">₹{r.fares.dzire}+</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={faqs} title={`Cab Service ${c.name} — FAQ`} />

      <section className="py-12 bg-gradient-to-r from-primary/20 to-accent/10">
        <div className="container-custom text-center">
          <h2 className="text-xl font-bold mb-3">Book Cab in {c.name} Now</h2>
          <a href="tel:+917488341848" className="btn-accent mt-3"><Phone size={18} /> +91 7488341848</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": ["LocalBusiness","TaxiService"],
        name: `Car Rental Ranchi - Cab Service in ${c.name}`,
        description: c.metaDesc, telephone: "+91-7488341848",
        address: { "@type": "PostalAddress", addressLocality: c.name, addressRegion: c.state, addressCountry: "IN" },
        geo: { "@type": "GeoCoordinates", latitude: c.lat, longitude: c.lng },
        areaServed: { "@type": "City", name: c.name },
      })}} />
    </>
  );
}
