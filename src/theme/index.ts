export const light = {
  nav: '#72cce3',
  main: '#C2E9F6',
  footer: '#96dcee',
};

export const dark = {
  nav: '#5d6baa',
  main: '#808fc7',
  footer: '#a3a5c3',
};

const font = {
  md: '12rem',
}

const size = {
  sm: '4rem',
  md: '6rem',
  lg: '8rem',
  xl: '10rem',

  smN: 10,
  mdN: 60,
  lgN: 100,
  xlN: 200,
}

const theme = {
  color: light,

  baseColor: {
    blue: '#96dcee',
    softBlue: '#C2E9F6',
    deepBlue: '#72cce3',

    yellow: '#fffaa8',
    deepYellow: '#f5eb71',

    indigo: '#6b7abb',
    softIndigo: '#808fc7',
    deepIndigo: '#5d6baa',

    gray: '#e8e8ea',

    white: '#fff',
  },

  font,
  size,

  transition: {
    default: '.2s ease-in',
    fast: 'all 100ms ease-in',
    animationDuration: '350ms',
  },
};

export default theme;
