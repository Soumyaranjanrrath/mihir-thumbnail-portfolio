import headshot from "@/assets/headshot.png";

const IdentityBlock = () => {
  return (
    <section className="container mx-auto px-6 py-12 md:py-16">
      <div className="flex items-center gap-5">
        <img
          src={headshot}
          alt="Thumbnail Strategist"
          className="w-14 h-14 rounded-full object-cover border border-border"
        />
        <div>
          <p className="font-bold text-foreground text-sm">Your Name</p>
          <p className="text-xs text-muted-foreground mt-0.5">Thumbnails aren’t just design, they’re psychological strategy. As a YouTuber myself, I understand thumbnail packaging in ways most designers fail to decode.</p>
        </div>
      </div>
    </section>
  );
};

export default IdentityBlock;
