import React from 'react';
import NextLink from 'next/link';
import NextRouter from 'next/router';
import NextImage from 'next/image';
import rangeParser from 'parse-numeric-range';
import { text } from '@styles/text';
import { box } from '@styles/box';
import { link } from '@styles/link';
import { pre } from '@styles/pre';
import { CardPlayground } from '@components/CardPlayground';
import { Preview } from '@components/Preview';
import { divider } from '@styles/divider';
import { code } from '@styles/code';

export const components = {
  CardPlayground,
  Preview,
  RegisterLink: ({ id, index, href }) => {
    const isExternal = href.startsWith('http');

    React.useEffect(() => {
      const codeBlock = document.getElementById(id);
      if (!codeBlock) return;

      const allHighlightWords = codeBlock.querySelectorAll('.highlight-word');
      const target = allHighlightWords[index - 1];
      if (!target) return;

      const addClass = () => target.classList.add('on');
      const removeClass = () => target.classList.remove('on');
      const addClick = () => (isExternal ? window.location.replace(href) : NextRouter.push(href));

      target.addEventListener('mouseenter', addClass);
      target.addEventListener('mouseleave', removeClass);
      target.addEventListener('click', addClick);

      return () => {
        target.removeEventListener('mouseenter', addClass);
        target.removeEventListener('mouseleave', removeClass);
        target.removeEventListener('click', addClick);
      };
    }, []);

    return null;
  },
  h: ({ id, index, ...props }) => {
    const triggerRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
      const trigger = triggerRef.current;

      const codeBlock = document.getElementById(id);
      if (!codeBlock) return;

      const allHighlightWords = codeBlock.querySelectorAll('.highlight-word');
      const targetIndex = rangeParser(index).map((i) => i - 1);
      // exit if the `index` passed is bigger than the total number of highlighted words
      if (Math.max(...targetIndex) >= allHighlightWords.length) return;

      const addClass = () => targetIndex.forEach((i) => allHighlightWords[i].classList.add('on'));
      const removeClass = () =>
        targetIndex.forEach((i) => allHighlightWords[i].classList.remove('on'));

      trigger.addEventListener('mouseenter', addClass);
      trigger.addEventListener('mouseleave', removeClass);

      return () => {
        trigger.removeEventListener('mouseenter', addClass);
        trigger.removeEventListener('mouseleave', removeClass);
      };
    }, []);

    return <code className={code({ css: { cursor: 'default' } })} ref={triggerRef} {...props} />;
  },
  h1: (props) => <h1 className={text({ size: '7', css: { mb: '$5' } })} {...props} />,
  h2: (props) => (
    <h2 className={text({ size: '5', css: { mt: '$5', mb: '$4', mx: 'auto' } })} {...props} />
  ),
  h3: (props) => (
    <h3 className={text({ size: '3', css: { mt: '$5', mb: '$3', mx: 'auto' } })} {...props} />
  ),
  h4: (props) => (
    <h4 className={text({ size: '3', css: { mt: '$4', mb: '$3', mx: 'auto' } })} {...props} />
  ),
  p: (props) => <p className={text({ size: '4', css: { mb: '$4' } })} {...props} />,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('/')) {
      return (
        <NextLink href={href} passHref>
          <a className={link()} {...props} />
        </NextLink>
      );
    }
    return <a className={link()} href={href} target="_blank" rel="noopener" {...props} />;
  },
  hr: (props) => <hr className={divider({ size: '1', css: { my: '$5' } })} {...props} />,
  ul: (props) => <ul className={box({ mb: '$4' })} {...props} />,
  ol: (props) => <ol className={box({ mb: '$4' })} {...props} />,
  li: (props) => <li className={text({ size: '4' })} {...props} />,
  strong: (props) => (
    <strong
      className={text({ weight: 'bold', css: { fontSize: 'inherit', lineHeight: 'inherit' } })}
      {...props}
    />
  ),
  Image: ({ children, ...props }) => (
    <figure className={box({ my: '$5', mx: '-$3', '@bp1': { mx: '-$5' } })}>
      <NextImage {...(props as any)} />
      {children && (
        <figcaption
          className={box({
            textAlign: 'center',
            fontSize: '$1',
            lineHeight: 1,
            fontFamily: '$mono',
            color: '$gray',
          })}
        >
          {children}
        </figcaption>
      )}
    </figure>
  ),
  img: ({ children, ...props }) => (
    <div className={box({ my: '$5', mx: '-$3', '@bp1': { mx: '-$5' } })}>
      <NextImage {...(props as any)} />
    </div>
  ),
  video: (props) => (
    <div
      className={box({
        my: '$4',
        mx: '-$3',
        border: '1px solid $gray',
        overflow: 'hidden',
        '@bp1': { mx: '-$5' },
      })}
    >
      <video
        {...props}
        autoPlay
        playsInline
        muted
        loop
        className={box({ width: '100%', display: 'block' })}
      ></video>
    </div>
  ),
  iframe: ({ ...props }) => (
    <div className={box({ mb: '$4' })}>
      <iframe {...props} />
    </div>
  ),
  blockquote: (props) => (
    <blockquote
      className={box({
        my: '$4',
        pl: '$4',
        borderLeft: '2px solid $gray',
        color: '$gray',
      })}
      {...props}
    />
  ),
  pre: ({ children }) => <>{children}</>,
  code: ({ className, children, id }) => {
    const isInlineCode = !className;
    if (isInlineCode) {
      return <code className={code()} children={children} />;
    }
    return (
      <div
        className={box({
          mx: '-$4',
          mt: '$3',
          mb: '$5',

          '[data-preview] + &': {
            marginTop: '0',
          },

          '@bp1': {
            mx: 0,
          },
        })}
      >
        <pre className={`${pre()} ${className}`} id={id}>
          <code className={className} children={children} />
        </pre>
      </div>
    );
  },
};
