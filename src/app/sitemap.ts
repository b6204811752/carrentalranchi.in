import { MetadataRoute } from "next";
import routes from "@/data/routes.json";
import cities from "@/data/cities.json";
import tours from "@/data/tours.json";
import services from "@/data/services.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://carrentalranchi.in";
  const now = new Date().toISOString();

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/fleet`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/tours`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/routes`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/fare-chart`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const routePages = routes.map(r => ({
    url: `${base}/routes/${r.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const cityPages = cities.map(c => ({
    url: `${base}/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const servicePages = services.map(s => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const tourPages = tours.map(t => ({
    url: `${base}/tours/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...routePages, ...cityPages, ...servicePages, ...tourPages];
}
