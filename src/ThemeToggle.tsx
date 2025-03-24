import { FiMoon, FiSun } from "react-icons/fi";

import { useTheme } from "./ThemeContext";
import styles from "./ThemeToggle.module.css";

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button className={styles.toggleButton} onClick={toggleTheme}>
      {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
      <span>{isDarkMode ? "Светлая тема" : "Темная тема"}</span>
    </button>
  );
};

export default ThemeToggle;
