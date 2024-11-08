import React from 'react';
import SideMenu from './sideMenu';

const NavBar = () => {
  return (
    <div>
      <nav className='purple'>
        <div class='nav-wrapper'>
          <a href='#' class='brand-logo'>
            Logo
          </a>
          <ul id='nav-mobile' class='right hide-on-med-and-down'>
            <li>
              <a href='#'>Login</a>
            </li>
            <li>
              <a href='#'>Register</a>
            </li>
          </ul>
        </div>
      </nav>
      <SideMenu />
    </div>
  );
};

export default NavBar;
