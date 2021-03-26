import { css } from 'stitches.config';

export const pre = css({
  $$background: 'hsla(206 12% 89.5% / 5%)',
  $$text: '$colors$white',
  $$syntax1: '$colors$pink',
  $$syntax2: '$colors$white',
  $$syntax3: '$colors$gray',
  $$syntax4: '$colors$red',
  $$syntax5: '$colors$turq',
  $$lineNumbers: '$colors$gray',
  $$fadedLines: '$colors$gray',
  $$highlightedWord1Bg: 'hsl(206deg 22% 64% / 10%)',
  $$highlightedWord1BgActive: 'hsl(206deg 22% 64% / 30%)',
  $$highlightedWord1Text: '$colors$white',
  $$highlightedWord2Bg: '$colors$red',
  $$highlightedWord2BgActive: 'hsl(206deg 22% 64% / 30%)',
  $$highlightedWord2Text: '$colors$black',
  $$highlightedWord3Bg: '$colors$turq',
  $$highlightedWord3BgActive: 'hsl(206deg 22% 64% / 30%)',
  $$highlightedWord3Text: '$colors$black',

  boxSizing: 'border-box',
  borderRadius: '$3',
  padding: '$3',
  overflow: 'auto',
  fontFamily: '$mono',
  fontSize: '$2',
  lineHeight: '$3',
  whiteSpace: 'pre',
  position: 'relative',
  backgroundColor: '$$background',
  color: '$$text',

  '& > code': {
    display: 'block',
  },

  '.token.parameter, .token.script': {
    color: '$$text',
  },

  '.token.tag, .token.class-name, .token.selector, .token.selector .class, .token.function': {
    color: '$$syntax1',
  },

  '.token.attr-name, .token.keyword, .token.rule, .token.operator, .token.pseudo-class, .token.important': {
    color: '$$syntax1',
  },

  '.token.attr-value, .token.class, .token.string, .token.number, .token.unit, .token.color': {
    color: '$$syntax2',
  },

  '.token.punctuation, .token.module, .token.property': {
    color: '$$syntax1',
  },

  '.token.comment': {
    color: '$$syntax3',
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

  '.token.deleted:not(.prefix), .token.inserted:not(.prefix)': {
    display: 'block',
    px: '$4',
    mx: '-20px',
  },

  '.token.deleted:not(.prefix)': {
    color: '$$syntax4',
  },

  '.token.inserted:not(.prefix)': {
    color: '$$syntax5',
  },

  '.token.deleted.prefix, .token.inserted.prefix': {
    userSelect: 'none',
  },

  // Styles for highlighted word
  '.highlight-word': {
    $$bgAndShadow: '$$highlightedWord1Bg',
    $$xOffset: '1px',
    color: '$$highlightedWord1Text',
    backgroundColor: '$$bgAndShadow',
    display: 'inline-block',
    boxShadow: '$$xOffset 0 0 0 $$bgAndShadow, -$$xOffset 0 0 0 $$bgAndShadow',

    // reset the color for tokens inside highlighted words
    '.token': {
      color: 'inherit',
    },

    '&.on': {
      // @ts-ignore
      $$bgAndShadow: '$$highlightedWord1BgActive',
      // @ts-ignore
      transition: 'all 100ms ease',
      // @ts-ignore
      cursor: 'pointer',
    },
  },

  '.token.deleted .highlight-word': {
    $$bgAndShadow: '$$highlightedWord2Bg',
    color: '$$highlightedWord2Text',

    '&.on': {
      // @ts-ignore
      $$bgAndShadow: '$$highlightedWord2BgActive',
    },
  },

  '.token.inserted .highlight-word': {
    $$bgAndShadow: '$$highlightedWord3Bg',
    color: '$$highlightedWord3Text',

    '&.on': {
      // @ts-ignore
      $$bgAndShadow: '$$highlightedWord3BgActive',
    },
  },

  // Line numbers
  '&[data-line-numbers=true]': {
    '.highlight-line': {
      position: 'relative',
      paddingLeft: '$4',

      '&::before': {
        content: 'attr(data-line)',
        position: 'absolute',
        left: -5,
        top: 0,
        color: '$$lineNumbers',
      },
    },
  },

  // Styles for highlighted lines
  '.highlight-line': {
    '&, *': {
      transition: 'color 150ms ease',
    },
    '&[data-highlighted=false]': {
      '&, *': {
        color: '$$fadedLines',
      },
    },
  },
});
