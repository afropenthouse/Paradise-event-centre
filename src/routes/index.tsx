import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  Sparkles,
  ShieldCheck,
  MapPin,
  Music2,
  Camera,
  ChevronRight,
  Star,
} from "lucide-react";
import heroImg from "@/assets/hero-hall.jpg";
import weddingImg from "@/assets/event-wedding.jpg";
import corporateImg from "@/assets/event-corporate.jpg";
import birthdayImg from "@/assets/event-birthday.jpg";
import concertImg from "@/assets/event-concert.jpg";
import drapesImg from "@/assets/event-drapes.jpg";
import banquetImg from "@/assets/event-banquet.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paradise Event Centre — Lagos Premier Event Venue" },
      {
        name: "description",
        content:
          "Lagos&apos; premier event venue in Yaba. Host weddings, conferences, concerts and celebrations for up to 2,000 guests in elegant style.",
      },
      { property: "og:title", content: "Paradise Event Centre — Lagos Premier Event Venue" },
      {
        property: "og:description",
        content:
          "Elegant event hall in Yaba, Lagos for up to 2,000 guests. Weddings, conferences, concerts and more.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "2,000", label: "Guest Capacity" },
  { value: "500+", label: "Events Hosted" },
  { value: "24/7", label: "Security & Power" },
  { value: "180", label: "Parking Spaces" },
];

const services = [
  { icon: Sparkles, title: "Weddings", img: weddingImg, desc: "From intimate ceremonies to grand receptions, every detail crafted with elegance." },
  { icon: Users, title: "Corporate Events", img: corporateImg, desc: "Conferences, seminars and product launches with state-of-the-art AV." },
  { icon: Star, title: "Birthdays", img: birthdayImg, desc: "Customisable themes and decor to make every milestone unforgettable." },
  { icon: Music2, title: "Concerts & Shows", img: concertImg, desc: "Professional stage, truss lighting and powerful sound for live entertainment." },
];

const features = [
  { icon: Users, title: "Vast Capacity", desc: "Seats 1,000 in banquet style or 2,000 theatre style — partitioned for two events at once." },
  { icon: Sparkles, title: "Elegant Interiors", desc: "Crystal chandeliers, draped ceilings and refined finishes throughout the hall." },
  { icon: ShieldCheck, title: "24/7 Security", desc: "CCTV surveillance, on-site guards and police presence for complete peace of mind." },
  { icon: MapPin, title: "Prime Location", desc: "Strategically placed in Yaba — easy access for both Mainland and Island guests." },
  { icon: Music2, title: "Pro AV & Lighting", desc: "Truss, fog machines, dual stages, large display screens and concert-grade sound." },
  { icon: Camera, title: "Full Amenities", desc: "Changing rooms, kitchenette, ample parking and dedicated event support staff." },
];

const testimonials = [
  { quote: "Paradise Event Centre made our wedding absolutely perfect. The venue was breathtaking and the staff went above and beyond.", name: "Sarah & Michael", role: "Wedding Couple" },
  { quote: "We hosted our annual conference here and it was outstanding. Top-notch facilities and professional service throughout.", name: "Dr. Adebayo", role: "Corporate Client" },
  { quote: "My son&apos;s birthday was magical — the decor, the lighting, the team. Everything was just beautiful.", name: "Mrs. Shuaib", role: "Birthday Host" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Paradise Event Centre grand hall"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-up">
          <span className="inline-block text-xs uppercase tracking-[0.4em] text-gold font-medium">
            Lagos · Yaba
          </span>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05]">
            Where Moments
            <br />
            Become <span className="text-gradient-gold italic">Memories</span>
          </h1>
          <div className="gold-divider mx-auto mt-8" />
          <p className="mt-8 text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Lagos&apos; most elegant event venue — host weddings, conferences and celebrations for up to 2,000 guests in unparalleled style.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold text-emerald shadow-gold hover:scale-105 transition-smooth"
            >
              Book Your Event
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 backdrop-blur px-8 py-4 text-base font-semibold text-white hover:bg-white/15 transition-smooth"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/70 text-xs tracking-[0.3em] uppercase animate-fade-in">
          Scroll
        </div>
      </section>

      {/* STATS */}
      <section className="bg-emerald text-emerald-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-gold font-semibold">{s.value}</div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.2em] text-emerald-foreground/75">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={drapesImg}
              alt="Elegant draped ceiling with chandeliers"
              className="w-full rounded-2xl shadow-elegant object-cover aspect-[4/5]"
              loading="lazy"
            />
            <div className="hidden md:block absolute -bottom-10 -right-10 w-48 h-48 rounded-2xl overflow-hidden shadow-elegant border-4 border-background">
              <img src={banquetImg} alt="Banquet table" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-gold opacity-30 blur-2xl" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Welcome</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-foreground">
              The premier address for unforgettable celebrations
            </h2>
            <div className="gold-divider mt-6" />
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Strategically located at Alagomeji, opposite OAK Place along Murtala Muhammed Way, Yaba — Paradise Event Centre is a versatile, state-of-the-art venue designed for the most discerning hosts.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              From intimate gatherings to grand events of 2,000 guests, our hall partitions seamlessly to accommodate two events simultaneously, with dedicated stages, lighting and support for each.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Crystal chandeliers",
                "Concert sound & truss",
                "1,000-seat banquet",
                "Ample parking",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-foreground">{f}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-emerald font-semibold hover:gap-3 transition-smooth"
            >
              Discover our story <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="What We Host"
            title="A venue for every celebration"
            description="From sacred unions to corporate milestones — our spaces transform to reflect the spirit of your event."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-smooth"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald via-emerald/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <s.icon size={22} className="text-gold mb-3" />
                  <h3 className="font-serif text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/80 line-clamp-2">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-emerald px-8 py-4 text-sm font-semibold text-emerald-foreground hover:bg-foreground transition-smooth"
            >
              View all services <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Why Paradise"
            title="Crafted for the moments that matter"
            description="Every element of our venue is designed to elevate your event — from the chandeliers above to the staff at your side."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-gold hover:shadow-elegant transition-smooth"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-gold grid place-items-center shadow-gold group-hover:scale-110 transition-smooth">
                  <f.icon size={24} className="text-emerald" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-emerald text-emerald-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={drapesImg} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Kind Words"
            title="Loved by our guests"
            description="Hear from couples, executives and families who&apos;ve celebrated with us."
            invert
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-gold transition-smooth"
              >
                <div className="flex gap-1 text-gold mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-emerald-foreground/90 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="font-serif text-lg text-gold">{t.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-emerald-foreground/60 mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-emerald p-12 md:p-20 text-center shadow-elegant">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
                Ready to begin?
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-white">
                Let&apos;s plan your perfect event
              </h2>
              <p className="mt-6 text-white/80 max-w-xl mx-auto">
                Book a private tour of our venue and discover the perfect setting for your special occasion.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold text-emerald shadow-gold hover:scale-105 transition-smooth"
                >
                  Book a Tour
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-smooth"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
