import React, { FC } from "react";
import styled from "styled-components";
import { Facebook, Instagram } from "@mui/icons-material";

const Footer: FC = () => {
  return (
    <Wrapper>
      <FooterContainer>
        <span>copyright © yunsu</span>
        <SocialButtonContainer>
          <SocialButton>
            <Facebook />
          </SocialButton>
          <SocialButton>
            <Instagram />
          </SocialButton>
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
const SocialButton = styled.div`
  margin-left: 0.5rem;
`;
