const Footer = (): JSX.Element => {
  return (
    <>
      <footer className=' border-t-2 p-8 w-3/4 mx-auto mt-20'>
        <div className='phone:text-xs'>
          <p>
            <span>著作者：</span>
            <a
              href='https://jp.freepik.com/free-vector/cute-astronaut-with-moon-in-space-logo-cartoon-vector-icon-illustration-science-technology-isolated_42654139.htm#&position=5&from_view=undefined'
              target='_blank'
            >
              catalyststuff(ヘッダー画像)
            </a>
            <span className='mx-2'>/</span>
            <a
              href='https://jp.freepik.com/free-vector/cute-astronaut-super-flying-cartoon-illustration_15644423.htm#from_view=detail_author'
              target='_blank'
            >
              catalyststuff(アバター)
            </a>
            <span className='mx-2'>/</span>
            <a
              href='https://jp.freepik.com/free-vector/pack-of-colourful-planets-in-the-solar-system_5413346.htm#&position=3&from_view=undefined'
              target='_blank'
            >
              Freepik
            </a>
          </p>
          <p>出典　：Freepik</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
