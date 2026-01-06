import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='top-0 left-0 w-full p-4 flex items-center'>

      <img className='w-50 z-5' src={logo} alt="Logo" />
    </div>
  );
}

export default Header;