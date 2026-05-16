import Link from "next/link";
import { Phone, MapPin, Navigation, Shield, Clock, Star, Car, Users, IndianRupee, Plane, Heart, Briefcase, ArrowRight, CheckCircle, Award, ThumbsUp, Headphones, Route } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import FleetSection from "@/components/FleetSection";
import FAQSection from "@/components/FAQSection";
import routes from "@/data/routes.json";
import tours from "@/data/tours.json";
import services from "@/data/services.json";

const stats = [
  { icon: Users, value: "2,450+", label: "Happy Customers" },
  { icon: Car, value: "100+", label: "Vehicles" },
  { icon: Route, value: "120+", label: "Routes" },
  { icon: Star, value: "4.8/5", label: "Rating" },
];

const whyUs = [
  { icon: IndianRupee, title: "Best Price Guarantee", desc: "Starting ₹10/km with no hidden charges. Transparent billing on every trip." },
  { icon: Shield, title: "Safe & Verified Drivers", desc: "Background-verified, experienced drivers who know every route across Jharkhand." },
  { icon: Clock, title: "24/7 Availability", desc: "Book anytime — early morning, late night, holidays. We never close." },
  { icon: Car, title: "Well-Maintained Fleet", desc: "Sanitized, AC vehicles — Sedans, SUVs, Innova, Crysta, Tempo Traveller." },
  { icon: ThumbsUp, title: "No Hidden Charges", desc: "What you see is what you pay. Tolls and state taxes clearly communicated upfront." },
  { icon: Headphones, title: "Dedicated Support", desc: "24/7 customer support via phone and WhatsApp for any booking queries." },
];

const svcIcons: Record<string, React.ElementType> = { ArrowRight, RefreshCw: Navigation, Plane, MapPin, Navigation, Heart, Briefcase, Bus: Car };

const testimonials = [
  { name: "Rajesh Kumar", city: "Ranchi", text: "Excellent service! Booked Ranchi to Jamshedpur cab. Driver was on time, car was clean. Best cab service in Ranchi.", rating: 5 },
  { name: "Priya Singh", city: "Dhanbad", text: "Used Car Rental Ranchi for my wedding. The decorated Innova Crysta was stunning. Highly recommended!", rating: 5 },
  { name: "Amit Verma", city: "Patna", text: "Regular customer for Ranchi to Patna route. Always reliable, affordable, and comfortable. 5 stars!", rating: 5 },
  { name: "Sunita Devi", city: "Bokaro", text: "Best airport pickup service. Driver was waiting with name board. Very professional.", rating: 5 },
  { name: "Vikash Mahato", city: "Ranchi", text: "Booked tempo traveller for our Deoghar trip. 12 people traveled comfortably. Great value!", rating: 5 },
  { name: "Anita Kumari", city: "Jamshedpur", text: "Corporate cab service is excellent. Our company has been using them for 2 years. Punctual and reliable.", rating: 5 },
];

const homeFaqs = [
  { q: "What is the cheapest cab fare in Ranchi?", a: "Our cab fares start at just ₹10/km for a Swift Dzire sedan. For local travel within Ranchi, packages start at ₹800 for 4 hours/40 km. We offer the most competitive pricing in Ranchi with absolutely no hidden charges." },
  { q: "How do I book a cab with Car Rental Ranchi?", a: "Booking is easy! Call us at +91 7488341848, WhatsApp us, or fill the booking form on our website. Share your pickup/drop details, date, time, and preferred vehicle. We'll confirm your booking instantly with driver details." },
  { q: "Do you provide one-way cab service from Ranchi?", a: "Yes! We offer one-way cab service from Ranchi to 100+ destinations. You pay only for the distance traveled — no return fare charged. Popular one-way routes include Ranchi to Jamshedpur, Patna, Kolkata, and more." },
  { q: "Which vehicles are available for hire in Ranchi?", a: "We have a fleet of 100+ vehicles including Swift Dzire, Toyota Etios, Honda Amaze (sedans), Maruti Ertiga, Toyota Innova, Innova Crysta, Mahindra Scorpio, Toyota Fortuner (SUVs), and 12/17 seater Tempo Travellers." },
  { q: "Do you provide airport pickup/drop at Ranchi Airport?", a: "Yes! We provide 24/7 airport transfer service at Birsa Munda Airport (IXR). Our drivers track your flight and wait at the arrival gate. We offer 60 minutes of free waiting time after flight landing." },
  { q: "Can I book a cab from Ranchi to other states?", a: "Absolutely! We provide outstation cab service from Ranchi to cities across Bihar (Patna, Gaya), West Bengal (Kolkata, Asansol), Odisha (Bhubaneswar, Rourkela), and UP (Varanasi, Prayagraj). Both one-way and round trip available." },
  { q: "Is Car Rental Ranchi available for weddings?", a: "Yes! We offer premium decorated wedding car rental including Innova Crysta, Toyota Fortuner, and luxury cars. Perfect for Barat, Doli, and reception. Book 2-4 weeks in advance for best availability." },
  { q: "What areas in Ranchi do you cover?", a: "We cover all areas of Ranchi including Main Road, Doranda, Lalpur, Ratu Road, Kanke, Namkum, Hatia, Morabadi, Bariatu, Ashok Nagar, Kokar, Harmu, Hinoo, Chutia, Piska More, and all surrounding localities." },
];

