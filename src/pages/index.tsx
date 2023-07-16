import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Documents from './components/Documents';

export default function Home(): JSX.Element {
  return (
    <div>
      <div className='phone:mb-20 desktop:mb-56'>
        <Header />
      </div>

      <div id='about' className=' bg-zinc-900 py-20 text-white'>
        <About />
      </div>

      <div id='documents'>
        <Documents />
      </div>

      <div id='contact' className='py-10'>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
