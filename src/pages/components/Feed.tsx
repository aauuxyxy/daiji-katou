import { FeedProps } from '../../../types/FeedItem';
import Link from 'next/link';
import ContentsTitle from './ContentsTitle';
import ContentsBody from './ContentsBody';

const Feed = ({ zennPosts }: FeedProps) => {
  if (!zennPosts) {
    return <p>記事がありません。</p>;
  }

  return (
    <>
      <ContentsTitle>Feed</ContentsTitle>

      <ContentsBody animatetype='right'>
        <p className='text-center mb-10'>
          当サイトを構成するフレームワーク「Next.js」に関する最新情報のFeedをチェックできます。
        </p>
        <div>
          <div className='grid tablet:w-full phone:mx-auto phone:w-80 phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4'>
            {zennPosts.map((post) => (
              <div className='m-2' key={post.link}>
                <Link
                  href={post.link}
                  target='_blank'
                  className='block max-w-sm h-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
                >
                  <h5 className='mb-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white overflow-hidden'>
                    {post.title}
                  </h5>
                  <p className='font-normal text-gray-700 dark:text-gray-400'>
                    {post.creator}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </ContentsBody>
    </>
  );
};

export default Feed;
