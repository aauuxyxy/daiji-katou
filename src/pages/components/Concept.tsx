import ContentsTitle from './ContentsTitle';
import Image from 'next/image';
import Link from 'next/link';
import ContentsBody from './ContentsBody';

const Concept = () => {
  return (
    <>
      <ContentsTitle>Concept</ContentsTitle>
      <ContentsBody>
        <div className='flex justify-center my-20'>
          <Image
            src='/images/concept/space_journy.png'
            alt='Picture of the author'
            width={200}
            height={200}
          />
        </div>

        <div className='w-3/4 mx-auto tracking-wide'>
          <div className='mb-10'>
            <p className='text-xl mb-4'>Design</p>
            <div>
              自らの経験や感じた事を「宇宙」と捉え、ポートフォリオのテーマとして落とし込みました。宇宙がテーマということで、全体のイメージカラーをモノトーンにしています。
              また、宇宙飛行士のイラストをメインビジュアルとし、当サイトの中を旅するような体験をしてもらえるようにしています。
            </div>
          </div>

          <div className='tablet:mb-20 phone:mb-12'>
            <p className='text-xl mb-4'>Code</p>
            <div>
              このポートフォリオサイトはNext.jsによって構築されています。Next.jsの0コンフィグな設計により環境構築への配慮が通常のReactよりも大幅に軽減されていることや、SSR・SSG・ISRなどの機能を備えていることから、ユーザー体験やパフォーマンスの向上にも貢献してくれると考えNext.jsを採用しています。
              また、当サイトではFeedsセクションにて、ZennのRSSフィードを取得し、Next.jsのSSG機能を用いて記事を表示しています。
            </div>
          </div>

          <div className='flex justify-center'>
            <button className='bg-green-600 hover:bg-green-900 text-white font-semibold py-2 px-8 rounded-3xl shadow transition-colors'>
              <Link
                href='https://github.com/aauuxyxy/daiji-katou'
                target='_blank'
              >
                View Source
              </Link>
            </button>
          </div>
        </div>
      </ContentsBody>
    </>
  );
};

export default Concept;
