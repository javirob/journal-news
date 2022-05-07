import Socials from './fragments/Socials';

const Footer = () => {
  return (
    <div className='bg-black text-gray-400'>
      <div className='container mx-auto py-4 pb-8'>
        <div>
          <h2 className='pt-4 text-center text-6xl font-serif font-extrabold'>Journal</h2>
          <p className='mb-4 text-center text-sm uppercase'>Company Name 2022</p>
          <Socials />
        </div>
        <ul className='lg:max-w-5xl lg:mx-auto font-serif py-3 flex flex-col justify-center space-y-2 items-center md:flex-row md:justify-around md:space-y-0'>
          <li className='cursor-pointer hover:text-white'>About</li>
          <li className='cursor-pointer hover:text-white'>Values</li>
          <li className='cursor-pointer hover:text-white'>Contact</li>
          <li className='cursor-pointer hover:text-white'>Advertisement</li>
          <li className='cursor-pointer hover:text-white'>Privacy Policy</li>
          <li className='cursor-pointer hover:text-white'>Cookies</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
