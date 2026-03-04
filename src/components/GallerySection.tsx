import thumbAutomation from "@/assets/thumb-automation.png";
import thumbSecurity from "@/assets/thumb-security.png";
import thumbEmail from "@/assets/Thumb-replace1.jpeg";
import thumbHealth from "@/assets/Thumb-replace2.jpeg";

interface ThumbItem {
  src: string;
  niche: string;
  ctr: string;
  hook: string;
}

const thumbnails: ThumbItem[] = [
  { src: thumbAutomation, niche: "Tech", ctr: "8.2%", hook: "Curiosity + color coding" },
  { src: thumbHealth, niche: "SuperHero", ctr: "5.9%", hook: "Action + peak performance" },
  { src: thumbEmail, niche: "Entertainment", ctr: "7.1%", hook: "Power + cinematic impact" },
  { src: thumbSecurity, niche: "Tech", ctr: "6.8%", hook: "Fear + duality contrast" },
];

const GallerySection = () => {
  return (
    <section className="container mx-auto px-6 py-28 md:py-36">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Thumbnail Gallery
      </h2>
      <p className="mt-3 text-muted-foreground text-lg max-w-lg">
        A selection of thumbnails across niches, all designed for performance.
      </p>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {thumbnails.map((t, i) => (
          <div key={i} className="group relative overflow-hidden rounded-lg border border-border">
            <img
              src={t.src}
              alt={`${t.niche} thumbnail`}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-colors duration-300 flex items-end p-5">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">{t.niche}</span>
                <p className="text-primary-foreground font-bold text-lg mt-1">CTR: {t.ctr}</p>
                <p className="text-primary-foreground/70 text-sm">{t.hook}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
