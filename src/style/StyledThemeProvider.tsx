import React, { FC, useContext } from "react";
import { ThemeProvider } from "styled-components";

import DarkThemeProvider from "../provider/ThemeContext";
import theme, { light, dark } from "../theme";

const StyledThemeProvider: FC = ({ children }) => {
  const { isDarkMode } = useContext(DarkThemeProvider);

  theme.color = isDarkMode ? dark : light;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
