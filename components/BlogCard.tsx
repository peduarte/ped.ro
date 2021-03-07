import React from 'react';
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';
import type { Post } from 'types/post';
import { text } from '@styles/text';
import { box } from '@styles/box';
import { link } from '@styles/link';
import { badge } from '@styles/badge';

export const BlogCard = ({ data, slug }: Post) => {
  return (
    <div className={box({ mt: '$4' })}>
      <NextLink href={`blog/${slug}`} passHref>
        <a
          className={link({
            variant: 'ghost',
            css: {
              display: 'inline-block',
              lineHeight: '$3',
            },
          })}
          aria-label={`Read ${data.title}`}
        >
          <span className={text({ size: '4', css: { display: 'flex', alignItems: 'center' } })}>
            {data.title}{' '}
            {data.draft && (
              <span className={badge({ variant: 'white', css: { ml: '$2' } })}>Draft</span>
            )}
          </span>

          <time
            className={text({
              size: '2',
              css: {
                fontFamily: '$mono',
                color: '$gray',
              },
            })}
          >
            {format(parseISO(data.publishedAt), 'MMMM "yy')}
          </time>
        </a>
      </NextLink>
    </div>
  );
};
