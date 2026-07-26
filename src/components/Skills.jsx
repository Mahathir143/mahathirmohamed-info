import { Code2, Server, Database, Layers, Wrench } from "lucide-react";
import SectionLabel from "./shared/SectionLabel.jsx";
import Tag from "./shared/Tag.jsx";
import Reveal from "./shared/Reveal.jsx";
import { skillGroups } from "../data/portfolioData.js";
import "./Skills.css";

const ICONS = { code: Code2, server: Server, database: Database, layers: Layers, wrench: Wrench };

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionLabel code="§ 02" title="Skills" />
      <div className="skills-grid">
        {skillGroups.map((group, i) => {
          const Icon = ICONS[group.icon] || Code2;
          return (
            <Reveal key={group.title} delay={i * 60}>
              <div className="skill-card">
                <div className="skill-card__head">
                  <Icon size={16} className="skill-card__icon" />
                  <h3 className="skill-card__title font-display">{group.title}</h3>
                </div>
                <div className="skill-card__tags">
                  {group.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
