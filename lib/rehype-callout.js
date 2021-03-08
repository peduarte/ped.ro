const nodeToString = require('hast-util-to-string');
const visit = require('unist-util-visit');
const hastToHtml = require('hast-util-to-html');
const unified = require('unified');
const parse = require('rehype-parse');

const CALLOUT = /__(.*?)__/g;

module.exports = (code) => {
  let html = hastToHtml(code);
  const withCallouts = html.replace(CALLOUT, (_, text) => `<span class="callout">${text}</span>`);
  const hast = unified().use(parse, { emitParseErrors: true, fragment: true }).parse(withCallouts);
  return hast.children;
};
