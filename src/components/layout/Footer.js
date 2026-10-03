import { contact } from "../../data/siteContent";
import BrandMark from "../ui/BrandMark";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <BrandMark size={44} />
          <h3>Tulas International School</h3>
          <p>
            CBSE co-educational boarding and day school in the Himalayan foothills.
            Established 2012 under the Rishabh Educational Trust.
          </p>
        </div>
        <div>
          <h4>Visit</h4>
          <p>{contact.address}</p>
          <p style={{ marginTop: 10 }}>{contact.landline}</p>
        </div>
        <div>
          <h4>Admissions</h4>
          <ul>
            <li>
              <a href={contact.helplineHref}>{contact.helpline}</a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <a href="https://tis.edu.in/" rel="noreferrer" target="_blank">
                tis.edu.in
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>Redesign for assessment · brand copy from the official TIS site</span>
        <span>© {new Date().getFullYear()} Tulas International School</span>
      </div>
    </footer>
  );
}
