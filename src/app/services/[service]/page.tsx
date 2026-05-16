import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import servicesData from "@/data/services.json";
import fleet from "@/data/fleet.json";
import BookingForm from "@/components/BookingForm";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

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
      <div className="hero-gradient pt-4 pb-12">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: s.name }]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold mb-3">{s.h1}</h1>
              <p className="text-gray-300 mb-6">{s.shortDesc}</p>
              <a href="tel:+917488341848" className="btn-accent"><Phone size={18} /> Book Now — +91 7488341848</a>
            </div>
            <BookingForm />
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-gray-300 text-sm leading-relaxed space-y-4" dangerouslySetInnerHTML={{
            __html: s.content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br/>').replace(/## (.*)/g, '<h2 class="text-xl font-bold text-white mt-6 mb-3">$1</h2>').replace(/### (.*)/g, '<h3 class="text-lg font-bold text-white mt-4 mb-2">$1</h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\|(.*)\|/g, (match) => match).replace(/- (.*)/g, '<li class="flex items-start gap-2 ml-4">• $1</li>')
          }} />
        </div>
      </section>

      <section className="section-padding bg-dark-light/50">
        <div className="container-custom">
          <h2 className="text-xl font-bold mb-5">Available Vehicles for {s.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fleet.slice(0, 6).map(v => (
              <div key={v.id} className="glass-card-light p-4">
                <h3 className="text-white font-semibold mb-1">{v.name}</h3>
                <p className="text-gray-400 text-xs mb-2">{v.categoryLabel} • {v.passengers} seats</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent font-bold">₹{v.perKm}/km</span>
                  <a href="tel:+917488341848" className="text-primary-light text-xs hover:underline">Book →</a>
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
              <Link key={os.slug} href={`/services/${os.slug}`} className="glass-card-light p-4 hover:border-primary/30 transition-all no-underline">
                <h3 className="text-white font-semibold text-sm mb-1">{os.name}</h3>
                <p className="text-gray-400 text-xs line-clamp-2">{os.shortDesc}</p>
                <span className="text-primary-light text-xs mt-2 flex items-center gap-1">Learn More <ArrowRight size={12} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={s.faqs} title={`${s.name} — FAQ`} />

      <section className="py-12 bg-gradient-to-r from-primary/20 to-accent/10">
        <div className="container-custom text-center">
          <h2 className="text-xl font-bold mb-3">Book {s.name} Now</h2>
          <a href="tel:+917488341848" className="btn-accent mt-3"><Phone size={18} /> +91 7488341848</a>
        </div>
      </section>
    </>
  );
}
