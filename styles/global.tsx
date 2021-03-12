import { global } from 'stitches.config';

export const globalStyles = global({
  body: {
    backgroundColor: '$black',
    color: '$white',
    fontFamily: '$sans',
    margin: 0,
  },

  ul: {
    paddingLeft: '$4',
  },

  figure: { margin: 0 },
  pre: { margin: 0 },

  svg: { display: 'inline-block', verticalAlign: 'middle' },

  '::selection': {
    backgroundColor: 'hsla(52, 100%, 49%, 0.99)',
    color: '$black',
  },

  // Prism
  'code[class*="language-"]': {
    $$lineHeight: '$lineHeights$3',
    fontFamily: '$mono',
    bc: 'hsla(206 12% 89.5% / 5%)',
    backgroundImage: 'linear-gradient(140deg, hsla(206 12% 89.5% / 5%), hsla(206 12% 89.5% / 1%))',
    color: '$white',
    fontSize: '$2',
    lineHeight: '$$lineHeight',
    whiteSpace: 'pre',
    position: 'relative',
    display: 'block',
    p: '$3',
    margin: 0,
    overflow: 'auto',
  },

  'pre code:before': {
    content: `''`,
  },

  '.token.script': {
    color: '$white',
  },

  '.token.tag, .token.class-name, .token.selector, .token.selector .class, .token.function': {
    color: '$pink',
  },

  '.token.attr-name, .token.keyword, .token.rule, .token.operator, .token.pseudo-class, .token.important': {
    color: '$pink',
  },

  '.token.attr-value, .token.class, .token.string, .token.number, .token.unit, .token.color': {
    color: '$white',
  },

  '.token.punctuation, .token.module, .token.property': {
    color: '$pink',
  },

  '.token.atapply .token:not(.rule):not(.important)': {
    color: 'inherit',
  },

  '.language-shell .token:not(.comment)': {
    color: 'inherit',
  },

  '.language-css .token.function': {
    color: 'inherit',
  },

  '.token.comment': {
    color: '$gray',
  },

  '.token.deleted:not(.prefix)': {
    color: '$red',
    display: 'block',
    px: '$4',
    mx: '-20px',
  },

  '.token.deleted.prefix': {
    userSelect: 'none',
  },

  '.token.deleted .highlight-word': {},

  '.token.inserted:not(.prefix)': {
    color: '$turq',
    display: 'block',
    px: '$4',
    mx: '-20px',
  },

  '.token.inserted.prefix': {
    userSelect: 'none',
  },

  '.token.inserted .highlight-word': {},

  '.highlight-word': {
    $$color: 'hsl(206deg 22% 64% / 10%)',
    $$xOffset: '3px',
    backgroundColor: '$$color',
    borderRadius: '$1',
    display: 'inline-block',
    boxShadow: '$$xOffset 0 0 0 $$color, -$$xOffset 0 0 0 $$color',

    '&.on': {
      $$color: 'hsl(206deg 22% 64% / 30%)' as any,
      transition: 'all 100ms ease',
      cursor: 'pointer',
    },
  },

  '.highlight-line.off': {
    opacity: 0.4,
  },

  '.highlight-line.on': {},
});