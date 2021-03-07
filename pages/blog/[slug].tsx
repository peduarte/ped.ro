import React from 'react';
import NextLink from 'next/link';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { getAllPosts, getPostBySlug } from '@lib/mdx';
import rehypeCode from '@lib/rehype-code';
import reypeHighlight from '@lib/rehype-highlight';
import { parseISO, format } from 'date-fns';
import TitleAndMetaTags from '@components/TitleAndMetaTags';
import { components } from '@components/MdxComponents';
import type { Post } from 'types/post';
import { text } from '@styles/text';
import { box } from '@styles/box';
import { container } from '@styles/container';
import { link } from '@styles/link';
import { badge } from '@styles/badge';
import { divider } from '@styles/divider';

export default function PostPage({ data, source, slug }: Post) {
  const content = hydrate(source, { components });

  const twitterShare = `
	https://twitter.com/intent/tweet?
	text="${data.title}" by @peduarte
	&url=https://ped.ro/blog/${slug}
	`;

  return (
    <div className={box({ bc: '$black', color: '$white' })}>
      <TitleAndMetaTags description={data.title} />

      <div
        className={container({
          css: {
            mx: '$4',
            py: '$4',
            when: {
              bp1: {
                mx: '$5',
                py: '$5',
              },
              bp2: {
                mx: '$6',
              },
            },
          },
        })}
      >
        <div className={box({ mb: '$5', when: { bp1: { mb: '$6' } } })}>
          <NextLink href="/" passHref>
            <a className={link({ variant: 'ghost' })}>
              <span className={text({ size: '2', css: { textTransform: 'uppercase' } })}>
                Back <span className={text({ css: { color: '$gray' } })}>home</span>
              </span>
            </a>
          </NextLink>
        </div>

        <h1 className={text({ size: '5', css: { display: 'flex', alignItems: 'center' } })}>
          {data.title}{' '}
          {data.draft && (
            <span className={badge({ variant: 'white', css: { ml: '$2' } })}>Draft</span>
          )}
        </h1>

        <time
          className={text({
            size: '2',
            css: { mt: '$1', mx: 'auto', fontFamily: '$mono', color: '$gray' },
          })}
        >
          {format(parseISO(data.publishedAt), 'MMMM dd, yyyy')} — {data.readingTime.text}
        </time>

        <div className={box({ my: '$5' })}>{content}</div>

        <hr className={divider({ size: '1', css: { my: '$5', mb: '$5' } })} />

        <div className={box({ mb: '$5' })}>
          <p className={text({ size: '4' })}>
            Share this post on{' '}
            <a
              className={link()}
              href={twitterShare}
              target="_blank"
              title="Share this post on Twitter"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((file) => ({
      params: { slug: file.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { data, content, slug } = getPostBySlug(context.params.slug);

  const mdxContent = await renderToString(content, {
    components,
    mdxOptions: {
      rehypePlugins: [reypeHighlight, rehypeCode],
    },
  });

  return { props: { data, source: mdxContent, slug } };
}
