import { css } from 'styled-components';
import { theme } from '@peduarte/wallop-system';

export const prismTheme = css`
  code[class*='language-'],
  pre[class*='language-'] {
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    tab-size: 4;
    hyphens: none;

    text-align: left;
    padding: 0;
    margin: 0;
    border-radius: inherit;
    font-family: inherit;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    /* color: slategray; */
  }

  .token.punctuation {
    /* color: #999; */
    color: ${theme.colors.gray};
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    /* color: #905; */
    /* color: ${theme.colors.gray}; */
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    /* color: #690; */
    /* color: ${theme.colors.gray}; */
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    /* color: #9a6e3a; */
    /* color: ${theme.colors.yellow}; */
    /* background: hsla(0, 0%, 100%, 0.5); */
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    /* color: #07a; */
  }

  .token.function,
  .token.class-name {
    /* color: #dd4a68; */
  }

  .token.regex,
  .token.important,
  .token.variable {
    /* color: #e90; */
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

	[data-highlight-line="false"] {
    opacity: 0.4
  }

  /* Line highlighting via https://github.com/j0lv3r4/mdx-prism */
  .mdx-marker {
    /* Reset padding originally set in app.tsx */
    margin-left: -${theme.space[3]};
    margin-right: -${theme.space[3]};
    padding-left: ${theme.space[3]};
    padding-right: ${theme.space[3]};

    background-color: #222;
    box-shadow: inset 2px 0px 0 0px ${theme.colors.blue};

    display: block;

    * {
      background-color: #222;
    }
  }
`;
