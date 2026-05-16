import { Star, Users, Car, Clock, Shield, Award } from "lucide-react";

const badges = [
  { icon: Star, value: "4.8★", label: "Google Rating", color: "text-yellow-400" },
  { icon: Users, value: "2,450+", label: "Happy Customers", color: "text-primary-light" },
  { icon: Award, value: "7+ Years", label: "Of Service", color: "text-accent" },
  { icon: Car, value: "100+", label: "Vehicles", color: "text-primary-light" },
  { icon: Shield, value: "Verified", label: "Drivers", color: "text-green-400" },
  { icon: Clock, value: "24/7", label: "Support", color: "text-accent" },
];

export default function TrustBadges({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 py-4">
        {badges.slice(0, 4).map((b) => (
          <div key={b.label} className="flex items-center gap-1.5 text-sm">
            <b.icon size={14} className={b.color} />
            <span className="text-white font-semibold">{b.value}</span>
            <span className="text-gray-400 text-xs">{b.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-dark-light/50 border-y border-white/5">
      <div className="container-custom py-5">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {badges.map((b) => (
            <div key={b.label} className="flex flex-col items-center text-center gap-1">
              <b.icon size={22} className={b.color} />
              <span className="text-white font-bold text-sm">{b.value}</span>
              <span className="text-gray-500 text-[11px]">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
