import Reveal from "./shared/Reveal.jsx";
import { stats } from "../data/portfolioData.js";
import "./StatsStrip.css";

export default function StatsStrip() {
  return (
    <div className="container">
      <Reveal delay={260}>
        <div className="stats">
          {stats.map((s) => (
            <div key={s.code} className="stats__cell">
              <div className="stats__code font-mono">{s.code}</div>
              <div className="stats__value font-display">{s.value}</div>
              <div className="stats__label">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
