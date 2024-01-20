import { createContext, useState } from "react";

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(null);

  if (theme == null) {
    setTheme(
      localStorage.getItem("theme") == "dark" ||
        (!localStorage.getItem("theme") &&
          matchMedia("(prefers-color-scheme: dark)").matches)
        ? "dark"
        : "light"
    );
  }

  const toggleTheme = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(() => newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
