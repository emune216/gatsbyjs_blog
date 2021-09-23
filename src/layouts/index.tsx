import React from 'react';
import styled from 'styled-components';

import useDarkMode from '../hooks/useDarkMode';
import useScroll from '../hooks/useScroll';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  const { isDarkMode, handleDarkMode } = useDarkMode();
  const { scrollY } = useScroll();

  return (
    <App>
      <EmptySpace />
      <StickyContainer className={scrollY > 0 ? 'active-shadow' : ''}>
        <Header
          isDarkMode={isDarkMode}
          handleDarkMode={handleDarkMode}
        />
      </StickyContainer>
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

  .active-shadow {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
`;
const EmptySpace = styled.div`
  height: 10px;
`;
const StickyContainer = styled.div`
  position: sticky;
  width: 100%;
  top: 0;

  transition: ${(p) => p.theme.transition.fast};
`;
const Main = styled.div`
  width: 100%;
  max-width: 900px;
`;
const MainContent = styled.div`
  padding: 4rem 2rem;
`;
