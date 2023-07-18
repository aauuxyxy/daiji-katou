import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ContentsBody = ({ children }: Props) => {
  return (
    <>
      <div className='laptop:w-3/4 phone:w-11/12 mx-auto font-body'>
        {children}
      </div>
    </>
  );
};

export default ContentsBody;
