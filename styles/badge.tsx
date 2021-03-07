import { css } from 'stitches.config';

export const badge = css({
  boxSizing: 'border-box',
  border: 'none',
  borderRadius: '$round',

  fontFamily: '$mono',
  fontSize: '$1',
  lineHeight: 1,
  fontWeight: '500',
  height: '$3',
  px: '$2',
  display: 'inline-flex',
  alignItems: 'center',

  variants: {
    variant: {
      gray: {
        backgroundColor: '$gray',
        color: '$white',
      },
      white: {
        bc: '$white',
        color: '$black',
      },
    },
  },
  defaultVariants: {
    variant: 'gray',
  },
});
