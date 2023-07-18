const Footer = () => {
  return (
    <>
      <footer className=' border-t-2 p-8 w-3/4 mx-auto mt-20'>
        <div className='phone:text-xs mb-6'>
          <p className='mb-3'>画像出典：Freepik</p>

          <div className=''>
            <div className='phone:mb-3'>
              <p className='font-bold mb-1'>
                <a href='https://jp.freepik.com/author/catalyststuff'>
                  catalyststuff
                </a>
              </p>
              <a
                href='https://jp.freepik.com/free-vector/cute-astronaut-with-moon-in-space-logo-cartoon-vector-icon-illustration-science-technology-isolated_42654139.htm#&position=5&from_view=undefined'
                target='_blank'
                rel='noreferrer'
              >
                宇宙飛行士1
              </a>
              <span className='mx-2'>/</span>
              <a
                href='https://jp.freepik.com/free-vector/cute-astronaut-super-flying-cartoon-illustration_15644423.htm#from_view=detail_author'
                target='_blank'
                rel='noreferrer'
              >
                宇宙飛行士2
              </a>
              <span className='mx-2'>/</span>
              <a
                href='https://jp.freepik.com/free-vector/cute-astronaut-riding-plane-with-rocket-flag-in-space-cartoon-vector-icon-illustration-science-flat_51406696.htm#&position=24&from_view=author#position=24'
                target='_blank'
                rel='noreferrer'
              >
                宇宙飛行士3
              </a>
            </div>
            <div>
              <p className='font-bold'>
                <a
                  href='https://jp.freepik.com/author/freepik'
                  className='mb-1'
                >
                  FreePick
                </a>
              </p>
              <a
                href='https://jp.freepik.com/free-vector/pack-of-colourful-planets-in-the-solar-system_5413346.htm#&position=3&from_view=undefined'
                target='_blank'
                rel='noreferrer'
              >
                ロケット
              </a>
            </div>
          </div>
        </div>

        <div className='text-center'>© Daiji Katou</div>
      </footer>
    </>
  );
};

export default Footer;
