import React from 'react';
import NextLink from 'next/link';
import { Container, Box, Text, Link } from '@peduarte/wallop-system';
// import { blogPosts } from '@lib/blogPosts';
// import { FrontMatter } from '../../types';
import TitleAndMetaTags from '@components/TitleAndMetaTags';
import { BlogCard } from '@components/BlogCard';
import { getAllPosts } from '@lib/mdx';

export default function Blog({ posts, ...props }) {
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
          <BlogCard key={post.data.title} slug={post.slug} frontMatter={post.data} />
        ))}
      </Container>
    </Box>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();

  return { props: { posts } };
}
