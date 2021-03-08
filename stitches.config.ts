import { createCss } from '@stitches/react';

export const { css, global, getCssString } = createCss({
  theme: {
    colors: {
      black: 'rgba(19, 19, 21, 1)',
      white: 'rgba(255, 255, 255, 1)',
      gray: 'rgba(128, 128, 128, 1)',
      blue: 'rgba(3, 136, 252, 1)',
      red: 'rgba(249, 16, 74, 1)',
      yellow: 'rgba(255, 221, 0, 1)',
      pink: 'rgba(232, 141, 163, 1)',
      turq: 'rgba(0, 245, 196, 1)',
      orange: 'rgba(255, 135, 31, 1)',
    },
    fonts: {
      sans: 'Inter, sans-serif',
      mono: 'Fira Mono, monospace',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '72px',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
      7: '256px',
      8: '512px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
      7: '256px',
      8: '512px',
    },
    lineHeights: {
      1: '18px',
      2: '21px',
      3: '24px',
      4: '30px',
      5: '36px',
      6: '48px',
      7: '72px',
      8: '96px',
      9: '108px',
    },
    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
      round: '9999px',
    },
  },
  conditions: {
    bp1: '@media (min-width: 575px)',
    bp2: '@media (min-width: 750px)',
    bp3: '@media (min-width: 1000px)',
    bp4: '@media (min-width: 1200px)',
  },
  utils: {
    p: (config) => (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (config) => (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
      paddingTop: value,
    }),
    pr: (config) => (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
      paddingRight: value,
    }),
    pb: (config) => (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
      paddingBottom: value,
    }),
    pl: (config) => (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
      paddingLeft: value,
    }),
    px: (config) => (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (config) => (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
      marginTop: value,
    }),
    mr: (config) => (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
      marginRight: value,
    }),
    mb: (config) => (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
      marginBottom: value,
    }),
    ml: (config) => (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
      marginLeft: value,
    }),
    mx: (config) => (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
      marginTop: value,
      marginBottom: value,
    }),
    size: (config) => (value: keyof typeof config.theme['sizes'] | number | (string & {})) => ({
      width: value,
      height: value,
    }),
    bc: (config) => (value: keyof typeof config.theme['colors'] | (string & {})) => ({
      backgroundColor: value,
    }),
  },
});
