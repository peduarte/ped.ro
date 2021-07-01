import rehypeHighlightCode from '@lib/rehype-highlight-code';
import rehypeMetaAttribute from '@lib/rehype-meta-attribute';
import { defineDocument, fromLocalContent } from 'contentlayer/source-local';
import readingTime from 'reading-time';
import remarkSlug from 'remark-slug';

export const Post = defineDocument(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  fileType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
    draft: {
      type: 'boolean',
      required: false,
    },
  },
  computedFields: {
    slug: { type: 'string', resolve: (_) => _._raw.flattenedPath },
    readingTime: {
      type: 'json',
      resolve: (_) => readingTime(_.content.code, { wordsPerMinute: 300 }),
    },
  },
}));

export default fromLocalContent({
  contentDirPath: 'posts',
  schema: [Post],
  mdx: {
    remarkPlugins: [remarkSlug],
    rehypePlugins: [rehypeMetaAttribute, rehypeHighlightCode],
  },
});
