// Inspired by https://github.com/j0lv3r4/mdx-prism
'use strict';

const rangeParser = require('parse-numeric-range');
const visit = require('unist-util-visit');
const nodeToString = require('hast-util-to-string');
const refractor = require('refractor');
const highlightLines = require('./rehype-highlight-lines');

module.exports = (options = {}) => {
  return (tree) => {
    visit(tree, 'element', visitor);
  };

  function visitor(node, index, parent) {
    if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
      return;
    }

    if (!node.properties.className) {
      return;
    }

    const [_, lang] = node.properties.className[0].split('-');
    let result = refractor.highlight(nodeToString(node), lang);
    if (node.properties.line) {
      result = highlightLines(result, rangeParser(node.properties.line));
    }

    node.children = result;
  }
};
