import React, { useState } from 'react';
import '../App.css';

const SideMenu = () => {
  const [menu, setMenu] = useState(false);

  function menuChange() {
    setMenu(!menu);
    console.log(menu);
  }

  return (
    <div>
      <a id='sideMenu' href='#'>
        <i
          id='sideMenu'
          onClick={menuChange}
          className='material-icons'
        >
          menu
        </i>{' '}
      </a>
    </div>
  );
};

export default SideMenu;
