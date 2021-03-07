import { css } from 'stitches.config';

export const button = css({
  boxSizing: 'border-box',
  appearance: 'none',
  border: 'none',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  bc: '$gray',
  borderRadius: '$1',
  color: '$white',
  fontFamily: '$sans',
  fontSize: '$2',
  fontStyle: 'normal',
  fontWeight: 600,
  height: '$4',
  px: '$3',

  '&:hover': {
    bc: '$black',
  },

  variants: {
    variant: {
      blue: {
        bc: '$blue',
      },
    },
  },
});
