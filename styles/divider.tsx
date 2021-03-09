import { css } from 'stitches.config';

export const divider = css({
  boxSizing: 'border-box',
  border: 0,
  margin: 0,
  bc: '$gray',
  height: 1,

  variants: {
    size: {
      1: { maxWidth: '32px' },
      2: { maxWidth: '64px' },
      3: { maxWidth: '128px' },
    },
  },
});
