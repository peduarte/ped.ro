import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { bundleMDX } from 'mdx-bundler';
import rehypeHighlightCode from '@lib/rehype-highlight-code';
import rehypeMetaAttribute from '@lib/rehype-meta-attribute';
import remarkSlug from 'remark-slug';

import type { Frontmatter } from 'types/post';

const ROOT_PATH = process.cwd();
export const POSTS_PATH = path.join(ROOT_PATH, 'posts');

// the front matter and content of all mdx files based on `docsPaths`
export const getAllFrontmatter = () => {
  const PATH = path.join(POSTS_PATH);
  const paths = glob.sync(`${PATH}/**/*.mdx`);

  return paths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(filePath), 'utf8');
      const { data, content } = matter(source);

      return {
        ...(data as Frontmatter),
        slug: path.basename(filePath).replace('.mdx', ''), // file name without extension
        wordCount: content.split(/\s+/g).length,
        readingTime: readingTime(content),
      } as Frontmatter;
    })
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));
};

export const getMdxBySlug = async (slug) => {
  const source = fs.readFileSync(path.join(POSTS_PATH, `${slug}.mdx`), 'utf8');
  const { frontmatter, code } = await bundleMDX(source, {
    xdmOptions(input, options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkSlug];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeMetaAttribute,
        rehypeHighlightCode,
      ];

      return options;
    },
  });

  return {
    frontmatter: {
      ...(frontmatter as Frontmatter),
      slug,
      wordCount: code.split(/\s+/g).length,
      readingTime: readingTime(code),
    } as Frontmatter,
    code,
  };
};
