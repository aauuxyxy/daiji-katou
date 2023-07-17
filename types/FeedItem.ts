export type Feed = {
  title: string;
  link: string;
  creator: string;
  published_at: string;
  createdAt: string;
  thumbnail?: string;
  source: string;
  contentSnippet: string;
};

export type FeedProps = {
  zennPosts: Array<Feed>;
};
