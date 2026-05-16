"use client";
import { useState, useMemo } from "react";
import { Calculator, Car, IndianRupee, Navigation } from "lucide-react";
import fleet from "@/data/fleet.json";

interface Props {
  defaultFrom?: string;
  defaultTo?: string;
  defaultDistance?: number;
}

export default function FareCalculator({ defaultFrom = "Ranchi", defaultTo = "", defaultDistance = 0 }: Props) {
  const [distance, setDistance] = useState(defaultDistance);
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
  const [selectedVehicle, setSelectedVehicle] = useState(fleet[0].id);

  const vehicle = fleet.find(v => v.id === selectedVehicle) || fleet[0];

  const fare = useMemo(() => {
    const d = tripType === "round-trip" ? distance * 2 : distance;
    const baseFare = Math.round(d * vehicle.perKm);
    const driverAllowance = d > 300 ? (vehicle.passengers > 6 ? 400 : 300) : 0;
    const gstPercent = 5;
    const gst = Math.round(baseFare * gstPercent / 100);
    return { baseFare, driverAllowance, gst, total: baseFare + driverAllowance, distance: d };
  }, [distance, tripType, vehicle]);

  return (
    <div className="glass-card p-5 md:p-6 glow-amber" id="fare-calculator">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
          <Calculator size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-white font-bold text-base">Fare Calculator</h3>
          <p className="text-gray-500 text-xs">Get instant fare estimate</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div>
          <label className="text-xs text-gray-400 mb-1 block">From</label>
          <input type="text" defaultValue={defaultFrom} readOnly className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm" />
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">To</label>
          <input type="text" defaultValue={defaultTo} readOnly={!!defaultTo} placeholder="Enter destination" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Distance (km)</label>
          <div className="relative">
            <Navigation size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="number"
              min={1}
              max={2000}
              value={distance || ""}
              onChange={e => setDistance(Number(e.target.value))}
              placeholder="e.g. 130"
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-2.5 text-white text-sm focus:border-accent focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Trip Type</label>
          <div className="flex rounded-lg overflow-hidden border border-white/10">
            <button onClick={() => setTripType("one-way")}
              className={`flex-1 py-2.5 text-xs font-medium transition-colors ${tripType === "one-way" ? "bg-accent text-dark" : "bg-white/5 text-gray-400 hover:text-white"}`}>
              One Way
            </button>
            <button onClick={() => setTripType("round-trip")}
              className={`flex-1 py-2.5 text-xs font-medium transition-colors ${tripType === "round-trip" ? "bg-accent text-dark" : "bg-white/5 text-gray-400 hover:text-white"}`}>
              Round Trip
            </button>
          </div>
        </div>
      </div>

      <div>
        <label className="text-xs text-gray-400 mb-2 block">Select Vehicle</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
          {fleet.slice(0, 6).map(v => (
            <button key={v.id} onClick={() => setSelectedVehicle(v.id)}
              className={`p-2.5 rounded-lg text-left text-xs transition-all border ${selectedVehicle === v.id
                ? "border-accent bg-accent/10 text-white"
                : "border-white/5 bg-white/3 text-gray-400 hover:border-white/15"}`}>
              <div className="font-medium text-[11px]">{v.name}</div>
              <div className="text-primary-light font-bold mt-0.5">₹{v.perKm}/km</div>
            </button>
          ))}
        </div>
      </div>

      {distance > 0 && (
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <IndianRupee size={16} className="text-accent" />
            <span className="text-white font-semibold text-sm">Fare Breakdown</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Distance ({fare.distance} km × ₹{vehicle.perKm})</span>
              <span className="text-white">₹{fare.baseFare}</span>
            </div>
            {fare.driverAllowance > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-400">Driver Allowance</span>
                <span className="text-white">₹{fare.driverAllowance}</span>
              </div>
            )}
            <div className="flex justify-between text-gray-500 text-xs">
              <span>Toll/State Tax</span>
              <span>Extra (at actuals)</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-white/10">
              <span className="text-white font-bold">Estimated Total</span>
              <span className="text-accent font-bold text-lg">₹{fare.total}</span>
            </div>
          </div>
          <a href="tel:+917488341848" className="btn-accent w-full justify-center mt-3 text-sm !py-2.5">
            Book {vehicle.name} — ₹{fare.total}
          </a>
        </div>
      )}
    </div>
  );
}
