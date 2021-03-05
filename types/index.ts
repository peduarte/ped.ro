export type FrontMatter = {
  title: string;
  publishedAt: string;
  draft?: boolean;
  readingTime?: { text: string; minutes: number; time: number; words: number };
};
