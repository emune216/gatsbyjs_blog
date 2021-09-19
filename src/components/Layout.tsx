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
        <App>
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
        </App>
      </ThemeProvider>
    </>
  );
};

export default Layout;

const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 350px;
`;
const Main = styled.div`
  width: 100%;
  max-width: 900px;
`;
const SwitchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: inherit;
  width: 100%;
`;
