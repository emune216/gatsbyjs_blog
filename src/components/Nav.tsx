import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <Wrapper>
      Nav
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.color.nav};
  width: 100%;
  height: 3rem;

  transition: ${(p) => p.theme.transition.default};
`;
