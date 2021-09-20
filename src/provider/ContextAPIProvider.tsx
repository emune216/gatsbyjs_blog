import React from 'react';

import DarkThemeContext from './ThemeContext';

const ContextAPIProvider: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  const handleDarkMode = (val: boolean) => {
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
