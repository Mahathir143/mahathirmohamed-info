import "./SectionLabel.css";

export default function SectionLabel({ code, title }) {
  return (
    <div className="section-label">
      <span className="section-label__code font-mono">{code}</span>
      <span className="section-label__rule" />
      <h2 className="section-label__title font-display">{title}</h2>
    </div>
  );
}
