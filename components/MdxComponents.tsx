import React from 'react';
import NextLink from 'next/link';
import NextRouter from 'next/router';
import NextImage from 'next/image';
import rangeParser from 'parse-numeric-range';
import * as Collapsible from '@radix-ui/react-collapsible';
import { text } from '@styles/text';
import { box } from '@styles/box';
import { link } from '@styles/link';
import { pre } from '@styles/pre';
import { divider } from '@styles/divider';
import { code } from '@styles/code';
import { CardPlayground } from '@components/CardPlayground';
import { Preview } from '@components/Preview';
import { DemoButton } from '@components/demos/DemoButton';
import { DemoDialog } from '@components/demos/DemoDialog';
import { DemoCounter } from '@components/demos/DemoCounter';
import { button } from '@styles/button';

export const components = {
  Box: ({ css, as: Comp = 'div', ...props }: any) => <Comp className={box(css)} {...props} />,
  DemoButton,
  DemoDialog,
  DemoCounter,
  CardPlayground,
  Preview,
  h1: (props) => <h1 className={text({ size: '7', css: { mb: '$5' } })} {...props} />,
  h2: (props) => (
    <h2
      className={text({ size: '5', weight: 'bold', css: { mt: '$5', mb: '$4', mx: 'auto' } })}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className={text({ size: '4', weight: 'bold', css: { mt: '$5', mb: '$3', mx: 'auto' } })}
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className={text({
        size: '3',
        weight: 'bold',
        css: { textTransform: 'uppercase', mt: '$4', mb: '$3', mx: 'auto' },
      })}
      {...props}
    />
  ),
  p: (props) => (
    <p
      className={text({ size: '4', weight: 'normal', css: { mb: '$4', color: '$copy' } })}
      {...props}
    />
  ),
  a: ({ href = '', ...props }) => {
    if (href.startsWith('http')) {
      return <a className={link()} href={href} target="_blank" rel="noopener" {...props} />;
    }

    return (
      <NextLink href={href} passHref>
        <a className={link()} {...props} />
      </NextLink>
    );
  },
  hr: (props) => <hr className={divider({ size: '1', css: { my: '$5' } })} {...props} />,
  ul: (props) => <ul className={box({ mb: '$4' })} {...props} />,
  ol: (props) => <ol className={box({ mb: '$4' })} {...props} />,
  li: (props) => (
    <li
      className={text({ size: '4', css: { color: '$copy', listStyleType: 'circle' } })}
      {...props}
    />
  ),
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
        pl: '$2',
        borderLeft: '2px solid $gray',
        color: '$gray',
        '@bp1': {
          pl: '$4',
        },
      })}
      {...props}
    />
  ),
  pre: ({ children, theme, showLineNumbers }) => {
    return (
      <pre
        className={pre({
          theme,
          showLineNumbers: typeof showLineNumbers === 'string',
          css: {
            mx: '-$4',
            mt: '$3',
            mb: '$5',

            '[data-preview] + &': {
              marginTop: '0',
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            },

            '@bp1': {
              mx: 0,
              borderRadius: '$3',
            },
          },
        })}
      >
        {children}
      </pre>
    );
  },
  code: ({ children, id, collapsible }) => {
    const isCollapsible = typeof collapsible !== 'undefined';
    const [isOpen, setIsOpen] = React.useState(!isCollapsible);
    const isInline = typeof children === 'string';
    const content = <code className={isInline ? code() : ''} children={children} id={id} />;
    return isCollapsible ? (
      <Collapsible.Root defaultOpen={isOpen} onOpenChange={(newOpen) => setIsOpen(newOpen)}>
        <Collapsible.Button
          className={button({
            css: {
              display: 'block',
              ml: 'auto',
              color: '$white',
              borderRadius: '$2',
              fontSize: '$2',
              borderColor: '$gray',
              fontFamily: '$mono',
              '&:hover': { borderColor: '$white' },
            },
          })}
        >
          {isOpen ? 'Hide' : 'Show'} code
        </Collapsible.Button>
        <Collapsible.Content>{content}</Collapsible.Content>
      </Collapsible.Root>
    ) : (
      content
    );
  },
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
      const addClick = () => (isExternal ? window.location.assign(href) : NextRouter.push(href));

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
  H: ({ id, index, ...props }) => {
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
};
