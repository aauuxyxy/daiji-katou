import ChangeThemes from './ChangeThemes';
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const Header = () => {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#feed', label: 'Feed' },
    { href: '#works', label: 'Works' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <div className='phone:mb-52'>
        <nav className='phone:mb-16'>
          <div className='py-10 w-3/4 mx-auto relative'>
            <span className='text-3xl font-body tracking-widest absolute left-0'>
              Daiji Katou
            </span>

            <div
              className='hidden w-auto flex space-x-10 text-lg laptop:flex absolute right-0'
              id='navbar-default'
            >
              {links.map(({ href, label }) => (
                <div
                  key={href}
                  className='hover:text-blue-500 hover:border-b-2 transition'
                >
                  <a href={href}>
                    <span>{label}</span>
                  </a>
                </div>
              ))}
              <div>
                <ChangeThemes />
              </div>
            </div>

            <div className='laptop:hidden phone:inline-block absolute right-0 z-20'>
              <div>
                <Menu as='div' className='relative inline-block text-left'>
                  <div>
                    <Menu.Button className='inline-flex w-full justify-center bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                      <span className='z-10 space-y-2'>
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
                      </span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <div className='px-1 py-1 '>
                        {links.map(({ href, label }) => (
                          <Menu.Item key={href}>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? 'bg-violet-500 text-white'
                                    : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                <a href={href}>{label}</a>
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </nav>

        <div className='absolute top-28 desktop:right-40 z-0 phone:w-1/3 phone:right-4'>
          <Image
            src='/images/planet/惑星1.png'
            alt='Picture of the author'
            width={500}
            height={500}
          />
        </div>

        <div className='z-10 font-body relative'>
          <div className='animate-slide-in-fwd-center w-3/4 mx-auto'>
            <p className='pt-20 laptop:text-9xl tracking-widest phone:text-8xl'>
              Hello
            </p>
            <p className='pb-10 laptop:text-9xl tracking-widest phone:text-8xl'>
              Planet
            </p>
            <p className='tracking-widest laptop:text-xl phone:text-sm'>
              Welcome to Daiji Katos Portfolio Planet Journy!!
            </p>
            <p className='tracking-widest laptop:text-xl phone:text-sm'>
              Dark mode is recommended for viewing.
            </p>

            <div className='absolute desktop:left-44 top-40 w-1/2 phone:left-32'>
              <Image
                src='/images/planet/rocket.png'
                alt='Picture of the author'
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
