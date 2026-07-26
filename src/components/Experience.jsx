import SectionLabel from "./shared/SectionLabel.jsx";
import Reveal from "./shared/Reveal.jsx";
import { route } from "../data/portfolioData.js";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="route" className="section container">
      <SectionLabel code="§ 03" title="Career Journey" />
      <div className="route">
        <div className="route__line" />
        {route.map((stop, i) => (
          <Reveal key={stop.org} delay={i * 100} className="route__stop">
            <span className="route__dot" />
            <div className="route__tags">
              <span className="route__code font-mono">{stop.code}</span>
              <span
                className={`route__status font-mono ${
                  stop.status === "IN TRANSIT" ? "is-active" : ""
                }`}
              >
                {stop.status}
              </span>
            </div>
            <h3 className="route__title font-display">
              {stop.role} — {stop.org}
            </h3>
            <p className="route__place">{stop.place}</p>
            <p className="route__detail">{stop.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
