type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = "center", invert = false }: Props) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignment} max-w-2xl gap-4`}>
      {eyebrow && (
        <span className={`text-xs uppercase tracking-[0.3em] font-medium ${invert ? "text-gold" : "text-gold"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-semibold ${invert ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      <div className={`gold-divider ${align === "center" ? "mx-auto" : ""}`} />
      {description && (
        <p className={`text-base md:text-lg leading-relaxed ${invert ? "text-white/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
