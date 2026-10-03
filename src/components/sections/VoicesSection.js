import { personalities } from "../../data/siteContent";
import Reveal from "../animation/Reveal";

export default function VoicesSection() {
  return (
    <section className="section" id="voices-campus">
      <div className="wrap">
        <Reveal>
          <p className="kicker">On campus</p>
          <h2 className="section-title">People the children actually meet.</h2>
          <p className="lede" style={{ marginTop: 12 }}>
            TIS has hosted sportspersons, public figures and artists — not as
            wallpaper for the website, as working visits.
          </p>
        </Reveal>
        <div className="people-grid">
          {personalities.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <article className="person">
                <h3>{p.name}</h3>
                <p>{p.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
