import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { navLinks } from "../../data/siteContent";
import BrandMark from "../ui/BrandMark";
import Button from "../ui/Button";
import ThemeToggle from "../animation/ThemeToggle";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top">
          <BrandMark />
          <span className="brand-copy">
            <strong>Tulas International</strong>
            <span>School · Dehradun</span>
          </span>
        </a>

        <nav className="desk-nav" aria-label="Primary">
          {navLinks.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <span className="hide-sm">
            <Button href="#admissions">Apply 2026–27</Button>
          </span>
          <button
            type="button"
            className="icon-btn burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiOutlineX size={20} /> : <HiOutlineMenuAlt3 size={20} />}
          </button>
        </div>
      </div>
      {open ? <MobileNav onClose={() => setOpen(false)} /> : null}
    </header>
  );
}
