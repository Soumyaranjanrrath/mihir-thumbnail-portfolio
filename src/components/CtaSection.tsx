import { Mail } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="contact" className="bg-foreground">
      <div className="container mx-auto px-6 py-28 md:py-36 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground">
          Let's Increase Your
          <br />
          Click Through Rate.
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/917605978841?text=Hi%20Mihir,%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20thumbnail%20strategy."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-foreground font-semibold rounded-lg border border-border transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:border-accent text-sm"
            >
            Work With Me
          </a>
          <a
            href="https://wa.me/7605978841"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-foreground/20 text-primary-foreground font-semibold rounded-lg transition-colors duration-300 hover:bg-primary-foreground/10 text-sm"
          >
            Book a Call
          </a>
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-foreground/20 text-primary-foreground font-semibold rounded-lg transition-colors duration-300 hover:bg-primary-foreground/10 text-sm"
          >
            View Portfolio
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-primary-foreground/50 text-sm">
          <a
            href="mailto:mihir.designs.15@gmail.com?subject=Thumbnail%20Strategy%20Inquiry"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:mihir.designs.15@gmail.com?subject=Thumbnail%20Strategy%20Inquiry";
            }}
            className="hover:text-primary-foreground transition-colors duration-300 flex items-center gap-1.5"
          >
            <Mail size={14} /> Email
          </a>
          <a href="https://www.instagram.com/rare.uniiverse?igsh=MWw0cjdreTIwa29jYw==" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors duration-300">
            Instagram
          </a>
          <a href="https://wa.me/7605978841" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors duration-300">
            WhatsApp
          </a>
          <a href="https://www.linkedin.com/in/mrutyunjaya-rath-8743b2290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors duration-300">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
