const visit = require('unist-util-visit');
var ReactDOMServer = require('react-dom/server');
const { metaToObject, highlightLines, highlightCode, setProps } = require('./remark-utils');

module.exports = () => {
  return (tree) => {
    visit(tree, 'code', (node) => {
      const meta = metaToObject(node.meta);
      let highlightedCode = node.value;

      if (node.lang) {
        highlightedCode = highlightCode(node.value, node.lang);
      }

      if (meta?.lines && node.lang !== 'diff') {
        highlightedCode = highlightLines(highlightedCode, meta.lines);
      }

      const codeString = ReactDOMServer.renderToString(highlightedCode);

      const props = {
        id: meta?.id,
        className: `language-${node.lang}`,
        collpased: meta?.collapsed,
      };

      node.type = 'html';
      node.value = `<code ${setProps(props)}>${codeString}</code>`;
    });
  };
};
