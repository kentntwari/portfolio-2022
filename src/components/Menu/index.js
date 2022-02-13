import React from 'react';

import Burger from '../../utilities/images/hamburger.png';
import Navigation from './Navigation';

const Menu = () => {
  return (
    <header className="relative mb-33">
      <Navigation hiddenOnMobile={true} />
      <img className="w-[50px] h-[50px]" src={Burger} alt="burger-nav" />
    </header>
  );
};

export default Menu;
