import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero";
import weddingImg from "@/assets/event-wedding.jpg";
import corporateImg from "@/assets/event-corporate.jpg";
import birthdayImg from "@/assets/event-birthday.jpg";
import concertImg from "@/assets/event-concert.jpg";
import graduationImg from "@/assets/event-graduation.jpg";
import anniversaryImg from "@/assets/event-anniversary.jpg";

export default function ServicesPage() {
  const services = [
  { title: "Weddings", img: weddingImg, desc: "From intimate ceremonies to grand receptions, we create the perfect setting for your special day with elegant decorations and professional coordination." },
  { title: "Corporate Events", img: corporateImg, desc: "Conference rooms and meeting spaces equipped with modern technology for seminars, conferences, AGMs and corporate gatherings." },
  { title: "Birthday Parties", img: birthdayImg, desc: "Celebrate life&apos;s milestones in style with our customisable party packages and themed decorations for all ages." },
  { title: "Graduation Parties", img: graduationImg, desc: "Honour academic achievements with our special graduation celebration packages and elegant venue setup." },
  { title: "Concerts & Shows", img: concertImg, desc: "Professional stage setup with state-of-the-art sound and lighting systems for musical performances and entertainment shows." },
  { title: "Anniversary Celebrations", img: anniversaryImg, desc: "Celebrate years of love and commitment with our romantic anniversary packages and intimate venue settings." },
];

  return (
    <>
      <PageHero
        eyebrow="What We Host"
        title="A venue for every celebration"
        description="Comprehensive event solutions tailored to your vision."
        image={weddingImg}
      />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16 lg:space-y-24">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full rounded-2xl shadow-elegant aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-gold text-emerald font-serif font-semibold px-6 py-3 rounded-xl shadow-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
                  Service {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold text-foreground">
                  {s.title}
                </h2>
                <div className="gold-divider mt-6" />
                <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-emerald-foreground hover:bg-foreground transition-smooth"
                >
                  Enquire about {s.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
