import { useState } from "react";
import { contact } from "../../data/siteContent";
import Button from "../ui/Button";
import Reveal from "../animation/Reveal";

export default function CtaSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="section" id="admissions">
      <div className="wrap">
        <Reveal>
          <div className="cta">
            <div>
              <p className="kicker" style={{ color: "#e0c07a" }}>
                Admissions 2026–27
              </p>
              <h2>Registrations for IV–IX and XI.</h2>
              <p>
                Form + ₹15,000 registration (non-refundable), then interaction
                and seats. Session starts first week of April. Helpline{" "}
                <a href={contact.helplineHref}>{contact.helpline}</a>.
              </p>
            </div>
            {sent ? (
              <div className="form-ok">
                <h3>Received.</h3>
                <p>
                  This demo does not send data to the school. Call the helpline
                  or write to {contact.email} for a real enquiry.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div>
                  <label htmlFor="parent">Parent name</label>
                  <input id="parent" name="parent" required autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" required />
                </div>
                <div>
                  <label htmlFor="grade">Grade applying for</label>
                  <select id="grade" name="grade" defaultValue="VII">
                    {["IV", "V", "VI", "VII", "VIII", "IX", "XI"].map((g) => (
                      <option key={g} value={g}>
                        Class {g}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="note">Anything we should know</label>
                  <textarea id="note" name="note" />
                </div>
                <Button type="submit" variant="light">
                  Request a callback
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
