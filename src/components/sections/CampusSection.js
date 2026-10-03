import { boardingNotes, campusFacts } from "../../data/siteContent";
import Card from "../ui/Card";
import Reveal from "../animation/Reveal";

export default function CampusSection() {
  return (
    <section className="section alt" id="campus">
      <div className="wrap">
        <Reveal>
          <p className="kicker">Campus life</p>
          <h2 className="section-title">24 acres, three houses, one routine.</h2>
        </Reveal>
        <div className="campus-grid">
          <Reveal>
            <div
              className="campus-main"
              role="img"
              aria-label="Tree-lined school campus"
            >
              <span>Selaqui · Chakrata Road</span>
            </div>
          </Reveal>
          <div className="fact-stack">
            {campusFacts.map((f, i) => (
              <Reveal key={f.v} delay={i * 0.06}>
                <div className="fact">
                  <b>{f.k}</b>
                  <div>{f.v}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="note-list">
          {boardingNotes.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.07}>
              <Card title={n.title}>
                <p>{n.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
