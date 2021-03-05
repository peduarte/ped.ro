/**
 * Code <s>copied</s> inspired from from: https://github.com/rexxars/react-refractor/blob/master/src/addMarkers.js
 */
const lineNumberify = function lineNumberify(ast, lineNum = 1) {
  let lineNumber = lineNum;
  return ast.reduce(
    (result, node) => {
      if (node.type === 'text') {
        if (node.value.indexOf('\n') === -1) {
          node.lineNumber = lineNumber;
          result.nodes.push(node);
          return result;
        }

        const lines = node.value.split('\n');
        for (let i = 0; i < lines.length; i++) {
          result.nodes.push({
            type: 'text',
            value: i === lines.length - 1 ? lines[i] : `${lines[i]}\n`,
            lineNumber: i === 0 ? lineNumber : ++lineNumber,
          });
        }

        result.lineNumber = lineNumber;
        return result;
      }

      if (node.children) {
        node.lineNumber = lineNumber;
        const processed = lineNumberify(node.children, lineNumber);
        node.children = processed.nodes;
        result.lineNumber = processed.lineNumber;
        result.nodes.push(node);
        return result;
      }

      result.nodes.push(node);
      return result;
    },
    { nodes: [], lineNumber: lineNumber }
  );
};

const wrapLines = function wrapLines(ast, linesToHighlight) {
  const allLines = [...Array.from({ length: ast.length })].map((_, i) => i);
  let i = 0;
  const wrapped = allLines.reduce((nodes, marker) => {
    const line = marker;
    const children = [];
    for (; i < ast.length; i++) {
      if (ast[i].lineNumber < line) {
        nodes.push(ast[i]);
        continue;
      }

      if (ast[i].lineNumber === line) {
        children.push(ast[i]);
        continue;
      }

      if (ast[i].lineNumber > line) {
        break;
      }
    }

    nodes.push({
      type: 'element',
      tagName: 'div',
      properties: {
        className: linesToHighlight.includes(line) ? 'line-highlighted' : 'line-faded',
      },
      children: children,
      lineNumber: line,
    });

    return nodes;
  }, []);

  for (; i < ast.length; i++) {
    wrapped.push(ast[i]);
  }

  return wrapped;
};

module.exports = function (ast, lines) {
  const numbered = lineNumberify(ast).nodes;
  const wrapped = wrapLines(numbered, lines);
  return wrapped;
};
