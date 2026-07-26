import SectionLabel from "./shared/SectionLabel.jsx";
import Reveal from "./shared/Reveal.jsx";
import { summary } from "../data/portfolioData.js";
import "./About.css";

export default function About() {
  return (
   <section id="about" className="section container">
  <SectionLabel code="§ 01" title="Summary" />

  <Reveal>
    <p className="about__text">{summary}</p>
  </Reveal>
</section>
  );
}
