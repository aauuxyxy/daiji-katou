import React from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  children: React.ReactNode;
  animatetype: string;
};

const ContentsBody = (props: Props) => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-50px',
    triggerOnce: true,
  });

  return (
    <>
      {props.animatetype === 'left' ? (
        <div
          ref={ref}
          className={`${
            inView ? 'animate-slide-left' : ''
          } opacity-0 laptop:w-3/4 phone:w-11/12 mx-auto font-body`}
        >
          {props.children}
        </div>
      ) : (
        <div
          ref={ref}
          className={`${
            inView ? 'animate-slide-right' : ''
          } opacity-0 laptop:w-3/4 phone:w-11/12 mx-auto font-body`}
        >
          {props.children}
        </div>
      )}
    </>
  );
};

export default ContentsBody;
