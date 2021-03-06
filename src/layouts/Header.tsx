import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import {
  WbSunnyRounded,
  NightsStayRounded,
  RssFeedRounded,
  Search,
  MenuRounded,
} from "@mui/icons-material";

import sudal from "../assets/image/sudal.png";

interface Props {
  title: string;
  isDarkMode: boolean;
  handleDarkMode: (val: boolean) => void;
}

const Header: FC<Props> = ({ title, isDarkMode, handleDarkMode }: Props) => {
  return (
    <Wrapper>
      <div className="left">
        <BlogLogoContainer>
          <img src={sudal} alt="Blog Logo" />
        </BlogLogoContainer>
        <Nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/tech"}>Tech</Link>
          <Link to={"/career"}>Career</Link>
        </Nav>
      </div>
      <div className="center">
        <span>{title}</span>
      </div>
      <div className="right">
        <OptionContainer>
          <OptionButton>
            <Search className="header-icon" />
          </OptionButton>
          <OptionButton onClick={() => handleDarkMode(!isDarkMode)}>
            {isDarkMode ? (
              <NightsStayRounded className="header-icon" />
            ) : (
              <WbSunnyRounded className="header-icon" />
            )}
          </OptionButton>
          <OptionButton>
            <RssFeedRounded className="header-icon" />
          </OptionButton>
        </OptionContainer>
        <MobileMenuWrapper>
          <MenuRounded className="header-icon" fontSize="large" />
        </MobileMenuWrapper>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;

  background-color: ${(p) => p.theme.color.mainBg};
  transition: ${(p) => `all ${p.theme.transition.default}`};

  .left {
    display: flex;
    align-items: center;
  }
  .center {
    display: none;
    > span {
      font-size: 1.5rem;
      font-weight: 700;
    }

    ${(p) => p.theme.media.mobile`
      display: inline;
    `};
  }
  .right {
    display: flex;
    align-items: center;
  }
  .header-icon {
    color: ${(p) => p.theme.color.navIcon};
    cursor: pointer;

    &:hover {
      color: ${(p) => p.theme.color.navIconHover};
    }
  }
`;
const BlogLogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 3rem;
  font-size: 2rem;

  img {
    width: inherit;
  }
`;
const Nav = styled.div`
  font-size: 1.5rem;
  font-weight: 700;

  a {
    margin-left: 1rem;
    color: ${(p) => p.theme.color.writing};
  }

  ${(p) => p.theme.media.mobile`
    display: none;
  `};
`;
const OptionContainer = styled.div`
  display: flex;
  align-items: center;

  ${(p) => p.theme.media.mobile`
    display: none;
  `};
`;
const OptionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  width: ${(p) => `${p.theme.size.navOptionBtn}px`};
  height: ${(p) => `${p.theme.size.navOptionBtn}px`};
`;
const MobileMenuWrapper = styled.div`
  display: none;

  ${(p) => p.theme.media.mobile`
    display: inline;
  `};
`;
