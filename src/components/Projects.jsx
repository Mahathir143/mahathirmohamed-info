import { ArrowRight } from "lucide-react";
import SectionLabel from "./shared/SectionLabel.jsx";
import Tag from "./shared/Tag.jsx";
import Reveal from "./shared/Reveal.jsx";
import { projects } from "../data/portfolioData.js";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="work" className="section container">
      <SectionLabel code="§ 04" title="Key Projects" />
      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 80}>
            <article
              className={`project-card ${p.featured ? "is-featured" : ""}`}
            >
              {/* <div className="project-card__head">
                <h3 className="project-card__name font-display">{p.name}</h3>
                {p.featured && (
                  <span className="project-card__badge font-mono">
                    {p.featuredTitle}
                  </span>
                )}
              </div> */}
              <div className="project-card__head">
                <div className="project-card__title">
                  <h3 className="project-card__name font-display">{p.name}</h3>
                </div>

                {p.featured && (
                  <div className="project-card__badges">
                    {p.featuredTitle.split(",").map((item, index) => (
                      <span
                        key={index}
                        className="project-card__badge font-mono"
                      >
                        {item.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <p className="project-card__org">{p.org}</p>
              <p className="project-card__desc">{p.description}</p>
              <ul className="project-card__points">
                {p.points.map((pt) => (
                  <li key={pt}>
                    <ArrowRight size={13} className="project-card__arrow" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="project-card__stack">
                {p.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
