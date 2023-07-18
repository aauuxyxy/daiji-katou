import React from 'react';

type Props = {
  bg_type: boolean;
  id: string;
  children: React.ReactNode;
};

const ContentsWrapper = (props: Props) => {
  return (
    <>
      {props.bg_type ? (
        <div id={props.id} className='laptop:py-20 phone:py-10'>
          {props.children}
        </div>
      ) : (
        <div
          id={props.id}
          className='bg-zinc-100 dark:bg-zinc-900 laptop:py-20 phone:py-10'
        >
          {props.children}
        </div>
      )}
    </>
  );
};

export default ContentsWrapper;
