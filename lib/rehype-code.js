const visit = require('unist-util-visit');
const rehype = require('rehype');
const unified = require('unified');
const parse = require('rehype-parse');

module.exports = () => {
  return (tree) => {
    visit(tree, 'element', visitor);
  };

  function visitor(node, index, parent) {
    if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
      return;
    }

    let html_ = rehype().stringify({ type: 'root', children: node.children }).toString();

    const withCallouts = html_.replace(
      /__(.*?)__/g,
      (_, text) => `<span data-highlight>${text}</span>`
    );

    const hast_ = unified()
      .use(parse, { emitParseErrors: true, fragment: true })
      .parse(withCallouts);

    node.children = hast_.children;
  }
};
