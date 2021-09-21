import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      writing: string;
      writingHover: string;
      mainBg: string;
      navIcon: string;
      navIconHover: string;
    },

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
    },

    font: {
      md: string;
    },

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
    }

    transition: {
      default: string;
      fast: string;
      animationDuration: string;
    },
  }
}
