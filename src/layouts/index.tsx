import React from 'react';
import styled from 'styled-components';

import useDarkMode from '../hooks/useDarkMode';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  const { isDarkMode, handleDarkMode } = useDarkMode();

  return (
    <App>
      <Header
        isDarkMode={isDarkMode}
        handleDarkMode={handleDarkMode}
      />
      <Main>
        <MainContent>
          {children}
        </MainContent>
      </Main>
      <Footer />
    </App>
  );
};

export default Layout;

const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 350px;
  color: ${(p) => p.theme.color.writing};
  background-color: ${(p) => p.theme.color.mainBg};
  transition: ${(p) => `all ${p.theme.transition.default}`};
`;
const Main = styled.div`
  width: 100%;
  max-width: 900px;
`;
const MainContent = styled.div`
  padding: 4rem 2rem;
`;
