import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Nav = () => {
  return (
    <Wrapper>
      yuns blog
      <LinkContainer>
        <Link to={'/'}>Home</Link>
        <Link to={'/tech'}>Tech</Link>
        <Link to={'/career'}>Career</Link>
      </LinkContainer>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  display: flex;
  flex-direction: space-between;
  background-color: ${(p) => p.theme.color.nav};
  width: 100%;
  height: 3rem;

  transition: ${(p) => `all ${p.theme.transition.default}`};
`;
const LinkContainer = styled.div``;
