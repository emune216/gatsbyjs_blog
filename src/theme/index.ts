import media from '../style/media';

export const light = {
  writing: '#000000',
  writingHover: '#16C79A',
  mainBg: '#FFFFFF',
  navIcon: '#56646e',
  navIconHover: '#000000',
};

export const dark = {
  writing: '#FFFFFF',
  writingHover: '#16C79A',
  mainBg: '#0E141B',
  navIcon: '#979B9E',
  navIconHover: '#FFFFFF',
};

const theme = {
  color: light,

  baseColor: {
    black: '#000000',
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

  font: {
    md: ''
  },

  size: {
    sm: '4rem',
    md: '6rem',
    lg: '8rem',
    xl: '10rem',

    smN: 10,
    mdN: 60,
    lgN: 100,
    xlN: 200,

    navOptionBtn: 24, // px
  },

  media,

  transition: {
    default: '.2s ease-in',
    fast: 'all 100ms ease-in-out',
    animationDuration: '350ms',
  },
};

export default theme;
