const visit = require('unist-util-visit');
const rehype = require('rehype');
const unified = require('unified');
const parse = require('rehype-parse');

module.exports = () => {
  return (tree) => {
    visit(tree, 'element', visitor);
  };

  function visitor(node, index, parent) {
    // if () {}
    // console.log('---');
    // console.log('---');
    // // console.log(node);
    // console.log('---');
    // console.log('---');

    const [hasHighlightStart] = node.children
      .map((x) => x.value === 'hs')
      .filter((x) => x !== false);
    const [hasHighlightEnd] = node.children.map((x) => x.value === 'he').filter((x) => x !== false);
    // console.log({ hasHighlightStart });
    // console.log('---');
    // console.log('---');

    if (hasHighlightStart) {
      // console.log(node);
      node.properties.className = ['highlight-start'];
    }
    if (hasHighlightEnd) {
      // console.log(node);
      node.properties.className = ['highlight-end'];
    }

    // if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
    //   return;
    // }
    // console.log(node.children[0].children[0].children[0].children);

    // let html_ = rehype().stringify({ type: 'root', children: node.children }).toString();

    // const withCallouts = html_.replace(
    //   /__(.*?)__/g,
    //   (_, text) => `<span data-highlight>${text}</span>`
    // );

    // const hast_ = unified()
    //   .use(parse, { emitParseErrors: true, fragment: true })
    //   .parse(withCallouts);

    // node.children = hast_.children;
  }
};
