import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const MaxWidthWrapper: FC<Props> = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MaxWidthWrapper;

const Wrapper = styled.div`
  width: 100%;

  ${(p) => p.theme.media.mobile`
  `};
`;
