import React, { Fragment, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import blurContext from '../../global/context/blurContext';

const Navigation = ({ hiddenOnMobile, className, applyClassOnLink }) => {
  const context = useContext(blurContext);
  const { hideBgBlur } = context;

  const displayLinks = useCallback(() => {
    const links = ['Home', 'About', 'Works'];

    return links.map((link) => (
      <Link
        key={uuidv4()}
        to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
        className={`${
          applyClassOnLink ? applyClassOnLink : 'font-display text-[36px] text-white-full'
        }`}
        onClick={() => {
          hideBgBlur();

          document.body.classList.remove('overflow-hidden');
        }}>
        {link}
      </Link>
    ));
  }, [applyClassOnLink, hideBgBlur]);

  return (
    <Fragment>
      <nav
        className={`${hiddenOnMobile ? 'hidden' : 'block'} ${
          className ? className : 'absolute flex flex-col gap-[40px]'
        }`}>
        {displayLinks()}
      </nav>
    </Fragment>
  );
};

export default Navigation;
