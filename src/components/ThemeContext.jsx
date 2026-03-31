import React, { Children, createContext, useState } from 'react'

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleThemes = () => {
    setDarkMode(prev => !prev);
  }

  const values = { darkMode, setDarkMode, toggleThemes };

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext };