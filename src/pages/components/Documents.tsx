import { FeedProps } from '../../../types/FeedItem';

const Documents = ({ zennPosts }: FeedProps) => {
  if (!zennPosts) {
    return <p>記事がありません。</p>;
  }

  return (
    <>
      <div className='flex items-center justify-center laptop:mb-20 phone:mb-10'>
        <p className='text-5xl tracking-widest'>Documents</p>
      </div>

      <div className='w-3/4 mx-auto'>
        <div className='mb-10'>
          <p className='text-2xl tracking-widest'>Qiita</p>
          <ul>
            {zennPosts.map((post) => (
              <li key={post.link}>{post.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Documents;
