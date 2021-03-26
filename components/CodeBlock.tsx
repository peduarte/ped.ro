// Inspired by https://github.com/rexxars/react-refractor
import React from 'react';
import refractor from 'refractor/core';
import js from 'refractor/lang/javascript';
import jsx from 'refractor/lang/jsx';
import bash from 'refractor/lang/bash';
import css from 'refractor/lang/css';
import diff from 'refractor/lang/diff';
import hastToHtml from 'hast-util-to-html';
import rangeParser from 'parse-numeric-range';
import highlightLine from '@lib/rehype-highlight-line';
import highlightWord from '@lib/rehype-highlight-word';
import { pre } from '@styles/pre';

refractor.register(js);
refractor.register(jsx);
refractor.register(bash);
refractor.register(css);
refractor.register(diff);

type CodeBlockProps = {
  language: 'js' | 'jsx' | 'bash' | 'css' | 'diff';
  value: string;
  line?: string;
  css?: any;
  className?: string;
  showLineNumbers?: boolean;
};

export const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
  (_props, forwardedRef) => {
    const { language, value, line = '0', className = '', css, showLineNumbers, ...props } = _props;
    let result = refractor.highlight(value, language);

    result = highlightLine(result, rangeParser(line));

    result = highlightWord(result);

    // convert to html
    result = hastToHtml(result);

    // TODO reset theme

    const classes = `language-${language} ${className}`;

    return (
      <pre
        ref={forwardedRef}
        className={`${pre({ css })} ${classes}`}
        data-line-numbers={showLineNumbers}
        {...props}
      >
        <code className={classes} dangerouslySetInnerHTML={{ __html: result }} />
      </pre>
    );
  }
);
