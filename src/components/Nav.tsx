import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <Wrapper>
      yuns blog
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.color.nav};
  transition: ${(p) => p.theme.transition.default};

  width: 100%;
  font-size: 2rem;
`;
