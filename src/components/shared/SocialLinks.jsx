import { Github, Linkedin, Mail, Download } from "lucide-react";
import { profile, socials } from "../../data/portfolioData.js";
import "./SocialLinks.css";

/**
 * variant="icons"  -> compact icon-only row (used in Header / Hero)
 * variant="full"   -> labelled buttons, includes "Download resume" (used in Contact)
 */
export default function SocialLinks({ variant = "icons" }) {
  const iconLinks = [
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
    { href: socials.github, label: "GitHub", Icon: Github, external: true },
    { href: socials.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
  ];

  if (variant === "full") {
    return (
      <div className="social-links social-links--full">
        {iconLinks.map(({ href, label, Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="social-links__btn font-mono"
          >
            <Icon size={16} /> {label}
          </a>
        ))}
        <a
          href={profile.resumeUrl}
          download
          className="social-links__btn social-links__btn--primary font-mono"
        >
          <Download size={16} /> Download resume
        </a>
      </div>
    );
  }

  return (
    <div className="social-links social-links--icons">
      {iconLinks.map(({ href, label, Icon, external }) => (
        <a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          aria-label={label}
          className="social-links__icon-btn"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}
