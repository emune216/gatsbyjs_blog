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
        <Wrapper>
          <Nav />
          <Main>
            <SwitchWrapper>
              <DarkModeSwitch
                darkMode={darkMode}
                onChange={darkModeChange}
              />
            </SwitchWrapper>
            <MainContent>
              {children}
            </MainContent>
          </Main>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
`;
const MainContent = styled.div`
  padding: 20px;
`;
const SwitchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
