import React from 'react';
import { Link } from 'react-router-dom';

const ButtonSecondary = ({ ...props }) => {
  const { children, className, url } = props;

  return (
    <Link
      to={url}
      className={
        className
          ? `bg-white-full ${className} rounded-full border-solid border text-medium font-display font-normal capitalize text-pink-100`
          : 'bg-white-full rounded-full border-solid border text-medium font-display font-normal capitalize text-pink-100'
      }>
      {children}
    </Link>
  );
};

export default ButtonSecondary;
