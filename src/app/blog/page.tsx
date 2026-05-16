import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import blogs from "@/data/blogs.json";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog | Ranchi Travel Guide & Tips | Car Rental Ranchi",
  description: "Read travel guides, tips, and destination articles for Ranchi and Jharkhand. Plan your trips better with Car Rental Ranchi blog.",
  alternates: { canonical: "https://carrentalranchi.in/blog" },
};

export default function BlogPage() {
  return (
    <div className="hero-gradient pt-4 pb-0">
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "Blog" }]} />
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-2">Travel Blog &amp; Guides</h1>
        <p className="text-gray-300 mb-8">Travel tips, destination guides, and trip planning resources for Ranchi and Jharkhand.</p>
      </div>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map(b => (
              <Link key={b.slug} href={`/blog/${b.slug}`} className="glass-card overflow-hidden group no-underline hover:border-primary/30 transition-all">
                <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
                  <Calendar size={28} className="text-primary-light opacity-40" />
                </div>
                <div className="p-5">
                  <h2 className="text-white font-bold text-sm mb-2 group-hover:text-primary-light transition-colors">{b.title}</h2>
                  <p className="text-gray-400 text-xs mb-3 line-clamp-2">{b.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs">{b.date}</span>
                    <span className="text-primary-light text-xs flex items-center gap-1">Read <ArrowRight size={12} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
