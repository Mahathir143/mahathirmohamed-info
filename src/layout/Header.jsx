import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle.jsx";
import SocialLinks from "../components/shared/SocialLinks.jsx";
import { profile } from "../data/portfolioData.js";
import "./Header.css";

const NAV_LINKS = [
  ["#about", "About"],
  ["#skills", "Skills"],
  ["#route", "Experience"],
  ["#work", "Work"],
  ["#contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__row">
        <a href="#top" className="header__brand font-display">
          S. Mahathir Mohamed<span className="header__brand-dot">.</span>
        </a>

        <nav className="header__nav">
          {NAV_LINKS.map(([href, label]) => (
            <a key={href} href={href} className="header__link font-mono">
              {label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          {/* <div className="header__socials">
            <SocialLinks variant="icons" />
          </div> */}
          <ThemeToggle  cta="header__cta"/>
          <a href={`mailto:${profile.email}`} className="header__cta font-mono">
            Hire me <ArrowUpRight size={14} />
          </a>
          <button
            type="button"
            className="header__menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="header__mobile">
          {NAV_LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="font-mono">
              {label}
            </a>
          ))}
          <div className="header__mobile-socials">
            <SocialLinks variant="icons" />
          </div>
          <ThemeToggle  cta=""/>
        </div>
      )}
    </header>
  );
}
