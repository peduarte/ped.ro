// Inspired by https://github.com/j0lv3r4/mdx-prism

const rangeParser = require('parse-numeric-range');
const visit = require('unist-util-visit');
const nodeToString = require('hast-util-to-string');
const refractor = require('refractor');
const highlightLine = require('./rehype-highlight-line');
const highlightWord = require('./rehype-highlight-word');

module.exports = (options = {}) => {
  return (tree) => {
    visit(tree, 'element', visitor);
  };

  function visitor(node, index, parentNode) {
    if (parentNode.tagName === 'pre' && node.tagName === 'code') {
      // syntax highlight
      const lang = node.properties.className ? node.properties.className[0].split('-')[1] : 'md';
      let result = refractor.highlight(nodeToString(node), lang);

      // line highlight
      const linesToHighlight = rangeParser(node.properties.line || '0');
      result = highlightLine(result, linesToHighlight);

      // word highlight
      const shouldIgnoreWordHighlight = typeof node.properties.ignoreWordHighlight !== 'undefined';
      result = shouldIgnoreWordHighlight ? result : highlightWord(result);

      node.children = result;
    }
  }
};
