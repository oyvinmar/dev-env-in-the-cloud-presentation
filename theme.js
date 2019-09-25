import { dark } from '@mdx-deck/themes';

export default {
  ...dark,
  css: {
    ...dark.css,
    fontSize: '16px',
    textAlign: 'center',
    '@media screen and (min-width:56em)': {
      fontSize: '32px',
    },
    '@media screen and (min-width:64em)': {
      fontSize: '40px',
    },
    '@media screen and (min-width:74em)': {
      fontSize: '48px',
    },
    '@media print': {
      fontSize: '40px',
    },
  },
  a: {
    color: 'white',
    display: 'block',
  },
};
