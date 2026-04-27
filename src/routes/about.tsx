import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import heroImg from "@/assets/hero-hall.jpg";
import drapesImg from "@/assets/event-drapes.jpg";
import banquetImg from "@/assets/event-banquet.jpg";

export default function AboutPage() {
  const facilities = [
  { title: "Spacious Event Hall", desc: "Accommodates 1,000 guests in banquet style or 2,000 in theatre style. Partitionable into two equal halls of 500 seats each." },
  { title: "Immersive Visuals", desc: "Large display screens for projections on both sides of the hall, perfect for weddings, conferences and concerts." },
  { title: "Lighting & Sound", desc: "Truss lighting, fog machines, dual stages, and concert-grade sound systems delivering a premium experience." },
  { title: "Comfort & Climate", desc: "Powerful cooling systems, large modern restrooms, and dedicated support staff for a seamless experience." },
  { title: "Security & Surveillance", desc: "24/7 CCTV monitoring, on-site security guards and active police presence for total peace of mind." },
  { title: "Additional Amenities", desc: "Changing rooms, kitchenette for vendors, and an extremely large parking area for over 180 cars." },
];

  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Lagos&apos; premier address for elegant events"
        description="Strategically located in the heart of Yaba — built for moments that matter."
        image={drapesImg}
      />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">About Us</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-foreground">
              Crafted for unforgettable moments
            </h2>
            <div className="gold-divider mt-6" />
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Paradise Event Centre is strategically located at Alagomeji Bus Stop, opposite OAK Place along Murtala Muhammed Way, Yaba, Lagos. Our venue is the perfect address for weddings, conferences, concerts, birthdays and every kind of celebration in between.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              We blend timeless elegance with modern facilities — crystal chandeliers, draped ceilings, and a dedicated team committed to ensuring every event we host is flawlessly executed.
            </p>
          </div>
          <img
            src={banquetImg}
            alt="Elegant banquet setup"
            className="w-full rounded-2xl shadow-elegant aspect-[4/5] object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Facilities"
            title="State-of-the-art amenities"
            description="Every detail considered. Every comfort accounted for."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <div key={f.title} className="p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-smooth">
                <div className="font-serif text-5xl text-gold/40">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
