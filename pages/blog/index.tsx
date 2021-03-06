import React from 'react';
import NextLink from 'next/link';
import { Container, Box, Text, Link } from '@peduarte/wallop-system';
import TitleAndMetaTags from '@components/TitleAndMetaTags';
import { BlogCard } from '@components/BlogCard';
import { getAllPosts } from '@lib/mdx';
import type { Post } from 'types/post';

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <Box>
      <TitleAndMetaTags description="Blog articles about design systems, jamstack and design–dev collaboration." />

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

        <Text as="h1" mx="auto" size={5} mb={5} weight="medium">
          Blog
        </Text>

        {posts.map((post) => (
          <BlogCard key={post.data.title} slug={post.slug} data={post.data} />
        ))}
      </Container>
    </Box>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();

  return { props: { posts } };
}
