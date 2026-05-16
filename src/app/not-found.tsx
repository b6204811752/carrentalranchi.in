import Link from "next/link";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-custom text-center">
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold mb-3">Page Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">The page you&apos;re looking for doesn&apos;t exist. But don&apos;t worry — you can still book your cab!</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary"><Home size={18} /> Go Home</Link>
          <a href="tel:+917488341848" className="btn-accent"><Phone size={18} /> Call Us</a>
        </div>
      </div>
    </section>
  );
}
