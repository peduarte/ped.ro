import React from 'react';
import NextLink from 'next/link';
import TitleAndMetaTags from '@components/TitleAndMetaTags';
import { BlogCard } from '@components/BlogCard';
import { getAllFrontmatter } from '@lib/mdx';
import { text } from '@styles/text';
import { box } from '@styles/box';
import { container } from '@styles/container';
import { link } from '@styles/link';

import type { Frontmatter } from 'types/post';

export default function Blog({ posts }: { posts: Frontmatter[] }) {
  return (
    <div>
      <TitleAndMetaTags description="Blog articles about design systems, jamstack and design–dev collaboration." />

      <div
        className={container({
          css: {
            mx: '$4',
            py: '$4',
            '@bp1': {
              mx: '$5',
              py: '$5',
            },
            '@bp2': {
              mx: '$6',
            },
          },
        })}
      >
        <div
          className={box({
            mb: '$5',
            '@bp1': {
              mb: '$6',
            },
          })}
        >
          <NextLink href="/" passHref>
            <a className={link({ variant: 'ghost' })}>
              <span className={text({ size: '2', css: { textTransform: 'uppercase' } })}>
                Back <span className={text({ css: { color: '$gray' } })}>home</span>
              </span>
            </a>
          </NextLink>
        </div>

        <h1 className={text({ size: '5', css: { mb: '$5', mx: 'auto' } })}>Blog</h1>

        {posts.map((frontmatter) => (
          <BlogCard key={frontmatter.title} frontmatter={frontmatter} />
        ))}
      </div>
    </div>
  );
}

export function getStaticProps() {
  const posts = getAllFrontmatter();
  return { props: { posts } };
}
