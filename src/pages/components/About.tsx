import Image from 'next/image';

const About = (): JSX.Element => {
  return (
    <>
      <div className='flex items-center justify-center mb-20'>
        <p className='text-5xl tracking-widest'>About</p>
      </div>

      <div className='flex w-3/4 mx-auto font-body items-center justify-center'>
        <div className='mr-6'>
          <Image
            src='/images/about/avatar.jpg'
            alt='Picture of the author'
            width={100}
            height={100}
            className='avatar'
          />
          <style jsx global>
            {`
              .avatar {
                border-radius: 50%;
              }
            `}
          </style>
        </div>

        <div className='phone:text-sm'>
          <p className='tracking-wide mb-4'>
            <span>加藤 大二</span>
            <span className='mx-4'>－</span>
            <span>Daiji Katou</span>
          </p>

          <div>
            <div className='flex'>
              <span>所属会社</span>
              <span className='mx-4'>:</span>
              <span>株式会社KDDIエボルバ</span>
            </div>
            <div className='flex'>
              <span>担当業務</span>
              <span className='mx-4'>:</span>
              <span>
                コンタクトセンターデスクに向けた、ツールやシステムの開発業務
              </span>
            </div>
            <div className='flex'>
              <span>利用技術</span>
              <span className='mx-4'>:</span>
              <span>html / CSS / Javascript / React / Node.js / Express</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
