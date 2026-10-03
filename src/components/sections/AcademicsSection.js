import { programs } from "../../data/siteContent";
import Card from "../ui/Card";
import Reveal from "../animation/Reveal";

export default function AcademicsSection() {
  return (
    <section className="section alt" id="academics">
      <div className="wrap">
        <Reveal>
          <p className="kicker">Academics</p>
          <h2 className="section-title">CBSE as the baseline, not the whole story.</h2>
          <p className="lede" style={{ marginTop: 12 }}>
            Pedagogy on campus is collaborative and inquiry-led. Labs, quizzes,
            plays and written papers sit in the same term — so a child is not
            judged on one exam week.
          </p>
        </Reveal>
        <div className="program-grid">
          {programs.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <Card title={p.title}>
                <p>{p.copy}</p>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
