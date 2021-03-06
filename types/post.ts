export type Post = {
  data?: {
    title: string;
    publishedAt?: string;
    draft?: boolean;
    readingTime?: { text: string; minutes: number; time: number; words: number };
  };
  source?: any;
  slug?: any;
};
