import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';

const Socials = () => {
  return (
    <>
      <h4 className='text-center text-xl font-serif font-semibold'>Follow Us: </h4>
      <div className='flex justify-center space-x-6 my-5 text-2xl'>
        <a href='/' className='hover:text-red-400'>
          <FaFacebookF />
        </a>
        <a href='/' className='hover:text-red-400'>
          <FaTwitter />
        </a>
        <a href='/' className='hover:text-red-400'>
          <FaYoutube />
        </a>
        <a href='/' className='hover:text-red-400'>
          <FaInstagram />
        </a>
        <a href='/' className='hover:text-red-400'>
          <FaTelegramPlane />
        </a>
      </div>
    </>
  );
};

export default Socials;
