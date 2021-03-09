import { css } from 'stitches.config';

export const button = css({
  boxSizing: 'border-box',
  appearance: 'none',

  border: '1px solid $black',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  margin: 0,
  py: '0',
  px: '$2',
  height: '$4',
  backgroundColor: 'transparent',
  color: '$black',
  fontFamily: '$sans',
  fontSize: '$3',
  lineHeight: 1,

  '&:hover': {
    bc: '$black',
    color: '$white',
  },

  '&:focus': {
    outline: 'none',
    bc: '$black',
    color: '$white',
  },
});
