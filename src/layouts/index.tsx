import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Footer from './Footer';
import DarkModeSwitch from '../components/DarkModeSwitch';
import ThemeContext from '../provider/ThemeContext';

const Layout: React.FC = ({ children }) => {
  const { isDarkMode, handleDarkMode } = React.useContext(ThemeContext);

  return (
    <App>
      <Nav />
      <Main>
        <SwitchWrapper>
          <DarkModeSwitch
            isDarkMode={isDarkMode}
            onChange={handleDarkMode}
          />
        </SwitchWrapper>
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
const MainContent = styled.div`
  padding: 1rem;
`;
