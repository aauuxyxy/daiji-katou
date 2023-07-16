export type Feed = {
  title: string;
  link: string;
  isoDate: string;
};

export type FeedProps = {
  zennPosts: Array<Feed>;
};
