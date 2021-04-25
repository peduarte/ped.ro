export type Frontmatter = {
  title: string;
  publishedAt?: string;
  draft?: boolean;
  readingTime?: { text: string; minutes: number; time: number; words: number };
  slug?: any;
};

export type Post = {
  frontmatter?: Frontmatter;
  code?: any;
};
