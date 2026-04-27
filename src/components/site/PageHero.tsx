type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
};

export function PageHero({ eyebrow, title, description, image }: Props) {
  return (
    <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-up">
        {eyebrow && (
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-serif text-4xl md:text-6xl font-semibold text-white">
          {title}
        </h1>
        <div className="gold-divider mx-auto mt-6" />
        {description && (
          <p className="mt-6 text-lg text-white/85 leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
