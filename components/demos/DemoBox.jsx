import { css } from 'stitches.config';

const box = css({
  variants: {
    color: {
      pink: {
        backgroundColor: '$pink',
      },
      turquoise: {
        backgroundColor: '$turq',
      },
    },
    shape: {
      square: {
        borderRadius: 0,
      },
      round: {
        borderRadius: '100%',
      },
    },
    size: {
      small: {
        width: '70px',
        height: '70px',
      },
      large: {
        width: '140px',
        height: '140px',
      },
    },
    isGlowing: {
      true: {
        $$shadowColor: 'transparent',
        boxShadow: '0 0 30px $$shadowColor',
      },
    },
  },

  defaultVariants: {
    color: 'pink',
    shape: 'square',
    size: 'small',
  },

  compoundVariants: [
    {
      color: 'pink',
      isGlowing: true,
      css: {
        $$shadowColor: '$colors$pink',
      },
    },
    {
      color: 'turquoise',
      isGlowing: true,
      css: {
        $$shadowColor: '$colors$turq',
      },
    },
  ],
});

export const DemoBox = (props) => <div className={box(props)} />;
