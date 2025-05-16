// src/context/ThemeContext.tsx
import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return !document.documentElement.classList.contains("light");
  });

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("light");
    setIsDarkMode(!html.classList.contains("light"));
  };

  useEffect(() => {
    const html = document.documentElement;
    setIsDarkMode(!html.classList.contains("light"));
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
