import { MetadataRoute } from "next";
import routes from "@/data/routes.json";
import cities from "@/data/cities.json";
import tours from "@/data/tours.json";
import services from "@/data/services.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://carrentalranchi.in";
  // Fixed date — stops Google seeing "new" timestamps on every build
  const lastMod = "2026-05-16";

  const staticPages = [
    { url: base, lastModified: lastMod, changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${base}/cab-service-in-ranchi`, lastModified: lastMod, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${base}/about`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/services`, lastModified: lastMod, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/fleet`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/tours`, lastModified: lastMod, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/routes`, lastModified: lastMod, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/fare-chart`, lastModified: lastMod, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/faq`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/blog`, lastModified: lastMod, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: lastMod, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/terms`, lastModified: lastMod, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  // Top routes get higher priority
  const topRouteSlugs = new Set([
    "ranchi-to-jamshedpur-cab", "ranchi-to-dhanbad-cab", "ranchi-to-bokaro-cab",
    "ranchi-to-hazaribagh-cab", "ranchi-to-deoghar-cab", "ranchi-to-patna-cab",
    "ranchi-to-kolkata-cab", "ranchi-to-varanasi-cab", "ranchi-to-giridih-cab",
    "ranchi-to-rourkela-cab",
  ]);

  const routePages = routes.map(r => ({
    url: `${base}/routes/${r.slug}`,
    lastModified: lastMod,
    changeFrequency: "weekly" as const,
    priority: topRouteSlugs.has(r.slug) ? 0.9 : 0.8,
  }));

  // Ranchi city gets highest priority among cities (dedicated page handles it)
  const cityPages = cities
    .filter(c => c.slug !== "cab-service-in-ranchi") // Deduplicate — dedicated page in staticPages
    .map(c => ({
      url: `${base}/${c.slug}`,
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  const servicePages = services.map(s => ({
    url: `${base}/services/${s.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const tourPages = tours.map(t => ({
    url: `${base}/tours/${t.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...routePages, ...cityPages, ...servicePages, ...tourPages];
}
