import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  desc: string;
}

const ArticlePreview = ({ title, desc }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Wrapper>
  );
};

export default ArticlePreview;

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.baseColor.deepBlue};
  padding: 0.5rem;
`;
const Title = styled.h1``;
const Desc = styled.p``;
