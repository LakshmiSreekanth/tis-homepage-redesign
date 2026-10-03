import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Reveal from "../animation/Reveal";

export default function HeroSection() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="wrap hero-grid">
        <Reveal>
          <Badge>CBSE · Boarding & day · Dehradun</Badge>
          <h1>
            Let’s do it <em>with Tulas.</em>
          </h1>
          <p className="hero-copy">
            TIS is a CBSE boarding and day school in Selaqui — academics that
            go past the textbook, 16+ sports with coaches on campus, and a
            24-acre patch that still feels like a school, not a mall.
          </p>
          <div className="hero-cta">
            <Button href="#admissions">Start admission enquiry</Button>
            <Button href="#campus" variant="ghost">
              Walk the campus
            </Button>
          </div>
          <div className="hero-meta">
            <div>
              <b>IV–IX & XI</b>
              <span>Open for 2026–27</span>
            </div>
            <div>
              <b>24 acres</b>
              <span>Pollution-free campus</span>
            </div>
            <div>
              <b>2012</b>
              <span>Rishabh Educational Trust</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="hero-visual">
            <div className="hero-frame" role="img" aria-label="School campus" />
            <div className="hero-chip">
              <small>Helpline</small>
              <strong style={{ display: "block" }}>+91 98379 83791</strong>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
