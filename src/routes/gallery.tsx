import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import heroImg from "@/assets/hero-hall.jpg";
import weddingImg from "@/assets/event-wedding.jpg";
import corporateImg from "@/assets/event-corporate.jpg";
import birthdayImg from "@/assets/event-birthday.jpg";
import concertImg from "@/assets/event-concert.jpg";
import drapesImg from "@/assets/event-drapes.jpg";
import banquetImg from "@/assets/event-banquet.jpg";
import graduationImg from "@/assets/event-graduation.jpg";
import anniversaryImg from "@/assets/event-anniversary.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Paradise Event Centre" },
      { name: "description", content: "A glimpse inside Paradise Event Centre — weddings, conferences, concerts and celebrations in Lagos." },
      { property: "og:title", content: "Gallery — Paradise Event Centre" },
      { property: "og:description", content: "A visual tour of our hall and the events we&apos;ve hosted." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: heroImg, label: "Grand Hall", span: "lg:col-span-2 lg:row-span-2" },
  { src: weddingImg, label: "Wedding" },
  { src: drapesImg, label: "Draped Ceiling" },
  { src: corporateImg, label: "Conference" },
  { src: birthdayImg, label: "Birthday" },
  { src: banquetImg, label: "Banquet" },
  { src: concertImg, label: "Concert" },
  { src: graduationImg, label: "Graduation" },
  { src: anniversaryImg, label: "Anniversary" },
];

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A glimpse inside Paradise"
        description="Step into our world — every event is a story beautifully told."
        image={banquetImg}
      />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] lg:auto-rows-[260px] gap-4">
            {images.map((img) => (
              <div
                key={img.label}
                className={`group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-smooth ${
                  img.span ?? ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald/80 via-emerald/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute bottom-4 left-4 text-white font-serif text-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-smooth">
                  {img.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
