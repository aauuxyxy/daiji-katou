import Image from 'next/image';

const About = (): JSX.Element => {
  const aboutItem = [
    { label: '所属会社', value: '株式会社KDDIエボルバ' },
    {
      label: '担当業務',
      value: 'コンタクトセンターデスクに向けた、ツールやシステムの開発業務',
    },
    {
      label: '利用技術',
      value: 'html / CSS / Javascript / React / Node.js / Express',
    },
  ];

  return (
    <>
      <div className='flex items-center justify-center laptop:mb-20 phone:mb-10'>
        <p className='text-5xl tracking-widest'>About</p>
      </div>

      <div className='w-3/4 mx-auto font-body laptop:flex items-center justify-center'>
        <div className='mr-6 phone:flex phone:justify-center phone:mb-4'>
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
          <p className='tracking-wide mb-4 laptop:block phone:flex phone:justify-center phone:mb-8'>
            <span>加藤 大二</span>
            <span className='mx-4'>－</span>
            <span>Daiji Katou</span>
          </p>

          <table>
            <tbody>
              {aboutItem.map((item) => (
                <tr key={item.label} className=''>
                  <td className='pr-4 w-20 phone:py-4 laptop:py-1'>
                    {item.label}
                  </td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default About;
