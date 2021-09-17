import React from 'react';
import styled from 'styled-components';

import { github_logo, instagram_logo, feed } from '../assets/icon/svgs';
import SocialButton from './parts/SocialButton';

const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer>
        <span>copyright © yunsu</span>
        <SocialButtonContainer>
          <ButtonWrapper>
            <SocialButton icon={github_logo} />
          </ButtonWrapper>
          <ButtonWrapper>
            <SocialButton icon={instagram_logo} />
          </ButtonWrapper>
          <ButtonWrapper>
            <SocialButton icon={feed} />
          </ButtonWrapper>
        </SocialButtonContainer>
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  transition: ${(p) => p.theme.transition.default};
  display: flex;
  justify-content: center;
  width: 100%;
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
`;
const SocialButtonContainer = styled.div`
  display: flex;
`;
const ButtonWrapper = styled.div`
  margin-left: 0.4rem;
`;
