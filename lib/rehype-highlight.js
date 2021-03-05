// Inspired by https://github.com/j0lv3r4/mdx-prism
'use strict';

const rangeParser = require('parse-numeric-range');
const rehype = require('rehype');
const visit = require('unist-util-visit');
const nodeToString = require('hast-util-to-string');
const unified = require('unified');
const parse = require('rehype-parse');
const refractor = require('refractor');
const highlightLines = require('./add-markers');

module.exports = (options = {}) => {
  return (tree) => {
    visit(tree, 'element', visitor);
  };

  function visitor(node, index, parent) {
    if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
      return;
    }

    // If we don't have a classname, we don't need to do anything
    if (!node.properties.className) {
      return;
    }

    const linesToHighlight = rangeParser(node.properties.highlight);

    const [_, lang] = node.properties.className[0].split('-');
    let result = refractor.highlight(nodeToString(node), lang);

    if (linesToHighlight.length > 0) {
      // // This blocks attempts this fix:
      // // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-remark-prismjs/src/directives.js#L113-L119
      // const PLAIN_TEXT_WITH_LF_TEST = /<span class="token plain-text">[^<]*\n[^<]*<\/span>/g;

      // // AST to HTML
      // let html_ = rehype().stringify({ type: 'root', children: result }).toString();

      // // Fix JSX issue
      // html_ = html_.replace(PLAIN_TEXT_WITH_LF_TEST, (match) => {
      //   return match.replace(/\n/g, '</span>\n<span class="token plain-text">');
      // });

      // // HTML to AST
      // const hast_ = unified().use(parse, { emitParseErrors: true, fragment: true }).parse(html_);

      // Highlight lines
      result = highlightLines(result, linesToHighlight);
    }

    node.children = result;
  }
};
