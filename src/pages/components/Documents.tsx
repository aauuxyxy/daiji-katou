import { GetStaticProps } from 'next';
import { ZennItem } from '../../../types/Zenn/ZennItem';

type BlogZennProps = {
  articles?: ZennItem[];
};

const zennFetcher = async <T,>(path: string) => {
  const res = await fetch(`https://zenn.dev/api/${path}`);
  const result: T = await res.json();
  console.log(result);
  return result;
};

const Documents = (props: BlogZennProps) => {
  const { articles } = props;

  if (!articles) {
    return <p>Zennへの投稿はございません。</p>;
  }

  return (
    <>
      {articles.map((article) => (
        <p key={article.id}>{article.title}</p>
      ))}
    </>
  );
};

export default Documents;

export const getStaticProps: GetStaticProps = async () => {
  const result = await zennFetcher<{ articles: ZennItem[] }>(
    'articles?username=tectectec&order=latest'
  );
  const data = await result.articles;
  console.log(data);

  return {
    props: {
      articles: data,
    },
    revalidate: 60,
  };
};
