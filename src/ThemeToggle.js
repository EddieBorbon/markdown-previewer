import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Apply the theme on initial load
    applyTheme(isDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    applyTheme(!isDarkMode);
  };

  const applyTheme = (dark) => {
    const root = document.documentElement;
    if (dark) {
      root.style.setProperty("--background-color", "#121212"); // Dark background
      root.style.setProperty("--text-color", "#ffffff"); // Light text
      root.style.setProperty("--editor-background", "#1e1e1e"); // Dark editor background
      root.style.setProperty("--preview-background", "#1e1e1e"); // Dark preview background
      root.style.setProperty("--border-color", "#61dafb"); // Vibrant blue border
    } else {
      root.style.setProperty("--background-color", "#ffffff"); // Light background
      root.style.setProperty("--text-color", "#121212"); // Dark text
      root.style.setProperty("--editor-background", "#f9f9f9"); // Light editor background
      root.style.setProperty("--preview-background", "#f9f9f9"); // Light preview background
      root.style.setProperty("--border-color", "#ccc"); // Light border
    }
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;