import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Clock, Navigation, Phone, ArrowRight, CheckCircle, Star } from "lucide-react";
import routes from "@/data/routes.json";
import fleet from "@/data/fleet.json";
import BookingForm from "@/components/BookingForm";
import FareCalculator from "@/components/FareCalculator";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

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

  const faqs = [
    { q: `What is the cab fare from Ranchi to ${r.to}?`, a: `The cab fare from Ranchi to ${r.to} starts at ₹${r.fares.dzire} in a Swift Dzire sedan (${r.distance} km × ₹${fleet[0].perKm}/km). SUV rates: Ertiga ₹${r.fares.ertiga}, Innova ₹${r.fares.innova}, Innova Crysta ₹${r.fares.crysta}. Toll charges and state taxes are additional at actuals. No hidden charges guaranteed.` },
    { q: `How far is ${r.to} from Ranchi by road?`, a: `${r.to} is approximately ${r.distance} km from Ranchi via the fastest highway route. The journey takes about ${r.duration} by car depending on traffic and weather conditions. Our GPS-equipped drivers take the most efficient route.` },
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

  return (
    <>
      <div className="hero-gradient pt-4 pb-12">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Routes", href: "/routes" }, { label: `Ranchi to ${r.to}` }]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-primary/20 text-primary-light text-xs font-medium px-3 py-1 rounded-full">{r.state}</span>
                <span className="bg-accent/20 text-accent text-xs font-medium px-3 py-1 rounded-full">{r.distance} km</span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold mb-3">
                Ranchi to {r.to} Cab Service — Book Taxi at ₹{fleet[0].perKm}/km
              </h1>
              <p className="text-gray-300 mb-4">
                Book affordable cab from Ranchi to {r.to} ({r.distance} km, {r.duration}). One-way &amp; round trip taxi available in sedan, SUV, Innova Crysta. Professional drivers, AC vehicles, 24/7 service. Call +91 7488341848.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="glass-card-light p-3 text-center">
                  <Navigation size={18} className="text-primary-light mx-auto mb-1" />
                  <div className="text-white font-bold">{r.distance} km</div>
                  <div className="text-gray-500 text-xs">Distance</div>
                </div>
                <div className="glass-card-light p-3 text-center">
                  <Clock size={18} className="text-accent mx-auto mb-1" />
                  <div className="text-white font-bold">{r.duration}</div>
                  <div className="text-gray-500 text-xs">Duration</div>
                </div>
                <div className="glass-card-light p-3 text-center">
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

            <p>The <strong>Ranchi to {r.to} distance</strong> is approximately <strong>{r.distance} km</strong>, and the journey takes around <strong>{r.duration}</strong> via the best national highway route. Our experienced chauffeurs know every road, shortcut, and pit stop on this route, ensuring you reach {r.to} safely and on time. We have successfully completed <strong>2,450+ trips</strong> on this route with a customer satisfaction rating of <strong>4.8 out of 5</strong>.</p>

            <h3 className="text-xl font-bold text-white mt-6">Ranchi to {r.to} Cab Fare — Transparent Pricing</h3>
            <p>We believe in <strong>100% transparent pricing</strong> with no surprise charges. Our <strong>Ranchi to {r.to} cab fare</strong> is calculated on a simple per-kilometer basis. Here&apos;s what you pay:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>Sedan (Swift Dzire/Etios):</strong> ₹{r.fares.dzire} for {r.distance} km one-way — best for solo travelers and couples</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>SUV (Ertiga):</strong> ₹{r.fares.ertiga} for {r.distance} km one-way — ideal for families of 4-6</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>Premium (Innova):</strong> ₹{r.fares.innova} for {r.distance} km one-way — extra comfort and luggage space</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>Luxury (Innova Crysta):</strong> ₹{r.fares.crysta} for {r.distance} km one-way — top-tier comfort for business/VIP travel</li>
            </ul>
            <p className="text-gray-400 text-xs">* Additional charges: Toll tax (at actuals), state permit if applicable, driver allowance ₹300-400/day for trips exceeding 300 km/day. Night charges may apply between 10 PM - 6 AM.</p>

            <h3 className="text-xl font-bold text-white mt-6">Why Car Rental Ranchi is the Best Choice for {r.to} Trip</h3>
            <p>Choosing the right <strong>taxi service from Ranchi to {r.to}</strong> can make or break your travel experience. Here&apos;s why thousands of customers trust <strong>Car Rental Ranchi</strong> for their intercity cab needs:</p>
            <ul className="space-y-2">
              {[
                `Lowest fares in Jharkhand — starting at ₹${fleet[0].perKm}/km with absolutely no hidden charges or surge pricing`,
                "One-way cab option available — pay only for the distance you travel, no return fare",
                "24/7 booking & availability — early morning 4 AM, late night 11 PM, weekends, holidays — we never say no",
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

            <h3 className="text-xl font-bold text-white mt-6">Available Vehicles for Ranchi to {r.to} Route</h3>
            <p>We offer a wide range of <strong>well-maintained cars for Ranchi to {r.to} trip</strong>. Choose based on your group size, budget, and comfort preference:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>Swift Dzire / Toyota Etios (Sedan):</strong> 4-seater, AC, 2 bags capacity. Best for budget-conscious solo/couple travel. Fuel-efficient and comfortable for highway journeys.</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>Maruti Ertiga (SUV/MUV):</strong> 6-seater, AC, 3 bags capacity. Perfect for small families and groups. Spacious cabin with good legroom.</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>Toyota Innova (SUV):</strong> 7-seater, AC, 4 bags capacity. India&apos;s most trusted long-distance vehicle. Superior ride quality on highways.</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>Toyota Innova Crysta (Premium SUV):</strong> 7-seater, AC, captain seats, 4+ bags. Top-tier luxury with automatic climate control and premium interiors.</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>Tempo Traveller (12/17 seater):</strong> For group travel, pilgrimages, corporate outings, and wedding parties. AC, push-back seats, music system.</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-6">Ranchi to {r.to} Road Conditions & Route Information</h3>
            <p>The <strong>Ranchi to {r.to} highway route</strong> is well-connected via national highways. The road conditions are generally good with some stretches under construction or repair depending on the season. Our drivers are experienced with this specific route and know the best roads, fuel stations, rest stops, and food joints along the way.</p>
            <p>Key points about the <strong>Ranchi to {r.to} route</strong>:</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />Total distance: {r.distance} km via the fastest highway route</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />Estimated travel time: {r.duration} (may vary based on traffic and weather)</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />Road type: Mix of national highway, state highway, and city roads</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />Rest stops and dhabas available every 30-50 km along the route</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />Petrol pumps available at regular intervals — no fuel worries</li>
            </ul>

            {r.attractions.length > 0 && (
              <>
                <h3 className="text-xl font-bold text-white mt-6">Top Places to Visit in {r.to}</h3>
                <p>Traveling to <strong>{r.to} for tourism or sightseeing</strong>? Here are the must-visit tourist attractions in and around {r.to} that you can explore with our <strong>cab service</strong>:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {r.attractions.map((a, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/3 rounded-lg p-2.5 border border-white/5">
                      <MapPin size={14} className="text-accent shrink-0" />
                      <span className="text-gray-200">{a}</span>
                    </div>
                  ))}
                </div>
                <p>After reaching {r.to}, you can also book our <strong>local cab service in {r.to}</strong> for sightseeing. Our drivers double as local guides and can help you explore all major attractions comfortably.</p>
              </>
            )}

            <h3 className="text-xl font-bold text-white mt-6">How to Book Ranchi to {r.to} Cab — Simple 3-Step Process</h3>
            <p>Booking your <strong>Ranchi to {r.to} taxi</strong> with Car Rental Ranchi takes less than 2 minutes:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
              <div className="glass-card-light p-4 text-center">
                <div className="text-2xl mb-2">📞</div>
                <h4 className="text-white font-semibold text-sm mb-1">Step 1: Call or WhatsApp</h4>
                <p className="text-gray-400 text-xs">Call <a href="tel:+917488341848" className="text-primary-light">+91 7488341848</a> or send your travel details via WhatsApp</p>
              </div>
              <div className="glass-card-light p-4 text-center">
                <div className="text-2xl mb-2">✅</div>
                <h4 className="text-white font-semibold text-sm mb-1">Step 2: Confirm Booking</h4>
                <p className="text-gray-400 text-xs">Share pickup location, date, time & vehicle choice. Get instant confirmation with fare.</p>
              </div>
              <div className="glass-card-light p-4 text-center">
                <div className="text-2xl mb-2">🚗</div>
                <h4 className="text-white font-semibold text-sm mb-1">Step 3: Enjoy Your Ride</h4>
                <p className="text-gray-400 text-xs">Driver arrives at your doorstep on time. Sit back, relax, and enjoy the journey!</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-6">Ranchi to {r.to} Cab — Service Types Available</h3>
            <p>We offer multiple <strong>cab service types</strong> on the Ranchi to {r.to} route to match your specific travel needs:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>One-Way Drop Taxi:</strong> Pay only for {r.distance} km. No return fare charged. Most economical option for single-direction travel.</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>Round Trip Cab:</strong> Book for both sides — Ranchi → {r.to} → Ranchi. Get discounted per-km rates on return journey.</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>Airport Transfer:</strong> Pickup from Birsa Munda Airport (Ranchi) and drop to {r.to}. Or reverse pickup from {r.to} to Ranchi Airport.</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>Railway Station Transfer:</strong> Pickup/drop from Ranchi Junction or Hatia Station to {r.to}.</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary-light shrink-0 mt-0.5" /><strong>Multi-City Trip:</strong> Combine {r.to} with other nearby destinations for a comprehensive tour package.</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-6">Safety & Comfort Guaranteed</h3>
            <p>Your safety is our top priority on every <strong>Ranchi to {r.to} cab journey</strong>. Every vehicle in our fleet undergoes regular maintenance checks, and all drivers are professionally trained and background-verified. We provide:</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />Fully insured vehicles with valid fitness certificates</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />First-aid kit and emergency contact numbers in every car</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />Regular sanitization and deep cleaning of all vehicles</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />Live GPS tracking shared with your family members</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />Speed-governed vehicles — no over-speeding</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />24/7 helpline for any emergency during the trip</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-6">Frequently Searched Keywords — Ranchi to {r.to}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                `Ranchi to ${r.to} cab`, `Ranchi to ${r.to} taxi`, `Ranchi to ${r.to} taxi fare`,
                `Ranchi to ${r.to} cab booking`, `Ranchi to ${r.to} one way cab`,
                `Ranchi to ${r.to} round trip cab`, `${r.to} to Ranchi cab`,
                `Ranchi to ${r.to} car rental`, `Ranchi to ${r.to} cab service`,
                `Ranchi to ${r.to} distance`, `cheapest cab Ranchi to ${r.to}`,
                `Ranchi to ${r.to} taxi booking online`, `Ranchi to ${r.to} drop taxi`,
                `Ranchi to ${r.to} outstation cab`, `cab fare Ranchi to ${r.to}`,
                `Ranchi airport to ${r.to} cab`, `Ranchi to ${r.to} Innova booking`,
                `Ranchi to ${r.to} SUV cab`, `best cab service Ranchi to ${r.to}`,
                `Ranchi to ${r.to} night cab`, `Car Rental Ranchi to ${r.to}`,
              ].map((kw, i) => (
                <span key={i} className="text-[10px] bg-white/5 border border-white/8 rounded-full px-2.5 py-1 text-gray-400">{kw}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Routes */}
      {related.length > 0 && (
        <section className="section-padding">
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

      <FAQSection faqs={faqs} title={`Ranchi to ${r.to} Cab — FAQ`} />

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-primary/20 to-accent/10">
        <div className="container-custom text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Book Ranchi to {r.to} Cab Now</h2>
          <p className="text-gray-300 mb-5 text-sm">Starting at just ₹{r.fares.dzire}. Call now for instant booking!</p>
          <a href="tel:+917488341848" className="btn-accent"><Phone size={18} /> +91 7488341848</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "TaxiService",
        name: `Ranchi to ${r.to} Cab Service - Car Rental Ranchi`,
        description: r.metaDesc,
        provider: { "@type": "Organization", name: "Car Rental Ranchi", telephone: "+91-7488341848" },
        areaServed: [{ "@type": "City", name: "Ranchi" }, { "@type": "City", name: r.to }],
        priceRange: `₹${r.fares.dzire} - ₹${r.fares.crysta}`,
      })}} />
    </>
  );
}
