import { profile } from "../data/portfolioData.js";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer font-mono">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>Built with React</span>
    </div>
  );
}
