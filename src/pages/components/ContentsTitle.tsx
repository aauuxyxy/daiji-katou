import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ContentsTitle = ({ children }: Props) => {
  return (
    <>
      <div className='flex items-center justify-center mb-10'>
        <p className='text-5xl tracking-widest'>{children}</p>
      </div>
    </>
  );
};

export default ContentsTitle;
