import React from 'react';
import styled from 'styled-components';

import { github_logo, instagram_logo } from '../assets/icon/svgs';
import SocialButton from '../components/SocialButton';

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
        </SocialButtonContainer>
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
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
