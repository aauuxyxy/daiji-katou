import Image from 'next/image';
import ContentsTitle from './ContentsTitle';
import ContentsBody from './ContentsBody';
import { FaGithub } from 'react-icons/fa';
import { SiZenn } from 'react-icons/si';
import { AiOutlineTwitter } from 'react-icons/ai';
import Link from 'next/link';

const About = () => {
  const aboutItems = [
    {
      label: '所属会社',
      value: '株式会社KDDIエボルバ',
      svg: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z',
      description:
        '2018年12月1日に株式会社KDDIエボルバに入社しました。当初はRPA開発に携わり、要件が複雑になるにつれて現在のシステム開発業務にシフトチェンジしてゆきました。',
    },
    {
      label: '担当業務',
      value: 'システム・ツール開発業務',
      svg: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z',
      description:
        'コンタクトセンターデスクに向けた、ツールやシステムの開発業務に携わっております。オペレーター評価ダッシュボードや顧客対応用のナレッジ管理ツールなど制作しました。',
    },
    {
      label: '利用技術',
      value: 'React/Node.js/Express',
      svg: 'M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z',
      description:
        '主にフロントエンドではReact、バックエンドではNode.jsを使用しています。また、バックエンドではNode.jsフレームワークのExpressを使用しています。',
    },
  ];

  return (
    <>
      <ContentsTitle>About</ContentsTitle>

      <ContentsBody animatetype='left'>
        <div className='phone:flex justify-center mb-4'>
          <Image
            src='/images/about/avatar.jpg'
            alt='Picture of the author'
            width={100}
            height={100}
            className=' rounded-full object-cover object-center'
          />
        </div>

        <div className='phone:text-sm'>
          <p className='flex justify-center mb-4'>
            <span>加藤 大二</span>
            <span className='mx-4'>－</span>
            <span>Daiji Katou</span>
          </p>

          <div className='flex justify-center items-center mb-20'>
            <Link href='https://github.com/aauuxyxy' target='_blank'>
              <FaGithub className='mx-2 cursor-pointer' size='1.25rem' />
            </Link>

            <Link href='https://zenn.dev/tectectec' target='_blank'>
              <SiZenn className='mx-2 cursor-pointer' size='1.25rem' />
            </Link>

            <Link href='https://twitter.com/dktec968' target='_blank'>
              <AiOutlineTwitter className='mx-2 cursor-pointer' size='1.5rem' />
            </Link>
          </div>

          <div className='flex laptop:flex-row justify-between items-center phone:flex-col w-3/4 mx-auto'>
            {aboutItems.map((about) => (
              <div key={about.label} className='m-4 laptop:w-1/3 phone:w-full'>
                <h2 className='text-2xl mb-6 text-center'>{about.label}</h2>
                <div className='mb-2 flex justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1}
                    stroke='currentColor'
                    className='w-12 h-12'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d={about.svg}
                    />
                  </svg>
                </div>
                <p className='text-center mb-6'>{about.value}</p>
                <div className='h-28'>{about.description}</div>
              </div>
            ))}
          </div>
        </div>
      </ContentsBody>
    </>
  );
};

export default About;
