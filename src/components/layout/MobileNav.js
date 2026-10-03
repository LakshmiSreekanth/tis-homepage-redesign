import { navLinks } from "../../data/siteContent";
import Button from "../ui/Button";

export default function MobileNav({ onClose }) {
  return (
    <nav className="mobile-nav" aria-label="Mobile">
      {navLinks.map((item) => (
        <a key={item.id} href={`#${item.id}`} onClick={onClose}>
          {item.label}
        </a>
      ))}
      <Button href="#admissions">Apply for 2026–27</Button>
    </nav>
  );
}
