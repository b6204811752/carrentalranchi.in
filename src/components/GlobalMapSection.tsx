import { Phone } from "lucide-react";

export default function GlobalMapSection() {
  return (
    <section className="section-padding bg-dark-light/50 border-t border-white/5" id="find-us">
      <div className="container-custom">
        <div className="text-center mb-6">
          <span className="text-primary-light text-sm font-semibold uppercase tracking-wider">Find Us</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">Car Rental Ranchi — Service Across Jharkhand</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto text-sm">
            Based in Ranchi, we provide cab service to 100+ destinations across Jharkhand, Bihar, West Bengal, Odisha &amp; UP. Available 24/7.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2 glass-card overflow-hidden rounded-2xl" style={{ minHeight: 350 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117462.05780729498!2d85.23493745!3d23.34408635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 350 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Car Rental Ranchi - Location Map"
              className="w-full h-full"
            />
          </div>

          {/* Contact Info beside map */}
          <div className="flex flex-col gap-4">
            <div className="glass-card p-5 flex-1">
              <h3 className="text-white font-bold mb-3">📍 Our Location</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ranchi, Jharkhand 834001<br />
                India
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <a href="tel:+917488341848" className="flex items-center gap-2 text-gray-300 hover:text-primary-light transition-colors">
                  📞 +91 7488341848
                </a>
                <a href="mailto:carrentalranchi01@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-primary-light transition-colors">
                  📧 carrentalranchi01@gmail.com
                </a>
                <span className="flex items-center gap-2 text-gray-300">
                  🕐 Open 24/7 — 365 Days
                </span>
              </div>
            </div>

            <div className="glass-card p-5">
              <h3 className="text-white font-bold mb-3">🚗 Areas We Cover</h3>
              <div className="flex flex-wrap gap-1.5">
                {["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh", "Deoghar", "Patna", "Kolkata", "Varanasi", "Gaya", "Rourkela", "Asansol"].map(c => (
                  <span key={c} className="text-[10px] bg-white/5 border border-white/8 rounded-full px-2.5 py-1 text-gray-300">{c}</span>
                ))}
              </div>
            </div>

            <a href="tel:+917488341848" className="btn-accent justify-center">
              <Phone size={18} /> Book Cab — +91 7488341848
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
