import React, { createContext, useState } from 'react';

const ThemeContext = createContext();
const { Provider, Consumer } = ThemeContext;
// const [theme, setState] = useState()

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    console.log('well');
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
