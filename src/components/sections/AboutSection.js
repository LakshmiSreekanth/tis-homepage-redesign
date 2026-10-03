import { schoolStats } from "../../data/siteContent";
import Reveal from "../animation/Reveal";

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="wrap split">
        <Reveal>
          <div className="about-photo" role="img" aria-label="Students on campus" />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="kicker">Since 2012</p>
          <h2 className="section-title">A school that still feels like a school.</h2>
          <p className="lede" style={{ marginTop: 14 }}>
            Tulas International School was set up under the Rishabh Educational
            Trust to give children in the Doon valley a residential option that
            is CBSE-serious without being joyless. Parents come for safety and
            marks. Students stay for the fields, the stage, and teachers who
            remember names.
          </p>
          <p className="lede" style={{ marginTop: 12 }}>
            We keep repeating a simple line from the campus: school isn’t only
            lessons. It’s the next thing waiting to be tried.
          </p>
          <div className="stat-row">
            {schoolStats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>
                  {s.label}
                  <br />
                  {s.hint}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
