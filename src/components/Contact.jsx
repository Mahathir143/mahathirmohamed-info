import { Phone } from "lucide-react";
import SectionLabel from "./shared/SectionLabel.jsx";
import Reveal from "./shared/Reveal.jsx";
import SocialLinks from "./shared/SocialLinks.jsx";
import { profile } from "../data/portfolioData.js";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section container">
      <SectionLabel code="§ 06" title="CONTACT" />
      <Reveal>
        <h2 className="contact__heading font-display">
          Have a .NET or Full-Stack project in mind?
        </h2>

        <p className="contact__sub">
          Open to Senior .NET Developer and Full-Stack opportunities.
          I specialize in building scalable applications using .NET 8,
          ASP.NET Core, C#, React.js, SQL Server, PostgreSQL, and
          Microservices. Happy to discuss my experience, projects,
          and how I can contribute to your team.
        </p>

        <div className="contact__actions">
          <SocialLinks variant="full" />

          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="contact__btn contact__btn--ghost font-mono"
          >
            <Phone size={16} /> Call me
          </a>
        </div>
      </Reveal>
    </section>
  );
}