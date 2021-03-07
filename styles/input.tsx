import { css } from 'stitches.config';

export const input = css({
  boxSizing: 'border-box',
  appearance: 'none',
  margin: 0,
  py: 0,
  px: '$2',
  backgroundColor: '$white',
  border: '1px solid hsl(240, 10%, 90%)',
  borderRadius: '$1',
  color: '$black',
  fontFamily: '$sans',
  fontSize: '$3',
  height: '$4',
  width: '100%',

  // placeholder: color: "hsl(240, 5%, 85%)",

  variants: {
    variant: {
      ghost: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
    },
    size: {
      large: {
        fontSize: '$4',
        height: '$3',
        px: '$3',
      },
    },
  },
});
