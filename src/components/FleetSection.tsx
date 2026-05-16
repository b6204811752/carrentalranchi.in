import Image from "next/image";
import fleet from "@/data/fleet.json";

const fleetImages: Record<string, string> = {
  "swift-dzire": "/fleets/dezire.webp",
  "toyota-etios": "/fleets/aura.webp",
  "honda-amaze": "/fleets/aura.webp",
  "ertiga": "/fleets/crista.webp",
  "innova": "/fleets/crista.webp",
  "innova-crysta": "/fleets/crista.webp",
  "scorpio": "/fleets/bmw.webp",
  "fortuner": "/fleets/bmw.webp",
  "tempo-traveller-12": "/fleets/audi.webp",
  "tempo-traveller-17": "/fleets/audi.webp",
};

const categories = [
  {
    name: "SUV",
    label: "Sport Utility Vehicles",
    desc: "Spacious and powerful vehicles for family trips and outstation travel",
    image: "/fleets/crista.webp",
    vehicles: fleet.filter(v => ["ertiga", "innova", "innova-crysta", "scorpio"].includes(v.id)),
  },
  {
    name: "MUV",
    label: "Multi Utility Vehicles",
    desc: "Perfect for group travel, corporate events, and pilgrimages",
    image: "/fleets/audi.webp",
    vehicles: fleet.filter(v => ["tempo-traveller-12", "tempo-traveller-17", "fortuner"].includes(v.id)),
  },
  {
    name: "Luxury & Sedan",
    label: "Premium Sedans",
    desc: "Comfortable, fuel-efficient cars for daily commute and business travel",
    image: "/fleets/bmw.webp",
    vehicles: fleet.filter(v => ["swift-dzire", "toyota-etios", "honda-amaze"].includes(v.id)),
  },
];

export default function FleetSection({ compact = false }: { compact?: boolean }) {
  const displayCategories = compact ? categories : categories;
  
  return (
    <section className="section-padding" id="fleet">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="text-primary-light text-sm font-semibold uppercase tracking-wider">Our Fleet</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">Choose Your Perfect Ride</h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm">Well-maintained, sanitized vehicles with experienced drivers for every travel need.</p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {displayCategories.map((cat) => (
            <div key={cat.name} className="glass-card overflow-hidden group hover:border-primary/30 transition-all">
              <div className="relative h-48 bg-gradient-to-br from-dark-lighter to-dark overflow-hidden">
                <Image
                  src={cat.image}
                  alt={`${cat.name} - Car Rental Ranchi Fleet`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="bg-accent text-dark text-xs font-bold px-3 py-1 rounded-full">{cat.name}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-1">{cat.label}</h3>
                <p className="text-gray-400 text-xs mb-4">{cat.desc}</p>
                <div className="space-y-2">
                  {cat.vehicles.map(v => (
                    <div key={v.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                      <div>
                        <span className="text-white text-sm font-medium">{v.name}</span>
                        <span className="text-gray-500 text-xs ml-2">{v.passengers} seats</span>
                      </div>
                      <div className="text-right">
                        <span className="text-accent font-bold">₹{v.perKm}</span>
                        <span className="text-gray-500 text-xs">/km</span>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="tel:+917488341848" className="btn-primary w-full justify-center text-sm !py-2.5 mt-4">
                  Book {cat.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* All Vehicles Table */}
        {!compact && (
          <div className="glass-card overflow-hidden">
            <div className="p-4 border-b border-white/5">
              <h3 className="text-white font-bold">Complete Fleet — All Vehicles &amp; Pricing</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="fare-table">
                <thead>
                  <tr>
                    <th>Vehicle</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Seats</th>
                    <th>Per Km</th>
                    <th>Base Package</th>
                    <th>Best For</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {fleet.map(v => (
                    <tr key={v.id}>
                      <td className="text-white font-medium">{v.name}</td>
                      <td><span className="text-xs bg-primary/20 text-primary-light px-2 py-0.5 rounded-full">{v.categoryLabel}</span></td>
                      <td>
                        <div className="relative w-16 h-10 rounded overflow-hidden">
                          <Image src={fleetImages[v.id] || "/fleets/dezire.webp"} alt={v.name} fill className="object-cover" sizes="64px" />
                        </div>
                      </td>
                      <td>{v.passengers}</td>
                      <td className="text-accent font-bold">₹{v.perKm}/km</td>
                      <td className="text-gray-300">₹{v.basePrice} <span className="text-gray-500 text-xs">({v.baseDuration})</span></td>
                      <td className="text-gray-400 text-xs max-w-[150px]">{v.bestFor}</td>
                      <td><a href="tel:+917488341848" className="text-primary-light text-xs font-medium hover:underline">Book →</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
