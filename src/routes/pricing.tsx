import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero";
import { Check } from "lucide-react";
import banquetImg from "@/assets/event-banquet.jpg";

export default function PricingPage() {
  const packages = [
  {
    name: "500 Capacity Hall",
    tagline: "Intimate gatherings & mid-sized events",
    featured: false,
    features: [
      "500 clear O-back chairs",
      "Tables and stage",
      "2 changing rooms",
      "10 female & 6 male restroom facilities",
      "Parking for 180 cars",
      "Kitchenette and washing area for vendors",
      "Event security guards",
      "8 hours of lighting",
      "24-hour water and power supply",
      "24-hour CCTV surveillance",
    ],
  },
  {
    name: "1,000 Capacity Hall",
    tagline: "Grand weddings, conferences & concerts",
    featured: true,
    features: [
      "1,000 clear O-back chairs",
      "Two sets of stages",
      "Four changing rooms",
      "Expanded restroom facilities",
      "Parking for 180 cars + railway extension",
      "Kitchenette and washing area for vendors",
      "Dedicated event security",
      "8 hours of premium lighting",
      "24-hour water and power supply",
      "24-hour CCTV surveillance",
    ],
  },
];

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent packages for every event"
        description="Choose the space that fits your celebration. We&apos;ll handle the rest."
        image={banquetImg}
      />

      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-3xl p-10 transition-smooth ${
                  p.featured
                    ? "bg-gradient-emerald text-white shadow-elegant lg:scale-105"
                    : "bg-card border border-border shadow-soft hover:shadow-elegant"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-emerald text-xs uppercase tracking-[0.2em] font-bold px-4 py-2 rounded-full shadow-gold">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <h3 className={`font-serif text-3xl font-semibold ${p.featured ? "text-white" : "text-foreground"}`}>
                    {p.name}
                  </h3>
                  <p className={`mt-2 text-sm ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>
                    {p.tagline}
                  </p>
                  <div className={`gold-divider mx-auto mt-6`} />
                  <div className="mt-8">
                    <span className={`text-xs uppercase tracking-[0.3em] ${p.featured ? "text-gold" : "text-gold"}`}>
                      Request a quote
                    </span>
                    <p className={`mt-2 text-sm ${p.featured ? "text-white/80" : "text-muted-foreground"}`}>
                      Tailored to your event date and requirements.
                    </p>
                  </div>
                </div>
                <ul className="mt-10 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 w-5 h-5 rounded-full grid place-items-center shrink-0 ${
                          p.featured ? "bg-gold text-emerald" : "bg-emerald text-emerald-foreground"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className={p.featured ? "text-white/90" : "text-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-10 w-full inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-semibold transition-smooth ${
                    p.featured
                      ? "bg-gradient-gold text-emerald shadow-gold hover:scale-105"
                      : "bg-emerald text-emerald-foreground hover:bg-foreground"
                  }`}
                >
                  Book This Hall
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            All prices are subject to 7.5% tax. A refundable deposit of ₦200,000 is required to secure your booking.
          </p>
        </div>
      </section>
    </>
  );
}
