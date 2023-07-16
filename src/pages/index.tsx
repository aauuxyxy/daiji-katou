import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Documents from './components/Documents';
import { GetStaticProps } from 'next';
import Parser from 'rss-parser';
import { FeedProps } from '../../types/FeedItem';

export default function Home({ zennPosts }: FeedProps) {
  return (
    <div>
      <div className='phone:mb-20 desktop:mb-56'>
        <Header />
      </div>
      <div id='about' className=' bg-zinc-900 py-20'>
        <About />
      </div>

      <div id='documents' className='py-20'>
        <Documents zennPosts={zennPosts} />
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

  const feedZenn = await parser.parseURL('https://zenn.dev/tectectec/feed');

  return {
    props: {
      zennPosts: feedZenn.items,
    },
  };
};