export default function HomePage() {
  const popular = routes.slice(0, 8);
  const topTours = tours.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-5">
                <Star size={14} className="text-accent" />
                <span className="text-primary-light text-sm font-medium">Ranchi&apos;s #1 Rated Cab Service</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Best <span className="gradient-text">Car Rental</span> &amp; Cab Service in <span className="gradient-text">Ranchi</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                Book affordable cab service in Ranchi for local travel, outstation trips, airport transfer, wedding &amp; corporate travel. Professional drivers, AC vehicles, 24/7 service starting at just <strong className="text-accent">₹10/km</strong>.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {stats.map(s => (
                  <div key={s.label} className="glass-card-light p-3 text-center">
                    <s.icon size={20} className="text-primary-light mx-auto mb-1" />
                    <div className="text-white font-bold text-lg">{s.value}</div>
                    <div className="text-gray-400 text-[11px]">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="tel:+917488341848" className="btn-accent">
                  <Phone size={18} /> Call Now
                </a>
                <a href="https://wa.me/917488341848" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  WhatsApp Booking
                </a>
              </div>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-dark-light/50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-primary-light text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">Complete Cab Solutions in Ranchi</h2>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto text-sm">From local rides to interstate travel, we cover every transportation need in Jharkhand and beyond.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(s => {
              const Icon = svcIcons[s.icon] || Car;
              return (
                <Link key={s.id} href={`/services/${s.slug}`} className="glass-card-light p-5 hover:border-primary/30 transition-all group no-underline">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon size={22} className="text-primary-light" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-1">{s.name}</h3>
                  <p className="text-gray-400 text-xs line-clamp-2">{s.shortDesc}</p>
                  <span className="text-primary-light text-xs mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">Learn More <ArrowRight size={14} /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-primary-light text-sm font-semibold uppercase tracking-wider">Why Car Rental Ranchi</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">Why 2,450+ Customers Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map(w => (
              <div key={w.title} className="glass-card-light p-6 hover:border-primary/20 transition-all">
                <w.icon size={28} className="text-primary-light mb-3" />
                <h3 className="text-white font-semibold mb-2">{w.title}</h3>
                <p className="text-gray-400 text-sm">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <div className="bg-dark-light/50">
        <FleetSection compact />
      </div>

      {/* Popular Routes */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-primary-light text-sm font-semibold uppercase tracking-wider">Popular Routes</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">Top Cab Routes from Ranchi</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popular.map(r => (
              <Link key={r.slug} href={`/routes/${r.slug}`} className="glass-card-light p-5 hover:border-primary/30 transition-all group no-underline">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-green-400" />
                  <span className="text-white font-semibold text-sm">Ranchi</span>
                  <ArrowRight size={14} className="text-gray-600" />
                  <span className="text-accent font-semibold text-sm">{r.to}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{r.distance} km</span><span>•</span><span>{r.duration}</span><span>•</span><span>{r.state}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary-light font-bold">₹{r.fares.dzire}</span>
                  <span className="text-gray-500 text-xs">Sedan onwards</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/routes" className="btn-primary">View All Routes <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="section-padding bg-dark-light/50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-primary-light text-sm font-semibold uppercase tracking-wider">Tour Packages</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">Explore Jharkhand &amp; Beyond</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topTours.map(t => (
              <Link key={t.id} href={`/tours/${t.slug}`} className="glass-card-light overflow-hidden group no-underline">
                <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <Navigation size={32} className="text-primary-light opacity-50" />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold text-sm mb-1">{t.name}</h3>
                  <div className="flex gap-3 text-xs text-gray-400 mb-2">
                    <span>📅 {t.duration}</span><span>💰 From ₹{t.price}</span>
                  </div>
                  <p className="text-gray-400 text-xs line-clamp-2 mb-3">{t.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {t.places.slice(0, 3).map(p => (
                      <span key={p} className="text-[10px] bg-white/5 rounded px-2 py-0.5 text-gray-300">{p}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/tours" className="btn-primary">All Tour Packages <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-primary-light text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card-light p-5">
                <div className="flex gap-1 mb-3">{Array.from({length: t.rating}).map((_, j) => <Star key={j} size={14} className="text-accent fill-accent" />)}</div>
                <p className="text-gray-300 text-sm italic mb-4">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary-light font-bold text-sm">{t.name[0]}</div>
                  <div>
                    <div className="text-white text-sm font-medium">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="section-padding bg-dark-light/50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Book a Cab in 3 Easy Steps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Share Your Details", desc: "Call, WhatsApp, or fill our booking form with pickup, drop, date, and vehicle preference." },
              { step: "2", title: "Get Instant Confirmation", desc: "Receive booking confirmation with driver name, phone number, and vehicle details." },
              { step: "3", title: "Enjoy Your Ride", desc: "Our driver arrives at your doorstep. Sit back and enjoy a comfortable, safe journey." },
            ].map(s => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">{s.step}</div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-invert prose-sm">
            <h2 className="text-2xl font-bold mb-4">Car Rental Ranchi — Best Cab &amp; Taxi Service in Ranchi, Jharkhand</h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to <strong>Car Rental Ranchi</strong> — Ranchi&apos;s most trusted and affordable cab service provider. Whether you need a <strong>local taxi in Ranchi</strong>, an <strong>outstation cab from Ranchi to Jamshedpur</strong>, <strong>Patna</strong>, <strong>Kolkata</strong>, or a premium <strong>wedding car rental</strong>, we provide complete transportation solutions across Jharkhand and neighboring states.
            </p>
            <p className="text-gray-300 leading-relaxed">
              As the leading <strong>cab service in Ranchi</strong>, we operate a fleet of 100+ well-maintained vehicles including Swift Dzire, Toyota Etios, Maruti Ertiga, Toyota Innova, Innova Crysta, Mahindra Scorpio, Toyota Fortuner, and 12/17 seater Tempo Travellers. Our <strong>taxi service in Ranchi</strong> covers all areas including Main Road, Doranda, Lalpur, Ratu Road, Kanke, Namkum, Hatia, Morabadi, Bariatu, and all surrounding localities.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">Our Services</h3>
            <p className="text-gray-300 leading-relaxed">
              We offer comprehensive cab services: <strong>One-Way Cab</strong> (pay only for one side), <strong>Round Trip Cab</strong> (dedicated driver for return journey), <strong>Airport Transfer</strong> (Birsa Munda Airport pickup/drop), <strong>Local Cab Service</strong> (hourly packages for city travel), <strong>Outstation Cab</strong> (100+ destinations), <strong>Wedding Car Rental</strong> (decorated premium vehicles), <strong>Corporate Car Rental</strong> (monthly plans for businesses), and <strong>Tempo Traveller</strong> (12 &amp; 17 seater for group travel).
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">Popular Routes from Ranchi</h3>
            <p className="text-gray-300 leading-relaxed">
              Our most booked routes include <strong>Ranchi to Jamshedpur</strong> (130 km), <strong>Ranchi to Dhanbad</strong> (160 km), <strong>Ranchi to Bokaro</strong> (110 km), <strong>Ranchi to Hazaribagh</strong> (100 km), <strong>Ranchi to Deoghar</strong> (250 km), <strong>Ranchi to Patna</strong> (330 km), <strong>Ranchi to Kolkata</strong> (400 km), and <strong>Ranchi to Varanasi</strong> (420 km). We cover all major cities across Jharkhand, Bihar, West Bengal, Odisha, and Uttar Pradesh.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">Why Choose Car Rental Ranchi?</h3>
            <ul className="text-gray-300">
              <li>Lowest fares starting at ₹10/km with transparent pricing</li>
              <li>24/7 availability including holidays and late nights</li>
              <li>GPS-tracked, sanitized, AC vehicles</li>
              <li>Background-verified, experienced drivers</li>
              <li>Free cancellation up to 4 hours before pickup</li>
              <li>Multiple payment options: Cash, UPI, Card</li>
              <li>Dedicated customer support via phone and WhatsApp</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/20 to-accent/10 border-t border-b border-white/5">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Book Your Cab?</h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">Get the best cab service in Ranchi at unbeatable prices. Book now and travel comfortably!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+917488341848" className="btn-accent text-base"><Phone size={18} /> Call +91 7488341848</a>
            <a href="https://wa.me/917488341848" target="_blank" rel="noopener noreferrer" className="btn-primary text-base">WhatsApp Booking</a>
          </div>
        </div>
      </section>

      <FAQSection faqs={homeFaqs} />
    </>
  );
}
