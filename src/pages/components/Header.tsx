import { ChangeThemes } from './ChangeThemes';
import Image from 'next/image';

export const Header = () => {
  return (
    <>
      <nav>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <span className='text-3xl'>Daiji Katou</span>
          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul className='font-medium flex flex-col p-4 md:p-0 mt-4'>
              <li>
                <ChangeThemes />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='absolute top-40 right-36 z-0'>
        <Image
          src='/images/planet/惑星1.png'
          alt='Picture of the author'
          width={400}
          height={400}
        />
      </div>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-start mx-auto px-4 z-10 font-body'>
        <div className='animate-slide-in-fwd-center'>
          <p className='pb-10 pt-20 text-9xl tracking-widest'>Hello Planet</p>
          <p className='tracking-widest text-2xl'>
            Welcome to Daiji Kato's Portfolio Planet Journy!!
          </p>
          <p className='tracking-widest text-2xl'>
            Dark mode is recommended for viewing.
          </p>
        </div>
      </div>
    </>
  );
};
