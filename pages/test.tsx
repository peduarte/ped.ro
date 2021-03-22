import React from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import TitleAndMetaTags from '@components/TitleAndMetaTags';
import { BlogCard } from '@components/BlogCard';
import { CodeBlock } from '@components/CodeBlock';
import { box } from '@styles/box';
import { getAllPosts } from '@lib/mdx';
import { text } from '@styles/text';
import { container } from '@styles/container';
import { link } from '@styles/link';

const code1 = `- import { __createStyled__ } from '@stitches/react';
+ import { __createCss__ } from '@stitches/react';`;

const code2 = `const Button = styled("button", {
  backgroundColor: "gainsboro",
  borderRadius: "9999px",
  fontSize: "13px",
});`;

const code3 = `const Button = styled("button", {
  backgroundColor: "gainsboro",
  borderRadius: "9999px",
  fontSize: "13px",
});`;

const code4 = `const Button = styled("button", {
  __$$color__: "$colors$gray800",

  backgroundColor: "__$$color__",
  boxShadow: "0 0 0 1px __$$color__",
});`;

const code5 = `const Button = styled("button", {
  backgroundColor: "gainsboro",
- '@bp1': {}
+ '@bp1': {}
});
`;

export default function Home({ posts }) {
  return (
    <>
      <TitleAndMetaTags title="Test" />

      <div className={box({ bc: '$black', padding: 40 })}>
        <CodeBlock language="diff" value={code1} />
        <CodeBlock language="jsx" value={code2} />
        <CodeBlock language="jsx" value={code3} />
        <CodeBlock language="jsx" value={code4} />
        <CodeBlock language="diff" value={code5} />
      </div>
    </>
  );
}
