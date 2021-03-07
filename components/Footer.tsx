import React from 'react';
import NextLink from 'next/link';
import { text } from '@styles/text';
import { box } from '@styles/box';
import { container } from '@styles/container';
import { link } from '@styles/link';

export const Footer = () => {
  return (
    <div
      className={box({
        py: '$4',
        bc: '$white',
        color: '$black',
        when: {
          bp1: {
            py: '$5',
          },
        },
      })}
    >
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
        <div
          className={box({
            display: 'flex',
            flexDirection: 'column',
            when: { bp1: { flexDirection: 'row' } },
          })}
        >
          <h3
            className={text({
              size: '2',
              css: {
                mb: '$4',
                textTransform: 'uppercase',
                color: '$gray',
                when: {
                  bp1: {
                    mr: '$4',
                    mb: 0,
                  },
                },
              },
            })}
          >
            PD
          </h3>

          <p
            className={text({
              size: '2',
              css: {
                mb: '$1',
                when: {
                  bp1: {
                    mx: '$4',
                  },
                },
              },
            })}
          >
            <NextLink href="/blog" passHref>
              <a className={link()}>Blog</a>
            </NextLink>
          </p>

          <p
            className={text({
              size: '2',
              css: {
                mb: '$1',
                when: {
                  bp1: {
                    mx: '$4',
                  },
                },
              },
            })}
          >
            <a className={link()} href="/feed.xml">
              RSS
            </a>
          </p>

          <p
            className={text({
              size: '2',
              css: {
                mb: '$1',
                when: {
                  bp1: {
                    mx: '$4',
                  },
                },
              },
            })}
          >
            <a className={link()} href="https://github.com/peduarte" target="_blank" rel="noopener">
              GitHub
            </a>
          </p>

          <p
            className={text({
              size: '2',
              css: {
                mb: '$1',
                when: {
                  bp1: {
                    mx: '$4',
                  },
                },
              },
            })}
          >
            <a
              className={link()}
              href="https://twitter.com/peduarte"
              target="_blank"
              rel="noopener"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
