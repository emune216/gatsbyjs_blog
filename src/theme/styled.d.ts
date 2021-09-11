import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      nav: string;
      main: string;
      footer: string;
    },

    baseColor: {
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

    transition: {
      default: string;
      fast: string;
      animationDuration: string;
    },
  }
}
