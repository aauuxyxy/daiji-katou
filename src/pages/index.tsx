import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Concept from './components/Concept';
import Feed from './components/Feed';
import { GetServerSideProps } from 'next';
import Parser from 'rss-parser';
import { FeedProps } from '../../types/FeedItem';
import { Montserrat } from '@next/font/google';
import ContentsWrapper from './components/ContentsWrapper';
import { Link as Scroll } from 'react-scroll';
import { BsFillRocketFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export default function Home({ zennPosts }: FeedProps) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    window.scrollY > 600 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div id='top' className={montserrat.className}>
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

      <button
        className={`${
          isVisible ? 'animate-rocket-alive' : 'animate-rocket-go'
        } fixed right-6 bottom-6 text-black dark:text-white`}
      >
        <Scroll to='top' smooth={true} duration={100}>
          <BsFillRocketFill size='2.5rem' className='mb-2' />
          <p>TOP</p>
        </Scroll>
      </button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const parser = new Parser();

  const feedZenn = await parser.parseURL('https://zenn.dev/topics/nextjs/feed');

  return {
    props: {
      zennPosts: feedZenn.items,
    },
  };
};
