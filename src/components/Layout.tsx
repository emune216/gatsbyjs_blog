import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme, { light, dark } from '../theme';
import { GlobalStyle } from '../theme/global-style';

import Nav from './Nav';
import Footer from './Footer';
import DarkModeSwitch from './parts/DarkModeSwitch';

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  theme.color = darkMode ? dark : light;

  const darkModeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Main>
          <SwitchWrapper>
            <DarkModeSwitch
              darkMode={darkMode}
              onChange={darkModeChange}
            />
          </SwitchWrapper>
          {children}
        </Main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  border: 1px solid black;
`;
const SwitchWrapper = styled.div`
  display: flex;
  justify-content: right;
  background-color: inherit;
`;
