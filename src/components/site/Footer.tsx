import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-emerald text-emerald-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-gold grid place-items-center">
              <span className="font-serif text-emerald font-bold text-lg">P</span>
            </div>
            <div className="font-serif text-xl">Paradise Event Centre</div>
          </div>
          <p className="text-sm text-emerald-foreground/75 leading-relaxed">
            Lagos&apos; premier venue for weddings, conferences, and celebrations of every scale.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-gold">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/about", "About Us"],
              ["/services", "Services"],
              ["/gallery", "Gallery"],
              ["/pricing", "Pricing"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-emerald-foreground/80 hover:text-gold transition-smooth">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-emerald-foreground/85">
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 text-gold mt-0.5" />
              <span>261 Murtala Muhammed Way, Alagomeji, Yaba, Lagos</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-gold mt-0.5" />
              <a href="tel:+2348000000000" className="hover:text-gold">+234 800 000 0000</a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-gold mt-0.5" />
              <a href="mailto:hello@paradiseeventcentre.com" className="hover:text-gold">
                hello@paradiseeventcentre.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-gold">Follow</h4>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 grid place-items-center rounded-full border border-emerald-foreground/30 hover:bg-gold hover:text-emerald hover:border-gold transition-smooth"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 grid place-items-center rounded-full border border-emerald-foreground/30 hover:bg-gold hover:text-emerald hover:border-gold transition-smooth"
            >
              <Facebook size={18} />
            </a>
          </div>
          <p className="mt-6 text-xs text-emerald-foreground/60">
            Open daily by appointment.
          </p>
        </div>
      </div>
      <div className="border-t border-emerald-foreground/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-xs text-emerald-foreground/60 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Paradise Event Centre. All rights reserved.</span>
          <span>Crafted with elegance in Lagos.</span>
        </div>
      </div>
    </footer>
  );
}
