import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { sun, moon, feed } from '../assets/icon/svgs';
import sudal from '../assets/image/sudal.png';

interface Props {
  isDarkMode: boolean;
  handleDarkMode: (val: boolean) => void;
}

const Header = ({ isDarkMode, handleDarkMode }: Props) => {
  return (
    <Wrapper>
      <div className='left'>
        <BlogLogoContainer>
          <img src={sudal} alt='Blog Logo' />
        </BlogLogoContainer>
        <Nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/tech'}>Tech</Link>
          <Link to={'/career'}>Career</Link>
        </Nav>
      </div>
      <div className='right'>
        <OptionContainer>
          <OptionButton onClick={() => handleDarkMode(!isDarkMode)}>
            {isDarkMode
              ? <img src={moon} alt='Active light mode' />
              : <img src={sun} alt='Active dark mode' />
            }
          </OptionButton>
          <OptionButton>
            <img src={feed} className='feed' alt='RSS Feed' />
          </OptionButton>
        </OptionContainer>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;

  .left {
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
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
`;
const OptionContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: ${(p) => `${p.theme.size.navOptionBtn}px`};
  }
`;
const OptionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  width: ${(p) => `${p.theme.size.navOptionBtn}px`};
  height: ${(p) => `${p.theme.size.navOptionBtn}px`};
  cursor: pointer;
`;
