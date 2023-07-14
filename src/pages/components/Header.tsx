import Link from 'next/link';
import { ChangeThemes } from './ChangeThemes';
import Image from 'next/image';

export const Header = () => {
  return (
    <>
      <nav>
        <div className='container mx-auto flex items-center justify-between py-10 lg:px-36 sm:px-1'>
          <span className='text-3xl font-body tracking-widest'>
            Daiji Katou
          </span>

          <div
            className='hidden w-auto flex space-x-10 text-lg lg:flex'
            id='navbar-default'
          >
            <div className='hover:text-blue-500 hover:border-b-2 transition'>
              <Link href={{}}>
                <span>About</span>
              </Link>
            </div>
            <div className='hover:text-blue-500 hover:border-b-2 transition'>
              <Link href={{}}>
                <span>Documents</span>
              </Link>
            </div>
            <div className='hover:text-blue-500 hover:border-b-2 transition'>
              <Link href={{}}>
                <span>Works</span>
              </Link>
            </div>
            <div className='hover:text-blue-500 hover:border-b-2 transition'>
              <Link href={{}}>
                <span>Contact</span>
              </Link>
            </div>
            <div>
              <ChangeThemes />
            </div>
          </div>

          <div className='lg:hidden md:flex'>
            <button type='button' className='z-10 space-y-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-10 h-10'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className='absolute sm:-right-60 lg:top-40 lg:right-48 z-0'>
        <Image
          src='/images/planet/惑星1.png'
          alt='Picture of the author'
          width={500}
          height={500}
        />
      </div>

      <div className='max-w-screen-xl flex flex-wrap items-center justify-start mx-auto px-4 z-10 font-body'>
        <div className='animate-slide-in-fwd-center'>
          <p className='pt-20 text-9xl tracking-widest'>Hello</p>
          <p className='pb-10 text-9xl tracking-widest'>Planet</p>
          <p className='tracking-widest text-xl'>
            Welcome to Daiji Kato's Portfolio Planet Journy!!
          </p>
          <p className='tracking-widest text-xl'>
            Dark mode is recommended for viewing.
          </p>
        </div>
      </div>

      <div className='absolute w-1/2 lg:top-56 lg:left-96 sm:top-56 sm:left-10'>
        <Image
          src='/images/planet/rocket.png'
          alt='Picture of the author'
          width={400}
          height={400}
        />
      </div>
    </>
  );
};
