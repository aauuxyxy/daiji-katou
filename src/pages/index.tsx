import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Feeds from './components/Feeds';
import { GetStaticProps } from 'next';
import Parser from 'rss-parser';
import { FeedProps } from '../../types/FeedItem';
import { Montserrat } from '@next/font/google';

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
      <div id='about' className='bg-sky-100 dark:bg-zinc-900 py-20'>
        <About />
      </div>

      <div id='documents' className='py-20'>
        <Feeds zennPosts={zennPosts} />
      </div>

      <div id='contact' className='py-20'>
        <Contact />
      </div>
      <Footer />
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
