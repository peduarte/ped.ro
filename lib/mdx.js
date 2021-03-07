import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

const ROOT_PATH = process.cwd();
export const POSTS_PATH = path.join(ROOT_PATH, 'posts');

// the list of all mdx files inside the `POSTS_PATH` directory
export const postFilePaths = fs.readdirSync(POSTS_PATH);

// the front matter and content of all mdx files based on `postFilePaths`
export const getAllPosts = () => {
  return postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath), 'utf8');
      const { data, content } = matter(source);

      return {
        data: {
          ...data,
          wordCount: content.split(/\s+/g).length,
          readingTime: readingTime(content),
        },
        content,
        slug: filePath.replace('.mdx', ''),
      };
    })
    .sort((a, b) => Number(new Date(b.data.publishedAt)) - Number(new Date(a.data.publishedAt)));
};

export const getPostBySlug = (slug) => {
  const source = fs.readFileSync(path.join(POSTS_PATH, `${slug}.mdx`), 'utf8');
  const { data, content } = matter(source);

  return {
    data: {
      ...data,
      wordCount: content.split(/\s+/g).length,
      readingTime: readingTime(content),
    },
    content,
    slug,
  };
};
