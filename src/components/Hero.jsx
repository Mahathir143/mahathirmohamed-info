import { Mail, MapPin, Phone, Download,ArrowUpRight } from "lucide-react";
import Reveal from "./shared/Reveal.jsx";
import { useTypewriter } from "../hooks/useTypewriter.js";
import { profile } from "../data/portfolioData.js";
import avatar from "../assets/profile.png";
import "./Hero.css";

export default function Hero() {
  const typedRole = useTypewriter(profile.roles, {
    typingSpeed: 65,
    deletingSpeed: 35,
    pauseTime: 1400,
  });

  return (
    <section id="top" className="hero container">
      <div className="hero__grid">
        <div className="hero__copy">
          {/* <Reveal>
            <div className="hero__manifest font-mono">
              MANIFEST NO. {new Date().getFullYear()}-MM-001 · STATUS: AVAILABLE FOR HIRE
            </div>
          </Reveal> */}

          <Reveal delay={80}>
            <h1 className="hero__name font-display">{profile.name}</h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="hero__role font-display" aria-live="polite">
              {typedRole}
              <span className="hero__cursor" aria-hidden="true" />
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="hero__meta font-mono">
              <span>
                <MapPin size={14} /> {profile.location}
              </span>
              <span>
                <Mail size={14} /> {profile.email}
              </span>
              <span>
                <Phone size={14} /> {profile.phone}
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="hero__meta font-mono">
              <a
                href={profile.resumeUrl}
                download
                className="social-links__btn social-links__btn--primary font-mono"
              >
                <Download size={16} /> Download resume
              </a>
              <a href={`mailto:${profile.email}`} className="social-links__btn social-links__btns font-mono">
            Hire me <ArrowUpRight size={14} />
          </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100} className="hero__portrait-wrap">
          <img
            src={avatar}
            alt={profile.avatarAlt}
            className="hero__portrait"
          />
        </Reveal>
      </div>
    </section>
  );
}
