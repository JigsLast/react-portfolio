import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const value = { darkMode, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      <div className={darkMode ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
