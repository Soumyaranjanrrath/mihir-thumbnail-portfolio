import thumbEmail from "@/assets/thumb-email.png";
import thumbHealth from "@/assets/thumb-health.png";
import before_thumbnail from "@/assets/before_thumbnail.png";
import before2_thumbnail from "@/assets/before2_thumbnail.png";
import headshot from "@/assets/headshot.png";

/**
 * Paired grid:
 *  Row 1: [Final A]   [Concept A]
 *  Row 2: [Concept B] [Final B]
 *
 * Mobile order: Final A → Concept A → Concept B → Final B
 */
const pairs: {
  src: string;
  alt: string;
  isConcept: boolean;
}[] = [
    { src: thumbEmail, alt: "Email marketing thumbnail – final", isConcept: false },
    { src: before_thumbnail, alt: "Security thumbnail – concept draft", isConcept: true },
    { src: before2_thumbnail, alt: "Automation thumbnail – concept draft", isConcept: true },
    { src: thumbHealth, alt: "Health thumbnail – final", isConcept: false },
  ];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — unchanged */}
          <div className="max-w-xl">
            {/* Headline */}
            <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-foreground ">
              Thumbnails Engineered for Clicks
            </h1>

            {/* Subheadline */}
            <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Strategic. Data-backed. Designed for higher CTR.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg transition-colors duration-300 hover:opacity-90 text-sm"
              >
                View Case Studies
              </a>
              <a
                href="https://wa.me/7605978841?text=Hi%20Mihir,%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20thumbnail%20strategy."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-semibold rounded-lg transition-colors duration-300 hover:bg-secondary text-sm"
              >
                Work With Me
              </a>
            </div>

            {/* Identity Block */}
            <div className="mt-7 flex items-center gap-4">
              <img
                src={headshot}
                alt="Mihir Rath – YouTube Thumbnail Strategist"
                className="w-[76px] h-[76px] rounded-full object-cover border-2 border-border flex-shrink-0"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.10)" }}
              />
              <div>
                <p className="font-bold text-foreground text-base leading-tight">Mihir Rath</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Thumbnails aren’t just design, they’re psychological strategy. As a YouTuber myself,
                  I understand thumbnail packaging in ways most designers fail to decode.
                </p>
              </div>
            </div>

            {/* Trust line */}
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              Worked with creators in Finance, Education, Documentary, Entertainment.
            </p>
          </div>

          {/* Right — Paired concept-to-final 2×2 grid */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-2 w-full max-w-md">
              {pairs.map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg border border-border"
                  style={{
                    boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
                    /* concept art: very slightly rotated inward for visual rhythm */
                    transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 0.8}deg)`,
                    transition: "transform 0.3s ease",
                    /* concept art: slightly scaled down so finals visually dominate */
                    opacity: item.isConcept ? 0.92 : 1,
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    style={{
                      transform: item.isConcept ? "scale(0.97)" : "scale(1)",
                      transformOrigin: "center",
                    }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
