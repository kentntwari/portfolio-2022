import React from 'react';

import Burger from '../../utilities/images/hamburger.png';

const Menu = () => {
  return (
    <header className="relative mb-[8.25rem]">
      <nav className="hidden">
        <ul className="flex flex-col gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Works</li>
        </ul>
      </nav>
      <img className="w-[50px] h-[50px]" src={Burger} alt="burger-nav" />
    </header>
  );
};

export default Menu;
