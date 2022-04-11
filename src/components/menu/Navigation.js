import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import blurContext from '../../global/context/initContext';

import { default_link, default_nav } from '../../styles/menu/navigation';

const Navigation = ({ ...props }) => {
  const { hiddenOnMobile, variant, applyClassOnLink } = props;

  const context = useContext(blurContext);
  const { hideBgBlur } = context;

  const displayLinks = useCallback(() => {
    const links = ['Home', 'About', 'Works'];

    return links.map((link) => (
      <Link
        key={uuidv4()}
        to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
        className={`${applyClassOnLink ? applyClassOnLink : default_link}`}
        onClick={() => {
          hideBgBlur();

          document.body.classList.remove('overflow-hidden');
        }}>
        {link}
      </Link>
    ));
  }, [applyClassOnLink, hideBgBlur]);

  return (
    <nav
      className={`${hiddenOnMobile ? 'hidden' : 'block'} ${
        variant ? variant : ''
      } ${default_nav}`}>
      {displayLinks()}
    </nav>
  );
};

export default Navigation;
