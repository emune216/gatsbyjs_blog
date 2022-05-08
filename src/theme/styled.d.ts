import { CSSProp } from "styled-components";

type BackQuoteArgs = string[];

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      writing: string;
      writingHover: string;
      mainBg: string;
      navIcon: string;
      navIconHover: string;
    };

    baseColor: {
      black: string;
      blue: string;
      softBlue: string;
      deepBlue: string;

      yellow: string;
      deepYellow: string;

      indigo: string;
      softIndigo: string;
      deepIndigo: string;

      gray: string;

      white: string;
    };

    font: {
      md: string;
    };

    size: {
      sm: string;
      md: string;
      lg: string;
      xl: string;

      navOptionBtn: number;

      smN: number;
      mdN: number;
      lgN: number;
      xlN: number;
    };

    media: {
      mobile: (
        literals: TemplateStringsArray,
        ...args: BackQuoteArgs
      ) => CSSProp;
      tablet: (
        literals: TemplateStringsArray,
        ...args: BackQuoteArgs
      ) => CSSProp;
      desktop: (
        literals: TemplateStringsArray,
        ...args: BackQuoteArgs
      ) => CSSProp;
    };

    transition: {
      default: string;
      fast: string;
      animationDuration: string;
    };
  }
}
