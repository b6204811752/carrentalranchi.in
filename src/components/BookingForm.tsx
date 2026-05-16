"use client";
import { useState } from "react";
import { Phone, MapPin, Calendar, Clock, Car, Send } from "lucide-react";

export default function BookingForm({ fromCity = "Ranchi", toCity = "" }: { fromCity?: string; toCity?: string }) {
  const [form, setForm] = useState({ name: "", phone: "", pickup: fromCity, drop: toCity, date: "", time: "", vehicle: "sedan", tripType: "one-way" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I want to book a ${form.tripType} cab.\n\nName: ${form.name}\nPhone: ${form.phone}\nPickup: ${form.pickup}\nDrop: ${form.drop}\nDate: ${form.date}\nTime: ${form.time}\nVehicle: ${form.vehicle}`;
    window.open(`https://wa.me/917488341848?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 glow-green" id="booking-form">
      <h3 className="text-xl font-bold text-white mb-1">Book Your Cab Now</h3>
      <p className="text-gray-400 text-sm mb-6">Fill details & get instant confirmation on WhatsApp</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Full Name</label>
          <input type="text" required placeholder="Your Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none transition-colors" />
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Phone Number</label>
          <div className="relative">
            <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input type="tel" required placeholder="+91 XXXXXXXXXX" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white text-sm focus:border-primary focus:outline-none transition-colors" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Pickup Location</label>
          <div className="relative">
            <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500" />
            <input type="text" required placeholder="Pickup City/Address" value={form.pickup} onChange={e => setForm({...form, pickup: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white text-sm focus:border-primary focus:outline-none transition-colors" />
          </div>
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Drop Location</label>
          <div className="relative">
            <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-red-500" />
            <input type="text" required placeholder="Drop City/Address" value={form.drop} onChange={e => setForm({...form, drop: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white text-sm focus:border-primary focus:outline-none transition-colors" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Date</label>
          <div className="relative">
            <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input type="date" required value={form.date} onChange={e => setForm({...form, date: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-2 py-3 text-white text-sm focus:border-primary focus:outline-none transition-colors" />
          </div>
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Time</label>
          <div className="relative">
            <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input type="time" value={form.time} onChange={e => setForm({...form, time: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-2 py-3 text-white text-sm focus:border-primary focus:outline-none transition-colors" />
          </div>
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Vehicle</label>
          <div className="relative">
            <Car size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <select value={form.vehicle} onChange={e => setForm({...form, vehicle: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-2 py-3 text-white text-sm focus:border-primary focus:outline-none transition-colors appearance-none">
              <option className="bg-slate-900 text-white" value="sedan">Sedan</option>
              <option className="bg-slate-900 text-white" value="suv">SUV/Ertiga</option>
              <option className="bg-slate-900 text-white" value="innova">Innova</option>
              <option className="bg-slate-900 text-white" value="crysta">Innova Crysta</option>
              <option className="bg-slate-900 text-white" value="tempo">Tempo Traveller</option>
            </select>
          </div>
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Trip Type</label>
          <select value={form.tripType} onChange={e => setForm({...form, tripType: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none transition-colors appearance-none">
            <option className="bg-slate-900 text-white" value="one-way">One Way</option>
            <option className="bg-slate-900 text-white" value="round-trip">Round Trip</option>
            <option className="bg-slate-900 text-white" value="local">Local</option>
            <option className="bg-slate-900 text-white" value="airport">Airport</option>
          </select>
        </div>
      </div>

      <button type="submit" disabled={submitted}
        className="w-full btn-accent justify-center text-base !py-3.5 mt-2 disabled:opacity-50">
        {submitted ? "✅ Redirecting to WhatsApp..." : <><Send size={18} /> Book on WhatsApp</>}
      </button>
      <p className="text-center text-gray-500 text-xs mt-3">Or call directly: <a href="tel:+917488341848" className="text-primary-light hover:underline">+91 7488341848</a></p>
    </form>
  );
}
