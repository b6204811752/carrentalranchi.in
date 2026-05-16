"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ { q: string; a: string; }

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-padding" id="faq">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{title}</h2>
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card-light overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-medium text-white text-sm md:text-base pr-4">{faq.q}</span>
                <ChevronDown size={18} className={`text-primary-light shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({
          "@type": "Question", name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
      })}} />
    </section>
  );
}
