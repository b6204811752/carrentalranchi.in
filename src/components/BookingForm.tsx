"use client";
import { useState, useRef } from "react";
import { Phone, MapPin, Calendar, Clock, Car, Send, CheckCircle, Loader2 } from "lucide-react";

/* ── Google Form Config ── */
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSf5r40lb0zodRVtuEEt2dXzZM8vHmmMOsbq3QBKjm17p8pM8Q/formResponse";

const ENTRY = {
  name: "entry.1888790335",
  phone: "entry.1565173083",
  pickup: "entry.1695603263",
  drop: "entry.1720671331",
  date: "entry.2139800179",
  time: "entry.1874926499",
  vehicle: "entry.2037979153",
  tripType: "entry.206325279",
} as const;

/* Map local values → exact Google Form option strings */
const vehicleMap: Record<string, string> = {
  sedan: "Sedan",
  suv: "SUV/ertiga",
  innova: "Innova",
  crysta: "innova crysta",
  tempo: "Tempo traveller",
};
const tripMap: Record<string, string> = {
  "one-way": "oneway",
  "round-trip": "round trip",
  local: "local",
  airport: "Airport",
};

export default function BookingForm({ fromCity = "Ranchi", toCity = "" }: { fromCity?: string; toCity?: string }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: fromCity,
    drop: toCity,
    date: "",
    time: "",
    vehicle: "sedan",
    tripType: "one-way",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const submitToGoogle = () => {
    /* Build a hidden HTML form targeting the hidden iframe */
    const gForm = document.createElement("form");
    gForm.method = "POST";
    gForm.action = GOOGLE_FORM_ACTION;
    gForm.target = "google-form-iframe";
    gForm.style.display = "none";

    const fields: Record<string, string> = {
      [ENTRY.name]: form.name,
      [ENTRY.phone]: form.phone,
      [ENTRY.pickup]: form.pickup,
      [ENTRY.drop]: form.drop,
      [ENTRY.date]: form.date,
      [ENTRY.time]: form.time,
      [ENTRY.vehicle]: vehicleMap[form.vehicle] || form.vehicle,
      [ENTRY.tripType]: tripMap[form.tripType] || form.tripType,
    };

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      gForm.appendChild(input);
    });

    document.body.appendChild(gForm);
    gForm.submit();
    document.body.removeChild(gForm);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      /* 1️⃣  Submit to Google Form (silent, via hidden iframe) */
      submitToGoogle();

      /* 2️⃣  Show success message */
      setStatus("success");

      /* 3️⃣  After 3 seconds → reset form */
      setTimeout(() => {
        setForm({ name: "", phone: "", pickup: fromCity, drop: toCity, date: "", time: "", vehicle: "sedan", tripType: "one-way" });
        setStatus("idle");
      }, 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <>
      {/* Hidden iframe for silent Google Form submission */}
      <iframe
        ref={iframeRef}
        name="google-form-iframe"
        style={{ display: "none" }}
        title="Google Form Submission"
      />

      <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-6 md:p-8 glow-green" id="booking-form">
        <h3 className="text-xl font-bold text-white mb-1">Book Your Cab Now</h3>
        <p className="text-gray-400 text-sm mb-6">Fill details &amp; get instant confirmation on WhatsApp</p>

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

        <button type="submit" disabled={status === "submitting" || status === "success"}
          className="w-full btn-accent justify-center text-base !py-3.5 mt-2 disabled:opacity-50">
          {status === "submitting" ? (
            <><Loader2 size={18} className="animate-spin" /> Submitting...</>
          ) : status === "success" ? (
            <><CheckCircle size={18} /> Booking Submitted Successfully!</>
          ) : status === "error" ? (
            <><Send size={18} /> Retry Booking</>
          ) : (
            <><Send size={18} /> Book Now</>
          )}
        </button>

        {status === "success" && (
          <p className="text-center text-green-400 text-xs mt-3 animate-pulse">
            ✅ Your booking has been recorded &amp; sent to WhatsApp! We&apos;ll contact you shortly.
          </p>
        )}

        <p className="text-center text-gray-500 text-xs mt-3">Or call directly: <a href="tel:+917488341848" className="text-primary-light hover:underline">+91 7488341848</a></p>
      </form>
    </>
  );
}
