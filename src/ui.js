import React from "react";
import { ComponentProvider } from "mdx-go";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const highlightColor = "hsla(0, 80%, 50%, 1)";

const GlobalStyle = createGlobalStyle`
	:root {
		--space: 32px;
		--type: 18px;
		--primary-color: hsla(1, 100%, 100%, 1);
		--secondary-color: hsla(0, 0%, 0%, .99);
		--highlight-color: ${highlightColor};
	}

	@media(min-width: 40em) {
		:root {
			--space: 64px;
			--type: 24px;
		}
	}

	@media(min-width: 52em) {
		:root {
			--space: 128px;
			--type: 32px;
		}
	}

	::selection {
		background: var(--secondary-color);
		color: var(--primary-color);
		opacity: 0;
	}
`;

const show = keyframes`
		0% { opacity: 0 }
		100% { opacity: 1 }
	}
`;

const DELAY = 333;

const Base = styled.div`
  font-family: Oswald;
  font-size: var(--type);
  font-weight: 700;
  line-height: 1.5;
  padding: var(--space);
  background-color: var(--primary-color);
  color: var(--secondary-color);
  animation: ${show} ${DELAY * 4}ms ${DELAY}ms ease both;
`;

const Title = styled.h1`
  font-size: inherit;
  font-weight: inherit;
  text-transform: uppercase;
  line-height: 1;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: inherit;
  font-weight: inherit;
  text-transform: uppercase;
  color: var(--highlight-color);
  margin: 0;
`;

const SectionTitle = styled.h3`
  font-size: inherit;
  font-weight: inherit;
  text-transform: uppercase;
  margin: 0 0 var(--space);

  @media (min-width: 40em) {
    font-size: calc(var(--type) - 10px);
  }
`;

const Text = styled.p`
  font-size: inherit;
  max-width: 800px;
  margin: var(--space) 0 0 var(--space);
`;

const List = styled.ul`
  list-style: none;
  margin: var(--space) 0 0 var(--space);
  padding: 0;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color ${DELAY}ms;

  &:hover {
    color: var(--highlight-color);
  }
`;

const svg = `
	<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<polygon fill="${highlightColor}" points="0 24 16 0 32 24 32 32 16 8.00141567 0 32"></polygon>
	</svg>
`;

const ZigZag = styled.div`
	background: url('data:image/svg+xml;utf-8,${svg}');
	background-size: 16px;
  height: 16px;
	margin: var(--space) 0 var(--space) calc(var(--space) * -1);
  width: calc(var(--space) * 2);

	@media(max-width: 40em) {
		margin-top: calc(var(--space) * 2);
		margin-bottom: calc(var(--space) * 2);
	}
`;

const Pre = styled.pre`
  font-family: "Courier New", monospace;
  font-size: 12px;
  font-weight: 400;
`;

const components = {
  h1: Title,
  h2: Subtitle,
  h3: SectionTitle,
  p: Text,
  ul: List,
  a: Link,
  hr: ZigZag,
  pre: Pre
};

export const Root = ({ children }) => (
  <ComponentProvider components={components}>
    <GlobalStyle />
    <Base>{children}</Base>
  </ComponentProvider>
);

const ga = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-28314827-1', 'auto'); ga('send', 'pageview');
`;

export const GA = () => <script dangerouslySetInnerHTML={{ __html: ga }} />;
