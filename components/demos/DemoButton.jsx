import { css } from 'stitches.config';

export const demoButton = css({
  appearance: 'none',
  background: 'transparent',
  borderRadius: '$round',
  lineHeight: 1,
  fontSize: '$4',
  padding: '$2 $3',
  color: '$white',

  '&:focus': {
    outline: 'none',
  },

  variants: {
    color: {
      turq: {
        border: '2px solid $turq',
        '&:hover': {
          backgroundColor: '$turq',
          color: '$black',
        },
      },
      orange: {
        border: '2px solid $orange',
        '&:hover': {
          backgroundColor: '$orange',
          color: '$black',
        },
      },
    },
  },

  defaultVariants: {
    color: 'turq',
  },
});

export const DemoButton = ({ css, color }) => (
  <button className={demoButton({ color, css })}>My button</button>
);
