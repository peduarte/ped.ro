import React from 'react';
import { Flex, Box, Input, Button, Image, Text, Code, AspectRatio } from '@peduarte/wallop-system';

export function CardPlayground(props) {
  const headingRef = React.useRef<HTMLInputElement>(null);
  const [heading, setHeading] = React.useState('Heading');
  const subHeadingRef = React.useRef<HTMLInputElement>(null);
  const [subHeading, setSubHeading] = React.useState('Subheading');
  const titleRef = React.useRef<HTMLInputElement>(null);
  const [title, setTitle] = React.useState('Playground 🎢');
  const domainRef = React.useRef<HTMLInputElement>(null);
  const [domain, setDomain] = React.useState('doma.in');

  const api = 'https://i.microlink.io/';
  const cardUrl = `https://cards.microlink.io/?preset=pedro&heading=${heading}&subHeading=${subHeading}&title=${title}&domain=${domain}`;
  const image = `${api}${encodeURIComponent(cardUrl)}`;

  return (
    <Box
      sx={{
        p: [3, 4],
        bg: 'white',
        borderRadius: 2,
      }}
    >
      <Text as="h3" size={4} weight="medium" sx={{ color: 'black', mb: 4, textAlign: 'center' }}>
        Mini Microlink Card Playground
      </Text>
      <Flex
        as="form"
        sx={{
          flexDirection: 'row',
          width: '100%',
          flexWrap: 'wrap',
          alignItems: 'center',
          mb: 4,
          maxWidth: 400,
          mx: 'auto',
        }}
        onSubmit={(e) => {
          e.preventDefault();
          setHeading(headingRef.current.value);
          setSubHeading(subHeadingRef.current.value);
          setTitle(titleRef.current.value);
          setDomain(domainRef.current.value);
        }}
      >
        <Box as="label" mb={2} sx={{ display: 'block', flex: '1 1 50%', pr: 2 }}>
          <Text size={1} weight="medium" sx={{ color: 'gray' }}>
            Heading
          </Text>
          <Input ref={headingRef} defaultValue={heading} />
        </Box>
        <Box as="label" mb={2} sx={{ display: 'block', flex: '1 1 50%', pl: 2 }}>
          <Text size={1} weight="medium" sx={{ color: 'gray' }}>
            Sub heading
          </Text>
          <Input ref={subHeadingRef} defaultValue={subHeading} />
        </Box>
        <Box as="label" mb={2} sx={{ display: 'block', flex: '1 1 50%', pr: 2 }}>
          <Text size={1} weight="medium" sx={{ color: 'gray' }}>
            Title
          </Text>
          <Input ref={titleRef} defaultValue={title} />
        </Box>
        <Box as="label" mb={2} sx={{ display: 'block', flex: '1 1 50%', pl: 2 }}>
          <Text size={1} weight="medium" sx={{ color: 'gray' }}>
            Domain
          </Text>
          <Input ref={domainRef} defaultValue={domain} />
        </Box>

        <Button variant="blue" mt={3} sx={{ width: '100%' }}>
          Generate
        </Button>
      </Flex>

      <AspectRatio ratio="16:9" sx={{ my: 5, bg: 'yellow' }}>
        <Image
          src={image}
          alt={title}
          sx={{
            maxWidth: '100%',
            verticalAlign: 'middle',
            boxShadow: '5px 3px 10px 10px rgba(0, 0, 0, 0.05)',
          }}
        />
      </AspectRatio>

      <Text sx={{ color: 'black' }}>Here's the generated URL based on the queries above:</Text>

      <Box
        mt={3}
        p={3}
        sx={{
          borderRadius: 2,
          bg: 'gray',
          color: 'white',
          fontFamily: 'mono',
          fontSize: 3,
          lineHeight: 3,
          overflow: 'auto',
        }}
      >
        <pre className="language-jsx">{image}</pre>
      </Box>
    </Box>
  );
}
