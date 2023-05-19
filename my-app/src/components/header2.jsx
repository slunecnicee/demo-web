import React, { useState } from 'react';

const Header2 = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="wrp">
      <div className='fixed-header-2'>
        <figure className='logo'>
          <img src="https://html.ditsolution.net/techno-preview/assets/images/1.png" alt="logo" />
        </figure>
        <div className='first-menu'>
          <ul className='ul1'>
            <li className='li1'>Home</li>
            <li className='li1'>Demo</li>
            <li className='li1'>Inner Pages</li>
            <li className='li1'>Support</li>
            <li className='li1'>Feature</li>
            <li className='li1'>Blog</li>
          </ul>
        </div>

        <button className='btn2'> Get Started</button>

        <div className="hamburger-menu-icon" onClick={toggleMenu}> </div>
      </div>

      <section className="hmbgmenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <ul className="ul2">
          <li className='li2'>Home</li>
          <li className='li2'>Demo</li>
          <li className='li2'>Inner Pages</li>
          <li className='li2'>Support</li>
          <li className='li2'>Feature</li>
          <li className='li2'>Blog</li>
        </ul>
      </section>
    </div>
  );
};

export default Header2;