import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

export default function Home(): JSX.Element {
  return (
    <div>
      <div className='mb-52'>
        <Header />
      </div>
      <div id='about'>
        <About />
      </div>

      <Footer />
    </div>
  );
}
