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
import highlightLine from '@lib/rehype-line';
import highlightCallout from '@lib/rehype-callout';

refractor.register(js);
refractor.register(jsx);
refractor.register(bash);
refractor.register(css);
refractor.register(diff);

type CodeBlockProps = {
  language: 'js' | 'jsx' | 'bash' | 'css' | 'diff';
  className?: string;
  value: string;
  line?: string;
};

export function CodeBlock({ language, value, line }: CodeBlockProps) {
  if (process.env.NODE_ENV !== 'production') {
    if (!refractor.registered(language)) {
      console.warn(
        `No language definitions for "${language}" seems to be registered, did you forget to call \`Refractor.registerLanguage()\`?`
      );
    }
  }

  let result = refractor.highlight(value, language);

  if (line) {
    result = highlightLine(result, rangeParser(line));
  }

  result = highlightCallout(result);

  // convert to html
  // result = rehype().stringify({ type: 'root', children: result }).toString();
  result = hastToHtml(result);

  return (
    <pre className={`language-${language}`}>
      <code className={`language-${language}`} dangerouslySetInnerHTML={{ __html: result }} />
    </pre>
  );
}
