import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import servicesData from "@/data/services.json";
import fleet from "@/data/fleet.json";
import BookingForm from "@/components/BookingForm";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import HeroBackground from "@/components/HeroBackground";

export function generateStaticParams() {
  return servicesData.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params;
  const s = servicesData.find((s) => s.slug === service);
  if (!s) return {};
  return { title: s.metaTitle, description: s.metaDesc, alternates: { canonical: `https://carrentalranchi.in/services/${s.slug}` } };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const s = servicesData.find((s) => s.slug === service);
  if (!s) notFound();

  const otherServices = servicesData.filter(x => x.slug !== s.slug).slice(0, 4);

  return (
    <>
      <div className="relative pt-4 pb-12 overflow-hidden">
        <HeroBackground />
        <div className="hero-gradient absolute inset-0 pointer-events-none z-0" />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: s.name }]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">{s.h1}</h1>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">{s.shortDesc}</p>
              <a href="tel:+917488341848" className="btn-accent"><Phone size={18} /> Book Now — +91 7488341848</a>
            </div>
            <BookingForm />
          </div>
        </div>
      </div>

      <TrustBadges compact />

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-gray-300 text-sm leading-relaxed space-y-4 prose prose-invert prose-p:mb-4 prose-ul:space-y-2 max-w-none" dangerouslySetInnerHTML={{
            __html: s.content
              .replace(/### (.*)/g, '<h3 class="text-lg font-bold text-white mt-6 mb-3">$1</h3>')
              .replace(/## (.*)/g, '<h2 class="text-xl font-bold text-white mt-8 mb-4 flex items-center gap-2"><span class="w-1.5 h-6 bg-accent rounded-full inline-block"></span>$1</h2>')
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
              .replace(/\|(.*)\|/g, (match) => match)
              .replace(/- (.*)/g, '<li class="flex items-start gap-2"><span class="text-primary-light mt-0.5 shrink-0">❖</span> <span class="text-gray-300">$1</span></li>')
              .replace(/\n\n/g, '</p><p>')
              .replace(/\n/g, '<br/>')
          }} />
        </div>
      </section>

      <section className="section-padding bg-dark-light/50">
        <div className="container-custom">
          <h2 className="text-xl font-bold mb-5">Available Vehicles for {s.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {fleet.slice(0, 6).map(v => (
              <div key={v.id} className="premium-card p-5 shimmer">
                <h3 className="text-white font-bold mb-1">{v.name}</h3>
                <p className="text-gray-400 text-xs mb-3">{v.categoryLabel} • {v.passengers} seats</p>
                <div className="flex justify-between items-center pt-3 border-t border-white/5">
                  <span className="text-accent font-bold text-lg">₹{v.perKm}/km</span>
                  <a href="tel:+917488341848" className="text-primary-light text-xs font-medium hover:underline">Book →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-xl font-bold mb-5">Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map(os => (
              <Link key={os.slug} href={`/services/${os.slug}`} className="premium-card p-4 group no-underline shimmer">
                <h3 className="text-white font-bold text-sm mb-1">{os.name}</h3>
                <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">{os.shortDesc}</p>
                <span className="text-primary-light text-xs mt-3 flex items-center gap-1 font-medium group-hover:gap-2 transition-all">Learn More <ArrowRight size={12} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={s.faqs} title={`${s.name} — FAQ`} />

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-accent/10" />
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-xl font-bold mb-3">Book {s.name} Now</h2>
          <a href="tel:+917488341848" className="btn-accent mt-3 text-base"><Phone size={18} /> +91 7488341848</a>
        </div>
      </section>
    </>
  );
}
