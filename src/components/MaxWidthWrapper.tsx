import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const MaxWidthWrapper: FC<Props> = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MaxWidthWrapper;

const Wrapper = styled.div`
  width: 100%;

  ${(p) => p.theme.media.mobile`
    opacity: 0.2;
  `};
`;
