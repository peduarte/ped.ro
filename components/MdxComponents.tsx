import NextLink from 'next/link';
import NextImage from 'next/image';

import * as Wallop from '@peduarte/wallop-system';
import { CardPlayground } from '@components/CardPlayground';

export const components = {
  ...Wallop,
  CardPlayground,
  h1: (props) => <Wallop.Text size={7} mb={5} weight="medium" {...props} as="h1" />,
  h2: (props) => (
    <Wallop.Text size={5} mt={5} mb={4} mx="auto" weight="medium" {...props} as="h2" />
  ),
  h3: (props) => (
    <Wallop.Text size={3} mt={5} mb={3} mx="auto" weight="medium" {...props} as="h3" />
  ),
  h4: (props) => (
    <Wallop.Text size={3} mt={4} mb={3} mx="auto" weight="medium" {...props} as="h4" />
  ),
  p: (props) => <Wallop.Text mb={4} {...props} size={4} as="p" />,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('/')) {
      return (
        <NextLink href={href} passHref>
          <Wallop.Link {...props} />
        </NextLink>
      );
    }
    return <Wallop.Link href={href} target="_blank" rel="noopener" {...props} />;
  },
  hr: (props) => <Wallop.Divider my={5} size={1} align="left" {...props} />,
  inlineCode: (props) => <Wallop.Code {...props} />,
  ul: (props) => <Wallop.Box mb={4} {...props} as="ul" />,
  ol: (props) => <Wallop.Box mb={4} {...props} as="ol" />,
  li: (props) => (
    <li>
      <Wallop.Text {...props} size={4} />
    </li>
  ),
  strong: (props) => <Wallop.Text {...props} weight="bold" sx={{ ...props.sx }} />,
  Image: ({ children, ...props }) => (
    <Wallop.Box as="figure" mx={[-3, -5]} my={5}>
      <NextImage {...(props as any)} />
      {children && (
        <Wallop.Box as="figcaption">
          <Wallop.Text
            as="figcaption"
            sx={{
              textAlign: 'center',
              fontSize: 1,
              lineHeight: 1,
              fontFamily: 'mono',
              color: 'gray',
            }}
          >
            {children}
          </Wallop.Text>
        </Wallop.Box>
      )}
    </Wallop.Box>
  ),
  img: ({ children, ...props }) => (
    <Wallop.Box as="div" mx={[-3, -5]} my={5}>
      <NextImage {...(props as any)} />
    </Wallop.Box>
  ),
  video: (props) => (
    <Wallop.Box
      mx={[-3, -5]}
      my={4}
      sx={{
        border: `1px solid ${Wallop.theme.colors.gray}`,
        borderRadius: 1,
        overflow: 'hidden',
      }}
    >
      <video
        {...props}
        autoPlay
        playsInline
        muted
        loop
        style={{ width: '100%', display: 'block' }}
      ></video>
    </Wallop.Box>
  ),
  iframe: ({ ...props }) => (
    <Wallop.Box mb={4}>
      <iframe {...props} />
    </Wallop.Box>
  ),
  blockquote: (props) => (
    <Wallop.Box
      my={4}
      pl={4}
      sx={{ fontSize: 0, borderLeft: `2px solid ${Wallop.theme.colors.gray}`, color: 'gray' }}
      {...props}
    />
  ),
  code: ({ className, children, ...props }) => {
    return (
      <Wallop.Box
        mx={[-4, 0]}
        mt={3}
        mb={5}
        p={3}
        sx={{
          borderRadius: [0, 2],
          bg: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          fontFamily: 'mono',
          fontSize: 3,
          lineHeight: 3,
          overflow: 'auto',

          '[data-preview] + &': {
            marginTop: 1,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        }}
      >
        <pre className={className}>
          <code className={className} {...props} dangerouslySetInnerHTML={{ __html: children }} />
        </pre>
      </Wallop.Box>
    );
  },
};
