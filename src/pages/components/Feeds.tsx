import { FeedProps } from '../../../types/FeedItem';
import Link from 'next/link';

const Feeds = ({ zennPosts }: FeedProps) => {
  if (!zennPosts) {
    return <p>記事がありません。</p>;
  }

  return (
    <>
      <div className='flex items-center justify-center laptop:mb-20 phone:mb-10'>
        <p className='text-5xl tracking-widest'>Feeds</p>
      </div>

      <div className='w-3/4 mx-auto'>
        <div className='mb-10'>
          <div className='desktop:grid grid-cols-4'>
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
      </div>
    </>
  );
};

export default Feeds;
