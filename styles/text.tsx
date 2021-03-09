import { css } from 'stitches.config';

export const text = css({
  boxSizing: 'border-box',
  fontFamily: '$sans',
  lineHeight: 'inherit',
  margin: 0,

  variants: {
    size: {
      1: {
        fontSize: '12px',
        lineHeight: '18px',
      },
      2: {
        fontSize: '14px',
        lineHeight: '21px',
      },
      3: {
        fontSize: '16px',
        lineHeight: '24px',
      },
      4: {
        fontSize: '20px',
        lineHeight: '30px',
      },
      5: {
        fontSize: '24px',
        lineHeight: '36px',
      },
      6: {
        fontSize: '32px',
        lineHeight: '48px',
      },
      7: {
        fontSize: '48px',
        lineHeight: '48px',
      },
      8: {
        fontSize: '64px',
        lineHeight: '72px',
      },
      9: {
        fontSize: '72px',
        lineHeight: '96px',
      },
    },
    weight: {
      bold: {
        fontStyle: 'normal',
        fontWeight: '600',
      },
      normal: {
        fontStyle: 'normal',
        fontWeight: '400',
      },
      medium: {
        fontStyle: 'normal',
        fontWeight: '500',
      },
    },
  },

  defaultVariants: {
    size: 2,
    weight: 'medium',
  },
});
