import React from 'react';
function Header() {
  return (
    <div className='Header'>
      <nav className='nav'>
        <p className='nav-item'>Movies</p>
         <p className='nav-item'>Home</p>
        <p className='nav-item'>Popular</p>
        <div className='search-container'>
          <input type='text' placeholder='Search...' className='search-input' />
        </div>
        <p className='nav-item'>Profile</p>
      </nav>
    </div>
  );
}

export default Header;
