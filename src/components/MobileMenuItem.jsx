import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

const MobileMenuItem = ({ head, className, items }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <li className={`py-1 ${className && className}`}>
      <button type='button' className=' font-bold flex justify-between items-center uppercase w-full' onClick={toggleOpen}>
        <span className={open ? 'text-red-400 md:text-red-400' : 'text-white'}>{head}</span>
        {open ? <BsChevronDown className='md:hidden text-white' /> : <BsChevronRight className='md:hidden text-white' />}
      </button>
      <div className=' overflow-hidden font-serif '>
        {/* <ul className={`md:h-auto my-2 ${open ? 'h-auto my-3' : 'h-0'}`}> */}
        <ul className={`md:h-auto h-0 my-1 transition-all ease-in duration-400 ${open && 'h-[220px]'}`}>
          <li className='py-1 mb-1 border-b md:border-0 border-gray-500 text-gray-400 hover:text-white cursor-pointer'>Home</li>
          <li className='py-1 mb-1 border-b md:border-0  border-gray-500 hover:text-white cursor-pointer  text-gray-400'>Politics</li>
          <li className='py-1 mb-1 border-b md:border-0  border-gray-500 hover:text-white cursor-pointer  text-gray-400'>Opinion</li>
          <li className='py-1 mb-1 border-b md:border-0  border-gray-500 hover:text-white cursor-pointer  text-gray-400'>Trending</li>
          <li className='py-1 mb-1 border-b md:border-0  border-gray-500 hover:text-white cursor-pointer  text-gray-400'>International</li>
          <li className='py-1 mb-1 border-b md:border-0  border-gray-500 hover:text-white cursor-pointer  text-gray-400'>Women</li>
        </ul>
      </div>
    </li>
  );
};

export default MobileMenuItem;
