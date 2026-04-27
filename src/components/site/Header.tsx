import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-gold grid place-items-center shadow-gold">
            <span className="font-serif text-emerald font-bold text-lg">P</span>
          </div>
          <div className="leading-tight">
            <div
              className={`font-serif text-lg font-semibold tracking-wide ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Paradise
            </div>
            <div
              className={`text-[10px] uppercase tracking-[0.25em] ${
                scrolled ? "text-muted-foreground" : "text-white/80"
              }`}
            >
              Event Centre
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-smooth hover:text-gold ${
                scrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-emerald shadow-gold hover:scale-105 transition-smooth"
          >
            Book a Tour
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-md ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border shadow-elegant animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-foreground text-base font-medium hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-emerald shadow-gold"
            >
              Book a Tour
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
