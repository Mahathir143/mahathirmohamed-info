import { GraduationCap } from "lucide-react";
import SectionLabel from "./shared/SectionLabel.jsx";
import Reveal from "./shared/Reveal.jsx";
import { education } from "../data/portfolioData.js";
import "./Education.css";

export default function Education() {
  return (
    <section className="section container">
      <SectionLabel code="§ 05" title="Education" />
      <Reveal>
        <div className="education">
          <GraduationCap size={22} className="education__icon" />
          <div>
            <h3 className="education__degree font-display">{education.degree}</h3>
            <p className="education__meta">
              {education.school} · {education.period}
            </p>

            {education.focus && (
              <p className="education__focus">
                {education.focus}
              </p>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
