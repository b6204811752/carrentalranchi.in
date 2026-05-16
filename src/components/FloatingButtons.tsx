"use client";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/917488341848?text=Hi%2C%20I%20want%20to%20book%20a%20cab%20from%20Ranchi"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
      <a
        href="tel:+917488341848"
        className="w-14 h-14 rounded-full bg-yellow-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all animate-pulse"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
