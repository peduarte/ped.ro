import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { parseISO, format } from 'date-fns';
import { Container, Text, Box, Link, Divider, Badge, Tooltip } from '@peduarte/wallop-system';
import { FrontMatter } from '../types';
import TitleAndMetaTags from '@components/TitleAndMetaTags';

export default (frontMatter: FrontMatter) => {
  return ({ children }) => {
    const router = useRouter();

    const twitterShare = `
		https://twitter.com/intent/tweet?
		text="${frontMatter.title}" by @peduarte
		&url=https://ped.ro${router.route}
		`;

    return (
      <Box sx={{ bg: 'black', color: 'white' }}>
        <TitleAndMetaTags description={frontMatter.title} />

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
            {frontMatter.title}{' '}
            {frontMatter.draft && (
              <Tooltip label="This article is work in progress" side="top" align="center">
                <Badge variant="white" ml={1} mt="-1px">
                  Draft
                </Badge>
              </Tooltip>
            )}
          </Text>

          <Text as="time" mt={1} mx="auto" size={2} sx={{ fontFamily: 'mono', color: 'gray' }}>
            {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')} —{' '}
            {frontMatter.readingTime.text}
          </Text>

          <Box my={5}>{children}</Box>

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
  };
};
