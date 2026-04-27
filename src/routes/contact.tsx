import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import drapesImg from "@/assets/event-drapes.jpg";
import heroImg from "@/assets/hero-hall.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Paradise Event Centre" },
      { name: "description", content: "Book a tour or enquire about hosting your event at Paradise Event Centre, Yaba, Lagos." },
      { property: "og:title", content: "Contact — Paradise Event Centre" },
      { property: "og:description", content: "Get in touch to plan your perfect event in Lagos." },
      { property: "og:image", content: drapesImg },
    ],
  }),
  component: ContactPage,
});

const eventTypes = ["Wedding", "Corporate Event", "Birthday", "Concert", "Graduation", "Anniversary", "Other"];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you! We'll be in touch within 24 hours.");
    }, 800);
  };

  return (
    <>
      <Toaster />
      <PageHero
        eyebrow="Get in Touch"
        title="Let&apos;s plan your perfect event"
        description="Book a private tour or send us your enquiry — we reply within 24 hours."
        image={heroImg}
      />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Visit Us</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold text-foreground">
                We&apos;d love to hear from you
              </h2>
              <div className="gold-divider mt-6" />
            </div>

            {[
              { icon: MapPin, title: "Address", lines: ["261 Murtala Muhammed Way", "Beside Alagomeji Bus Stop", "Yaba, Lagos"] },
              { icon: Phone, title: "Phone", lines: ["+234 800 000 0000", "+234 901 000 0000"] },
              { icon: Mail, title: "Email", lines: ["hello@paradiseeventcentre.com", "bookings@paradiseeventcentre.com"] },
              { icon: Clock, title: "Hours", lines: ["Mon – Sun · By appointment", "Tours available daily"] },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold grid place-items-center shadow-gold shrink-0">
                  <item.icon size={20} className="text-emerald" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{item.title}</h3>
                  {item.lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground">{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 md:p-10 shadow-soft"
          >
            <h3 className="font-serif text-2xl font-semibold text-foreground">Send us a message</h3>
            <p className="mt-2 text-sm text-muted-foreground">Tell us about your event and we&apos;ll get back to you with a tailored quote.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Event Date" name="date" type="date" />
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Event Type
                </label>
                <select
                  name="eventType"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold transition-smooth"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select event type…</option>
                  {eventTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Tell us about your event
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold transition-smooth resize-none"
                  placeholder="Estimated guests, theme, any special requirements…"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 w-full inline-flex items-center justify-center rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-emerald shadow-gold hover:scale-[1.02] transition-smooth disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send Enquiry"}
            </button>
          </form>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="rounded-2xl overflow-hidden shadow-elegant aspect-[16/8]">
            <iframe
              title="Paradise Event Centre location"
              src="https://www.google.com/maps?q=Alagomeji+Bus+Stop+Yaba+Lagos&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold transition-smooth"
      />
    </div>
  );
}
