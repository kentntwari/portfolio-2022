import React, { useRef, createRef, useContext } from 'react';

import useWatchWindowSize from '../../utilities/hooks/useWatchWindowSize';

import blurContext from '../../global/context/initContext';

import Burger from '../../utilities/images/hamburger.png';
import Navigation from './Navigation';
import BlobMenuTopLeft from '../background/menu/BlobTopLeft';

const Menu = () => {
  const [isWithinMaxWidth, , ,] = useWatchWindowSize({ maxWidth: '1439px' });

  const context = useContext(blurContext);
  const { hidden, triggerBgBlur } = context;

  const burger_ref = useRef();
  const blob_menu_ref = createRef();

  return (
    <header className="relative mb-33 2xl:mb-36 z-20">
      {isWithinMaxWidth ? (
        <Navigation hiddenOnMobile={hidden} variant="absolute" />
      ) : (
        <Navigation variant="2xl:static" />
      )}

      {isWithinMaxWidth && (
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
      )}

      {isWithinMaxWidth && (
        <BlobMenuTopLeft ref={blob_menu_ref} hiddenOnMobile={hidden} />
      )}
    </header>
  );
};

export default Menu;
