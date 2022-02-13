import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Navigation = ({ hiddenOnMobile, className, applyClassOnLink }) => {
  const displayLinks = useCallback(() => {
    const links = ['Home', 'About', 'Works'];

    return links.map((link) => (
      <Link
        key={uuidv4()}
        to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
        className={applyClassOnLink ? applyClassOnLink : ''}>
        {link}
      </Link>
    ));
  }, [applyClassOnLink]);

  return (
    <nav className={`${hiddenOnMobile ? 'hidden' : className}`}>{displayLinks()}</nav>
  );
};

export default Navigation;
