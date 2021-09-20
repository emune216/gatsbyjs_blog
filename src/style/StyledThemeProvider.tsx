import React from 'react';
import { ThemeProvider } from 'styled-components';

import DarkThemeProvider from '../provider/ThemeContext';
import theme, { light, dark } from '../theme';

const StyledThemeProvider: React.FC = ({ children }) => {
  const { isDarkMode } = React.useContext(DarkThemeProvider);

  theme.color = isDarkMode ? dark : light;

  return (<ThemeProvider theme={theme}>{children}</ThemeProvider>)
};

export default StyledThemeProvider;
