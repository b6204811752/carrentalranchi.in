import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Crumb { label: string; href?: string; }

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const allItems = [{ label: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center flex-wrap gap-1 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
        {allItems.map((item, i) => (
          <li key={i} className="flex items-center gap-1" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            {i > 0 && <ChevronRight size={14} className="text-gray-600" />}
            {item.href && i < allItems.length - 1 ? (
              <Link href={item.href} className="text-gray-400 hover:text-primary-light transition-colors no-underline flex items-center gap-1" itemProp="item">
                {i === 0 && <Home size={14} />}
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-primary-light font-medium" itemProp="name">{item.label}</span>
            )}
            <meta itemProp="position" content={String(i + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
