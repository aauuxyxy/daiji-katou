import { ChangeThemes } from './ChangeThemes';

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
    </>
  );
};
