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
  padding: 10rem 0.5rem;
  border: 1px solid black;
`;
const Title = styled.h1``;
const Desc = styled.p``;
