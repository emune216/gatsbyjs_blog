import React from "react";

import ContextAPIProvider from "./src/provider/ContextAPIProvider";
import StyledThemeProvider from "./src/style/StyledThemeProvider";
import { GlobalStyle } from "./src/theme/global-style";

export const wrapRootElement = ({ element }) => (
  <ContextAPIProvider>
    <StyledThemeProvider>
      <GlobalStyle />
      {element}
    </StyledThemeProvider>
  </ContextAPIProvider>
);
