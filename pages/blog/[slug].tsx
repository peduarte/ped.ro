import React from 'react';
import NextLink from 'next/link';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { getAllPosts, getPostBySlug } from '@lib/mdx';
import remarkCode from '@lib/remark-code';
import { parseISO, format } from 'date-fns';
import { Container, Text, Box, Link, Divider, Badge, Tooltip } from '@peduarte/wallop-system';
import TitleAndMetaTags from '@components/TitleAndMetaTags';
import { FrontMatter } from '../../types';
import { components } from '@components/MdxComponents';

export default function PostPage({
  data,
  source,
  slug,
}: {
  data: FrontMatter;
  source: any;
  slug: string;
}) {
  const content = hydrate(source, { components });

  const twitterShare = `
	https://twitter.com/intent/tweet?
	text="${data.title}" by @peduarte
	&url=https://ped.ro/blog/${slug}
	`;

  return (
    <Box sx={{ bg: 'black', color: 'white' }}>
      <TitleAndMetaTags description={data.title} />

      <Container mx={[4, 5, 6]} py={[4, 5]}>
        <Box mb={[5, 6]}>
          <NextLink href="/" passHref>
            <Link variant="ghost">
              <Text size={2} sx={{ textTransform: 'uppercase' }}>
                Back <Text sx={{ color: 'gray' }}>home</Text>
              </Text>
            </Link>
          </NextLink>
        </Box>

        <Text as="h1" size={5} weight="medium">
          {data.title}{' '}
          {data.draft && (
            <Tooltip label="This article is work in progress" side="top" align="center">
              <Badge variant="white" ml={1} mt="-1px">
                Draft
              </Badge>
            </Tooltip>
          )}
        </Text>

        <Text as="time" mt={1} mx="auto" size={2} sx={{ fontFamily: 'mono', color: 'gray' }}>
          {format(parseISO(data.publishedAt), 'MMMM dd, yyyy')} — {data.readingTime.text}
        </Text>

        <Box my={5}>{content}</Box>

        <Divider mt={6} mb={5} size={3} align="left" />

        <Box mb={5}>
          <Text as="p" size={4}>
            Share this post on{' '}
            <Link
              href={twitterShare}
              target="_blank"
              title="Share this post on Twitter"
              variant="twitter"
            >
              Twitter
            </Link>
          </Text>
        </Box>
      </Container>
    </Box>
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
      remarkPlugins: [remarkCode],
    },
  });

  return { props: { data, source: mdxContent, slug } };
}
