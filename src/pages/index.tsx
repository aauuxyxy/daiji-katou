import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

export default function Home(): JSX.Element {
  return (
    <div>
      <div className='phone:mb-20 desktop:mb-56'>
        <Header />
      </div>
      <div id='about' className=' bg-zinc-900 py-10'>
        <About />
      </div>

      <Footer />
    </div>
  );
}
