import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      Footer
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(p) => p.theme.color.footer};
  transition: ${(p) => p.theme.transition.default};
`;
