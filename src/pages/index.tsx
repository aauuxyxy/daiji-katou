import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Concept from './components/Concept';
import Feed from './components/Feeds';
import { GetStaticProps } from 'next';
import Parser from 'rss-parser';
import { FeedProps } from '../../types/FeedItem';
import { Montserrat } from '@next/font/google';
import ContentsWrapper from './components/ContentsWrapper';
import Link from 'next/link';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export default function Home({ zennPosts }: FeedProps) {
  return (
    <div className={montserrat.className}>
      <div className='phone:mb-20 desktop:mb-56'>
        <Header />
      </div>

      <ContentsWrapper id='about' bg_type={false}>
        <About />
      </ContentsWrapper>

      <ContentsWrapper id='concept' bg_type={true}>
        <Concept />
      </ContentsWrapper>

      <ContentsWrapper id='feed' bg_type={false}>
        <Feed zennPosts={zennPosts} />
      </ContentsWrapper>

      <div className='bg-zinc-100 dark:bg-zinc-900 pt-1'>
        <Footer />
      </div>

      <button className='fixed right-6 bottom-6 bg-gray-600 text-white rounded-full w-12 h-12'>
        <Link href='/' className='flex justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 15.75l7.5-7.5 7.5 7.5'
            />
          </svg>
        </Link>
      </button>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const parser = new Parser();

  const feedZenn = await parser.parseURL('https://zenn.dev/topics/nextjs/feed');

  return {
    props: {
      zennPosts: feedZenn.items,
    },
  };
};
