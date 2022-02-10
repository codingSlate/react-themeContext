import React, { createContext, useState } from 'react';

const ThemeContext = createContext();
const { Provider, Consumer } = ThemeContext;

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({ mode: 'light' });

  const toggleTheme = () => {
    setTheme((prevState) => ({
      mode: prevState.mode === 'dark' ? 'light' : 'dark',
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
