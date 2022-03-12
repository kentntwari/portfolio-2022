import React from 'react';
import { Link } from 'react-router-dom';

const ButtonPrimary = ({ ...props }) => {
  const { children, className, url } = props;

  return (
    <Link
      to={url}
      className={
        className
          ? `${className} bg-pink-100 rounded-full text-medium font-display font-normal capitalize text-white-full`
          : 'bg-pink-100 rounded-full text-medium font-display font-normal capitalize text-white-full'
      }>
      {children}
    </Link>
  );
};

export default ButtonPrimary;
