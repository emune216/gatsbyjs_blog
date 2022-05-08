import React, { FC, useRef } from "react";
import styled from "styled-components";
import classnames from "classnames";

import useDarkMode from "../hooks/useDarkMode";
import useScroll from "../hooks/useScroll";
import Header from "./Header";
import Footer from "./Footer";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

const Layout: FC = ({ children }) => {
  const pageTopRef = useRef<HTMLDivElement>(null);
  const { isDarkMode, handleDarkMode } = useDarkMode();
  const { scrollY } = useScroll();

  const blogTitle = "마이 블로그";

  return (
    <App>
      <DescTopPageTop ref={pageTopRef}>
        <span>{blogTitle}</span>
      </DescTopPageTop>
      <EmptySpace />
      <StickyContainer
        className={classnames({
          "active-shadow":
            scrollY > 0 + (pageTopRef.current?.offsetHeight ?? 0),
          "dark-mode": isDarkMode,
        })}
      >
        <Header
          title={blogTitle}
          isDarkMode={isDarkMode}
          handleDarkMode={handleDarkMode}
        />
      </StickyContainer>
      <MaxWidthWrapper>
        <Main>
          <MainContent>{children}</MainContent>
        </Main>
      </MaxWidthWrapper>
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
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }

  .active-shadow.dark-mode {
    box-shadow: rgba(79, 87, 125, 0.2) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
`;
const DescTopPageTop = styled.div`
  padding: 50px 0;
  > span {
    font-size: 2rem;
    font-weight: 700;
  }
  ${(p) => p.theme.media.mobile`
    display: none;
  `};
`;
const EmptySpace = styled.div`
  display: none;
  height: 10px;
  ${(p) => p.theme.media.mobile`
    display: inline;
  `};
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
