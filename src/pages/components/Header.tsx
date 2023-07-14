import Link from 'next/link';
import ChangeThemes from './ChangeThemes';
import Image from 'next/image';

const Header = (): JSX.Element => {
  return (
    <>
      <nav>
        <div className='py-10 w-3/4 mx-auto relative'>
          <span className='text-3xl font-body tracking-widest absolute left-0'>
            Daiji Katou
          </span>

          <div
            className='hidden w-auto flex space-x-10 text-lg laptop:flex absolute right-0'
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

          <div className='laptop:hidden phone:inline-block absolute right-0'>
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

      <div className='absolute laptop:top-28 desktop:right-48 laptop:-right-20 tablet:-right-56 phone:-right-80 z-0'>
        <Image
          src='/images/planet/惑星1.png'
          alt='Picture of the author'
          width={500}
          height={500}
        />
      </div>

      <div className='z-10 font-body'>
        <div className='animate-slide-in-fwd-center w-3/4 mx-auto'>
          <p className='pt-20 laptop:text-9xl tracking-widest phone:text-8xl'>
            Hello
          </p>
          <p className='pb-10 laptop:text-9xl tracking-widest phone:text-8xl'>
            Planet
          </p>
          <p className='tracking-widest laptop:text-xl phone:text-lg'>
            Welcome to Daiji Katos Portfolio Planet Journy!!
          </p>
          <p className='tracking-widest laptop:text-xl phone:text-lg'>
            Dark mode is recommended for viewing.
          </p>
        </div>
      </div>

      <div className='absolute desktop:w-1/2 tablet:w-1/3 phone:w-60 desktop:top-48 desktop:left-96 tablet:top-44 tablet:left-72 phone:top-48 phone:left-52'>
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

export default Header;
