import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import "./ThemeToggle.css";

const OPTIONS = [
  { key: "light", icon: Sun, label: "Light" },
  { key: "system", icon: Monitor, label: "System" },
  { key: "dark", icon: Moon, label: "Dark" },
];

export default function ThemeToggle() {
  const { mode, setMode } = useTheme();

  return (
    <div className="theme-toggle" role="radiogroup" aria-label="Theme">
      {OPTIONS.map(({ key, icon: Icon, label }) => (
        <button
          key={key}
          type="button"
          role="radio"
          aria-checked={mode === key}
          aria-label={`${label} theme`}
          className={`theme-toggle__btn ${mode === key ? "is-active" : ""}`}
          onClick={() => setMode(key)}
        >
          <Icon size={14} />
        </button>
      ))}
    </div>
  );
}
