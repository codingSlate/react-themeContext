import React, { createContext, useState } from 'react';

const ThemeContext = createContext();
const { Provider, Consumer } = ThemeContext;
// const [theme, setState] = useState()

const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={'light'}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
