import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme, { light, dark } from '../theme';
import { GlobalStyle } from '../theme/global-style';
import Nav from './Nav';
import Footer from './Footer';

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const mode = 'light';
  theme.color = mode !== 'light' ? light : dark;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Main>
          {children}
        </Main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;

const Main = styled.div``
