import React, { useRef, createRef, useContext } from 'react';

import blurContext from '../../global/context/blurContext';

import Burger from '../../utilities/images/hamburger.png';
import Navigation from './Navigation';
import BlobMenuTopLeft from '../background/menu/BlobMenuTopLeft';

const Menu = () => {
  const context = useContext(blurContext);
  const { hidden, triggerBgBlur } = context;

  const burger_ref = useRef();
  const blob_menu_ref = createRef();

  return (
    <header className="relative mb-33 z-20">
      <Navigation hiddenOnMobile={hidden} />
      
      <img
        ref={burger_ref}
        className={hidden ? 'w-[50px] h-[50px]' : 'hidden'}
        src={Burger}
        onClick={() => {
          burger_ref.current.classList.add('hidden');

          triggerBgBlur();

          document.body.classList.add('overflow-hidden');
        }}
        alt="burger-nav-icon"
      />

      <BlobMenuTopLeft ref={blob_menu_ref} hiddenOnMobile={hidden} />
    </header>
  );
};

export default Menu;
