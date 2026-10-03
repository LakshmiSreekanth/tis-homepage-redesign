import { sportsList } from "../../data/siteContent";
import Reveal from "../animation/Reveal";

export default function SportsSection() {
  return (
    <section className="section" id="sports">
      <div className="wrap">
        <div className="sports-head">
          <Reveal>
            <p className="kicker">Sports</p>
            <h2 className="section-title">Not a facility. The foundation.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede">
              Archery and shooting get the same dignity as football. Coaches
              work with amateurs who might stay amateurs — and with the few who
              won’t. That mix is the point.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="sport-pills">
            {sportsList.map((s) => (
              <span className="pill" key={s} data-cursor>
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
