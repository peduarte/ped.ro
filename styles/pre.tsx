import { css } from 'stitches.config';

export const pre = css({
  $$background: 'hsla(206 12% 89.5% / 5%)',
  $$text: '$colors$white',
  $$syntax1: '$colors$orange',
  $$syntax2: '$colors$turq',
  $$syntax3: '$colors$pink',
  $$syntax4: '$colors$pink',
  $$comment: '$colors$gray',
  $$removed: '$colors$red',
  $$added: '$colors$turq',
  $$lineNumbers: '$colors$gray',
  $$fadedLines: '$colors$gray',
  $$highlightedWordBg: 'hsl(345deg 66% 73% / 30%)',
  // $$highlightedWordBgActive: 'hsl(206deg 22% 64% / 30%)',
  $$highlightedWordBgActive: 'hsl(345deg 66% 73% / 100%)',
  $$highlightedWordText: '$colors$white',
  $$deletedWordBg: '$colors$red',
  $$deletedWordBgActive: 'hsl(206deg 22% 64% / 30%)',
  $$deletedWordText: '$colors$black',
  $$addedWordBg: '$colors$turq',
  $$addedWordBgActive: 'hsl(206deg 22% 64% / 30%)',
  $$addedWordText: '$colors$black',

  boxSizing: 'border-box',
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

  '.token.parameter': {
    color: '$$text',
  },

  '.token.tag, .token.class-name, .token.selector, .token.selector .class, .token.function': {
    color: '$$syntax1',
  },

  '.token.attr-value, .token.class, .token.string, .token.number, .token.unit, .token.color': {
    color: '$$syntax2',
  },

  '.token.attr-name, .token.keyword, .token.rule, .token.operator, .token.pseudo-class, .token.important': {
    color: '$$syntax3',
  },

  '.token.punctuation, .token.module, .token.property': {
    color: '$$syntax4',
  },

  '.token.comment': {
    color: '$$comment',
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
    color: '$$removed',
  },

  '.token.inserted:not(.prefix)': {
    color: '$$added',
  },

  '.token.deleted.prefix, .token.inserted.prefix': {
    userSelect: 'none',
  },

  // Styles for highlighted word
  '.highlight-word': {
    $$bgAndShadow: '$$highlightedWordBg',
    $$xOffset: '1px',
    color: '$$highlightedWordText',
    backgroundColor: '$$bgAndShadow',
    display: 'inline-block',
    boxShadow: '$$xOffset 0 0 0 $$bgAndShadow, -$$xOffset 0 0 0 $$bgAndShadow',
    borderRadius: '$1',

    // reset the color for tokens inside highlighted words
    '.token': {
      color: 'inherit',
    },

    '&.on': {
      $$bgAndShadow: '$$highlightedWordBgActive',
      transition: 'all 100ms ease',
      cursor: 'pointer',
    },
  },

  '.token.deleted .highlight-word': {
    $$bgAndShadow: '$$deletedWordBg',
    color: '$$deletedWordText',

    '&.on': {
      $$bgAndShadow: '$$deletedWordBgActive',
    },
  },

  '.token.inserted .highlight-word': {
    $$bgAndShadow: '$$addedWordBg',
    color: '$$addedWordText',

    '&.on': {
      $$bgAndShadow: '$$addedWordBgActive',
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

// export const pre = css({
//   $$background: 'hsla(206 12% 89.5% / 5%)',
//   $$text: '$colors$white',
//   $$syntax1: '$colors$pink',
//   $$syntax2: '$colors$white',
//   $$syntax3: '$colors$gray',
//   $$syntax4: '$colors$red',
//   $$syntax5: '$colors$turq',
//   $$lineNumbers: '$colors$gray',
//   $$fadedLines: '$colors$gray',
//   $$highlightedWordBg: 'hsl(206deg 22% 64% / 10%)',
//   $$highlightedWordBgActive: 'hsl(206deg 22% 64% / 30%)',
//   $$highlightedWordText: '$colors$white',
//   $$deletedWordBg: '$colors$red',
//   $$deletedWordBgActive: 'hsl(206deg 22% 64% / 30%)',
//   $$deletedWordText: '$colors$black',
//   $$addedWordBg: '$colors$turq',
//   $$addedWordBgActive: 'hsl(206deg 22% 64% / 30%)',
//   $$addedWordText: '$colors$black',

//   boxSizing: 'border-box',
//   padding: '$3',
//   overflow: 'auto',
//   fontFamily: '$mono',
//   fontSize: '$2',
//   lineHeight: '$3',
//   whiteSpace: 'pre',
//   position: 'relative',
//   backgroundColor: '$$background',
//   color: '$$text',

//   '& > code': {
//     display: 'block',
//   },

//   '.token.parameter, .token.script': {
//     color: '$$text',
//   },

//   '.token.tag, .token.class-name, .token.selector, .token.selector .class, .token.function': {
//     color: '$$syntax1',
//   },

//   '.token.attr-name, .token.keyword, .token.rule, .token.operator, .token.pseudo-class, .token.important': {
//     color: '$$syntax1',
//   },

//   '.token.attr-value, .token.class, .token.string, .token.number, .token.unit, .token.color': {
//     color: '$$syntax2',
//   },

//   '.token.punctuation, .token.module, .token.property': {
//     color: '$$syntax1',
//   },

//   '.token.comment': {
//     color: '$$syntax3',
//   },

//   '.token.atapply .token:not(.rule):not(.important)': {
//     color: 'inherit',
//   },

//   '.language-shell .token:not(.comment)': {
//     color: 'inherit',
//   },

//   '.language-css .token.function': {
//     color: 'inherit',
//   },

//   '.token.deleted:not(.prefix), .token.inserted:not(.prefix)': {
//     display: 'block',
//     px: '$4',
//     mx: '-20px',
//   },

//   '.token.deleted:not(.prefix)': {
//     color: '$$syntax4',
//   },

//   '.token.inserted:not(.prefix)': {
//     color: '$$syntax5',
//   },

//   '.token.deleted.prefix, .token.inserted.prefix': {
//     userSelect: 'none',
//   },

//   // Styles for highlighted word
//   '.highlight-word': {
//     $$bgAndShadow: '$$highlightedWordBg',
//     $$xOffset: '1px',
//     color: '$$highlightedWordText',
//     backgroundColor: '$$bgAndShadow',
//     display: 'inline-block',
//     boxShadow: '$$xOffset 0 0 0 $$bgAndShadow, -$$xOffset 0 0 0 $$bgAndShadow',

//     // reset the color for tokens inside highlighted words
//     '.token': {
//       color: 'inherit',
//     },

//     '&.on': {
//       // @ts-ignore
//       $$bgAndShadow: '$$highlightedWordBgActive',
//       // @ts-ignore
//       transition: 'all 100ms ease',
//       // @ts-ignore
//       cursor: 'pointer',
//     },
//   },

//   '.token.deleted .highlight-word': {
//     $$bgAndShadow: '$$deletedWordBg',
//     color: '$$deletedWordText',

//     '&.on': {
//       // @ts-ignore
//       $$bgAndShadow: '$$deletedWordBgActive',
//     },
//   },

//   '.token.inserted .highlight-word': {
//     $$bgAndShadow: '$$addedWordBg',
//     color: '$$addedWordText',

//     '&.on': {
//       // @ts-ignore
//       $$bgAndShadow: '$$addedWordBgActive',
//     },
//   },

//   // Line numbers
//   '&[data-line-numbers=true]': {
//     '.highlight-line': {
//       position: 'relative',
//       paddingLeft: '$4',

//       '&::before': {
//         content: 'attr(data-line)',
//         position: 'absolute',
//         left: -5,
//         top: 0,
//         color: '$$lineNumbers',
//       },
//     },
//   },

//   // Styles for highlighted lines
//   '.highlight-line': {
//     '&, *': {
//       transition: 'color 150ms ease',
//     },
//     '&[data-highlighted=false]': {
//       '&, *': {
//         color: '$$fadedLines',
//       },
//     },
//   },
// });
