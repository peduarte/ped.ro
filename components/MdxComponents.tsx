import NextLink from 'next/link';
import NextImage from 'next/image';
import { text } from '@styles/text';
import { box } from '@styles/box';
import { link } from '@styles/link';
import { CardPlayground } from '@components/CardPlayground';
import { divider } from '@styles/divider';
import { code } from '@styles/code';

export const components = {
  CardPlayground,
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
  inlineCode: (props) => <code className={code()} {...props} />,
  ul: (props) => <ul className={box({ mb: '$4' })} {...props} />,
  ol: (props) => <ol className={box({ mb: '$4' })} {...props} />,
  li: (props) => <li className={text({ size: '4' })} {...props} />,
  strong: (props) => <strong className={text({ weight: 'bold' })} {...props} />,
  Image: ({ children, ...props }) => (
    <figure className={box({ my: '$5', mx: '-$3', when: { bp1: { mx: '-$5' } } })}>
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
    <div className={box({ my: '$5', mx: '-$3', when: { bp1: { mx: '-$5' } } })}>
      <NextImage {...(props as any)} />
    </div>
  ),
  video: (props) => (
    <div
      className={box({
        my: '$4',
        mx: '-$3',
        border: '1px solid $gray',
        borderRadius: 1,
        overflow: 'hidden',
        when: {
          bp1: { mx: '-$5' },
        },
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
  code: ({ className, children }) => {
    return <code className={className} children={children} />;
  },
  pre: (props) => {
    return (
      <div
        className={box({
          mx: '-$4',
          mt: '$3',
          mb: '$5',

          '[data-preview] + &': {
            marginTop: '$1',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },

          when: {
            bp1: {
              mx: 0,
              borderRadius: '$2',
              overflow: 'hidden',
            },
          },
        })}
      >
        <pre {...props} />
      </div>
    );
  },
};
