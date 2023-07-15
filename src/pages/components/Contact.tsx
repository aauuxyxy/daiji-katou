const Contact = () => {
  const links = [
    { href: 'https://github.com/aauuxyxy', label: 'GitHub' },
    { href: 'https://twitter.com/dktec968', label: 'Twitter' },
    { href: 'https://zenn.dev/tectectec', label: 'Zenn' },
  ];

  return (
    <>
      <div className='flex items-center justify-center laptop:mb-20 phone:mb-10'>
        <p className='text-5xl tracking-widest'>Contact</p>
      </div>

      <div className='w-3/4 mx-auto'>
        {links.map(({ href, label }) => (
          <p key={href}>
            <a href={href} target='_blank'>
              {label}
            </a>
          </p>
        ))}
      </div>
    </>
  );
};

export default Contact;
