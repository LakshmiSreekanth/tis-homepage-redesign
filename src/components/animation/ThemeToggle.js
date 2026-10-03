import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
    >
      {theme === "dark" ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
    </button>
  );
}
