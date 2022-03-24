import React, { Fragment, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import blurContext from '../../global/context/context.init';

import { default_link, default_nav } from '../../styles/menu/styles.navigation';

const Navigation = ({ ...props }) => {
  const { hiddenOnMobile, className, applyClassOnLink } = props;

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
    <Fragment>
      <nav
        className={`${hiddenOnMobile ? 'hidden' : 'block'} ${
          className ? className : default_nav
        }`}>
        {displayLinks()}
      </nav>
    </Fragment>
  );
};

export default Navigation;
