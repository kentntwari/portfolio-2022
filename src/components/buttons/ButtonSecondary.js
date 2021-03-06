import React from 'react';
import { Link } from 'react-router-dom';

import { button_secondary } from '../../styles/buttons/buttonSecondary';

const ButtonSecondary = ({ ...props }) => {
  const { children, variant, url, event } = props;

  return (
    <Link
      to={url}
      className={variant ? `${variant} ${button_secondary}` : button_secondary}
      onClick={event}>
      {children}
    </Link>
  );
};

export default ButtonSecondary;
