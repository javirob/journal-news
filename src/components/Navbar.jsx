import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import Socials from './fragments/Socials';

import { useState } from 'react';

import MobileMenuItem from './MobileMenuItem';
import { useEffect } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 180) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav>
      <div className='container max-w-[1030px] mx-auto'>
        {/* Top Nav */}
        <div className='overflow-x-auto flex justify-between px-4 border-b-2 border-zinc-300 text-xs'>
          {/* Today */}
          <div className='shrink-0 flex py-1  md:py-2 font-serif '>
            <h2 className='font-semibold mr-3 text-zinc-700'>Today</h2>
            <ul className='flex space-x-2  text-zinc-500'>
              <li>
                <a href='/' className='hover:text-red-600 ease-out duration-300'>
                  - Covid-19
                </a>
              </li>
              <li>
                <a href='/' className='hover:text-red-600 marker:ease-out  duration-300'>
                  - EEUU
                </a>
              </li>
              <li>
                <a href='/' className='hover:text-red-600 ease-out duration-300'>
                  - Russia
                </a>
              </li>
              <li>
                <a href='/' className='hover:text-red-600 ease-out duration-300'>
                  - Fundamental Rights
                </a>
              </li>
            </ul>
          </div>
          {/* Special Links */}
          <div className='hidden sm:flex'>
            <a href='/' className='font-bold text-zinc-800 py-1 px-4 border-t-4 border-zinc-900 hover:text-red-600 ease-out duration-300'>
              SPECIAL
            </a>
            <a href='/' className='font-bold text-zinc-800 py-1 px-4 border-t-4 border-blue-400 hover:text-blue-400 ease-out duration-300'>
              TRENDING
            </a>
            <a href='/' className='font-bold text-zinc-800 py-1 px-4 border-t-4 border-red-600 hover:text-red-600 ease-out duration-300'>
              LOG IN
            </a>
          </div>
        </div>

        {/* Middle Nav */}
        <div id='navbar' className={`top-0 flex  bg-black md:bg-white justify-between items-center  md:px-6 md:py-4 ${scrolled ? 'fixed top-0 left-0 right-0 shadow-xl' : 'relative'}`}>
          {/* Menu Button */}
          <div className='px-2 text-white md:text-black'>
            <button className='flex items-center' onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <AiOutlineClose className='text-lg md:text-2xl lg:text-3xl' /> : <AiOutlineMenu className='text-lg md:text-2xl lg:text-3xl ' />}
            </button>
          </div>
          {/* Logo */}
          <div>
            <h1>
              <a href='/' className='font-serif font-extrabold py-2 text-2xl  md:text-6xl lg:text-6xl inline-block text-white md:text-red-700'>
                Journal
              </a>
            </h1>
          </div>
          {/* Sign up */}
          <div>
            <button className='py-4 px-4 md:py-3 text-xs md:px-8  bg-red-700 text-white uppercase font-bold  hover:bg-zinc-600 ease-out duration-300 '>Sign up</button>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className=' px-1 bg-zinc-200 md:py-2 md:px-8 flex flex-row-reverse md:flex-row space-x-1 md:space-x-5 items-center justify-center'>
          <ul className='overflow-x-auto flex  space-x-3 text-xs lg:text-sm lg:space-x-12 font-bold py-1 px-6 border-l-2 md:border-r-2 md:border-l-0 border-black '>
            <li>
              <a href='/' className='ease-out duration-300 hover:text-red-700'>
                Politics
              </a>
            </li>
            <li>
              <a href='/' className='ease-out duration-300 hover:text-red-700'>
                International
              </a>
            </li>
            <li>
              <a href='/' className='ease-out duration-300 hover:text-red-700'>
                Women
              </a>
            </li>
            <li>
              <a href='/' className='ease-out duration-300 hover:text-red-700'>
                Climate
              </a>
            </li>
            <li>
              <a href='/' className='ease-out duration-300 hover:text-red-700'>
                Culture
              </a>
            </li>
            <li>
              <a href='/' className='ease-out duration-300 hover:text-red-700'>
                Science
              </a>
            </li>
            <li>
              <a href='/' className='ease-out duration-300 hover:text-red-700'>
                Economy
              </a>
            </li>
          </ul>
          <div className='shrink-0 flex items-center space-x-2 px-2 py-1'>
            <TiWeatherPartlySunny className='text-xl ' />
            <span className='text-xs md:text-sm'>Dublin 11 °</span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`h-0 transition-all ease-in duration-500 bg-black/90 text-white overflow-y-auto md:overflow-y-hidden ${mobileMenuOpen && 'h-screen md:h-[40vh]'} ${
            scrolled ? 'fixed top-11 left-0 right-0 md:top-[100px]' : ''
          }`}>
          <div>
            <ul className='px-4 py-4 flex flex-col space-y-2 md:flex-row md:justify-around md:items-center md:mx-auto'>
              <MobileMenuItem head='sections' />
              <MobileMenuItem head='podcats' />
              <MobileMenuItem head='specials' />
              <MobileMenuItem head='about' />
              <li className='md:hidden'>
                <form>
                  <div className='flex items-stretch  justify-start '>
                    <input type='text' placeholder='Search...' className='bg-transparent border border-gray-500  p-1' />
                    <button type='button' className='bg-gray-500 border px-2 border-gray-500 '>
                      <AiOutlineSearch />
                    </button>
                  </div>
                </form>
              </li>
              <MobileMenuItem head='colaborate' className='md:hidden' />
              <MobileMenuItem head='social media' className='md:hidden' />
            </ul>
            <div className='mt-5'>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
