import React from 'react';
import NextLink from 'next/link';
import TitleAndMetaTags from '@components/TitleAndMetaTags';
import { BlogCard } from '@components/BlogCard';
import { getAllPosts } from '@lib/mdx';
import type { Post } from 'types/post';
import { text } from '@styles/text';
import { box } from '@styles/box';
import { container } from '@styles/container';
import { link } from '@styles/link';

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <div>
      <TitleAndMetaTags description="Blog articles about design systems, jamstack and design–dev collaboration." />

      <div
        className={container({
          css: {
            mx: '$4',
            py: '$4',
            when: {
              '@bp1': {
                mx: '$5',
                py: '$5',
              },
              '@bp2': {
                mx: '$6',
              },
            },
          },
        })}
      >
        <div
          className={box({
            mb: '$5',
            when: {
              '@bp1': {
                mb: '$6',
              },
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

        {posts.map((post) => (
          <BlogCard key={post.data.title} slug={post.slug} data={post.data} />
        ))}
      </div>
    </div>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();

  return { props: { posts } };
}
