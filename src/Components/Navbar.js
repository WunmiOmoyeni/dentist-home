import React, { useState } from 'react';
import logo from '../images/logo-allsmiles.png.svg';
import dropdown from '../images/span.qodef-m-icon.svg'
import closemenu from '../images/icon-menu-close.svg'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  }

  return (
    <div className='w-full p-10 text-[13px] text-[#1E2D78]' style={{fontFamily: "OpenSans-Regular"}}>
      {isOpen && <div className='overlay' onClick={closeDropdown}></div>}
      <div className='flex items-center justify-between'>
        <img className='h-4 sm:h-5' src={logo} alt='Logo' />

        <div className='hidden sm:flex space-x-24 '>
          <a href='#' className='font-bold hover:underline'>HOME</a>
          <a href='#' className='font-bold hover:underline'>PAGES</a>
          <a href='#' className='font-bold hover:underline'>STAFF</a>
          <a href='#' className='font-bold hover:underline'>BLOG</a>
          <a href='#' className='font-bold hover:underline'>SHOP</a>
          <a href='#' className='font-bold hover:underline'>LANDING</a>
        </div>

        <div className='hidden sm:flex items-center space-x-3'>
          <p className='font-bold'>SEARCH</p>
        </div>

        <button className='sm:hidden' onClick={toggleMenu}>
          <img className='h-6' src={dropdown} alt='Menu' />
        </button>
       </div>

       {isOpen && (
        <div className='sm:hidden mt-4'>
        <div className='dropdown-menu'>
          <div className>
          <img src={closemenu} onClick={closeDropdown} className='h-3'/>
          </div>
        
        <div className='flex items-center space-x-3 mt-4 bg-gray-400 p-5 rounded-lg'>
          <p className='font-bold text-white'>Search</p>
        </div>
        <a href='#' className='block font-bold hover:underline my-5 mt-5 px-10 py-3'>Homes</a>
        <a href='#' className='block font-bold hover:underline my-5 px-10 py-3'>Pages</a>
        <a href='#' className='block font-bold hover:underline my-5 px-10 py-3'>Blog</a>
        <a href='#' className='block font-bold hover:underline my-5 px-10 py-3'>Podcast</a>
        <a href='#' className='block font-bold hover:underline my-5 px-10 py-3'>Shop</a>
        
        </div>
      </div>
       )}

    </div>
)};

export default Navbar;
