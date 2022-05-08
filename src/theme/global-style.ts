import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    font-family: 'Nanum Gothic';
  }

  a {
    text-decoration: none;
  }

  div {
    box-sizing: border-box;
  }
`;
