import React from 'react';
import { Link } from 'react-router-dom';

import { button_secondary } from '../../styles/buttons/styles.buttonSecondary';

const ButtonSecondary = ({ ...props }) => {
  const { children, className, url } = props;

  return (
    <Link
      to={url}
      className={className ? `${className} ${button_secondary}` : button_secondary}>
      {children}
    </Link>
  );
};

export default ButtonSecondary;
