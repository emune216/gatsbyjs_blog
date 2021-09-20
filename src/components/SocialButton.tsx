import React from 'react';
import styled from 'styled-components';

interface Props {
  icon: string;
  onClick?: () => void;
}

const SocialButton = ({ icon, onClick }: Props) => {
  return (
    <ButtonWrapper onClick={onClick} >
      <img src={icon} />
    </ButtonWrapper>
  );
};

export default SocialButton;

const ButtonWrapper = styled.div`
  border-radius: 25px;
  cursor: pointer;
`;