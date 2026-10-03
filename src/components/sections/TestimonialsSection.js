import { testimonials } from "../../data/siteContent";
import Reveal from "../animation/Reveal";

export default function TestimonialsSection() {
  return (
    <section className="section alt" id="voices">
      <div className="wrap">
        <Reveal>
          <p className="kicker">Parents</p>
          <h2 className="section-title">What families actually write back.</h2>
        </Reveal>
        <div className="quotes">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <blockquote className="quote card">
                <p>“{t.quote}”</p>
                <footer>— {t.name}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
