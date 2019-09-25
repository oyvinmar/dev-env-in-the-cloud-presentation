import { dark } from '@mdx-deck/themes';

export default {
  ...dark,

  // text: {
  //   heading: {
  //     fontFamily: 'heading',
  //     lineHeight: 'heading',
  //     fontWeight: 'heading',
  //     mb: 1,
  //   },
  // },
  styles: {
    ...dark.styles,

    Slide: {
      fontFamily: 'body',
      fontSize: ['16px', '24px', '32px', '40px', '48px'],
    },

    p: {
      mt: 0,
    },
    pre: {
      mt: 0,
      fontSize: '0.75em',
      color: 'secondary',
    },
  },
};
