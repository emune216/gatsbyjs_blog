import React from 'react';

interface ThemeContext {
  isDarkMode: boolean;
  handleDarkMode: (val: boolean) => void;
}

const initialState: ThemeContext = {
  isDarkMode: false,
  handleDarkMode: () => {},
};

const DarkThemeContext = React.createContext<ThemeContext>(initialState);

export default DarkThemeContext;
