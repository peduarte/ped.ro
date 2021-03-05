const rehype = require('rehype');
const unified = require('unified');
const parse = require('rehype-parse');

const Prism = require('prismjs');
const rangeParser = require('parse-numeric-range');
const loadLanguages = require('prismjs/components/');
loadLanguages();
require('./prism-diff-highlight')(Prism);

/**
 *
 * @param {string} code
 * @param {string} prismLanguage
 */
module.exports.highlightCode = function highlightCode(code, prismLanguage) {
  const isDiff = prismLanguage.startsWith('diff-');
  const language = isDiff ? prismLanguage.substr(5) : prismLanguage;
  const grammar = Prism.languages[isDiff ? 'diff' : language];

  if (!grammar) {
    console.warn(`Unrecognised language: ${prismLanguage}`);
    return Prism.util.encode(code);
  }

  let highlighted = Prism.highlight(code, grammar, language);

  return highlighted.replace(/__(.*?)__/g, (_, text) => `<span data-highlight>${text}</span>`);
};

/**
 *
 * @param {string} meta
 */
module.exports.metaToObject = (meta) => {
  if (!meta) return null;
  const metaArray = meta.split(' ');
  const metaObject = metaArray.reduce((acc, curr) => {
    const [key, value] = curr.split(':');
    acc[key] = value || true;
    return acc;
  }, {});
  return metaObject;
};

module.exports.highlightLines = (code, lines) => {
  const codeSplit = code.split('\n');
  const parsedLines = rangeParser(lines);
  const formattedCode = codeSplit.map((code, index) => {
    const isHighlighted = parsedLines.includes(index + 1);
    return `<span data-highlight-line="${isHighlighted}">${code}\n</span>`;
  });

  return formattedCode.join('');
};

module.exports.setProps = (props) => {
  return Object.entries(props).reduce((acc, [key, value]) => {
    if (value) {
      acc += `${key}=${value} `;
    }
    return acc;
  }, '');
};
