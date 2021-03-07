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

  svg: { display: 'inline-block', verticalAlign: 'middle' },

  '&::selection': {
    backgroundColor: 'hsla(52, 100%, 49%, 0.99)',
    color: '$black',
  },

  pre: {
    margin: 0,
  },

  // Prism
  'code[class*="language-"]': {
    $$lineHeight: '$lineHeights$3',
    fontFamily: '$mono',
    bc: 'hsla(206 12% 89.5% / 5%)',
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

  '.token.deleted .callout': {
    // $$color: '$colors$red',
    // color: '$white',
  },

  '.token.inserted:not(.prefix)': {
    color: '$turq',
    display: 'block',
    px: '$4',
    mx: '-20px',
  },

  '.token.inserted.prefix': {
    userSelect: 'none',
  },

  '.token.inserted .callout': {
    // $$color: '$colors$turq',
    // color: '$turq',
  },

  '.callout': {
    $$color: 'hsl(206deg 22% 64% / 10%)',
    $$xOffset: '3px',
    backgroundColor: '$$color',
    borderRadius: '$1',
    display: 'inline-block',
    boxShadow: '$$xOffset 0 0 0 $$color, -$$xOffset 0 0 0 $$color',
  },

  '.line.off': {
    opacity: 0.4,
  },

  '.line.on': {},
});
