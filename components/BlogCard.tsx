import React from 'react';
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';
import { Link, Text, Box, Badge, Tooltip } from '@peduarte/wallop-system';
import type { Post } from 'types/post';

export const BlogCard = ({ data, slug }: Post) => {
  return (
    <Box mt={4}>
      <NextLink href={`blog/${slug}`} passHref>
        <Link
          aria-label={`Read ${data.title}`}
          variant="ghost"
          sx={{
            display: 'inline-block',
            lineHeight: 3,
          }}
        >
          <Text size={4}>
            {data.title}{' '}
            {data.draft && (
              <Tooltip label="This article is work in progress" side="top" align="center">
                <Badge variant="white" ml={1} mt="-1px">
                  Draft
                </Badge>
              </Tooltip>
            )}
          </Text>
          <Text
            as="time"
            size={2}
            sx={{
              fontFamily: 'mono',
              display: 'block',
              color: 'gray',
            }}
          >
            {format(parseISO(data.publishedAt), 'MMMM "yy')}
          </Text>
        </Link>
      </NextLink>
    </Box>
  );
};
