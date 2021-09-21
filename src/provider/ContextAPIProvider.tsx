import React from 'react';

import DarkThemeContext from './ThemeContext';

const ContextAPIProvider: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  const handleDarkMode = (val: boolean) => {
    if (typeof window !== undefined) {
      localStorage.setItem('prefers-darkmode', JSON.stringify(val));
    }
    setIsDarkMode(val);
  };

  return (
    <DarkThemeContext.Provider
      value={{
        isDarkMode,
        handleDarkMode: handleDarkMode,
      }}
    >
      {children}
    </DarkThemeContext.Provider>
  )
};

export default ContextAPIProvider;
