import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";
import blogs from "@/data/blogs.json";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return blogs.map(b => ({ slug: b.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = blogs.find(b => b.slug === slug);
  if (!b) return {};
  return { title: b.metaTitle, description: b.metaDesc, alternates: { canonical: `https://carrentalranchi.in/blog/${b.slug}` } };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = blogs.find(b => b.slug === slug);
  if (!b) notFound();
  return (
    <div className="hero-gradient pt-4 pb-0">
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: b.title }]} />
      </div>
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">{b.title}</h1>
          <div className="text-gray-500 text-sm mb-8">{b.date} • Car Rental Ranchi</div>
          <div className="text-gray-300 text-sm leading-relaxed space-y-4">
            <p>{b.excerpt}</p>
            <p>Planning a trip from Ranchi? Car Rental Ranchi provides the most affordable and reliable cab service across Jharkhand and neighboring states. With our fleet of 100+ vehicles and professional drivers, we ensure every journey is comfortable, safe, and memorable.</p>
            <p>Whether you&apos;re looking for a local cab in Ranchi, an outstation trip to your destination, or an airport transfer at Birsa Munda Airport, we&apos;ve got you covered. Our transparent per-km pricing starts at just ₹12/km with absolutely no hidden charges.</p>
            <h2 className="text-xl font-bold text-white mt-6">Why Choose Car Rental Ranchi?</h2>
            <p>With 2,450+ satisfied customers, 4.8/5 rating, and 7+ years of experience, Car Rental Ranchi is the most trusted name in cab service across Jharkhand. We offer 24/7 availability, verified drivers, sanitized vehicles, and the best prices in the market.</p>
            <p>Ready to book? Call us at <a href="tel:+917488341848" className="text-primary-light font-medium">+91 7488341848</a> or WhatsApp us for instant booking confirmation.</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/blog" className="btn-primary"><ArrowLeft size={16} /> Back to Blog</Link>
            <a href="tel:+917488341848" className="btn-accent"><Phone size={16} /> Book a Cab</a>
          </div>
        </div>
      </section>
    </div>
  );
}
