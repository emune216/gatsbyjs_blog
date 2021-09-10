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
  background-color: ${(p) => p.theme.color};
  height: 10rem;
`;
