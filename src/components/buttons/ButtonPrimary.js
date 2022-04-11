import React from 'react';
import { Link } from 'react-router-dom';

import { button_primary } from '../../styles/buttons/buttonPrimary';

const ButtonPrimary = ({ ...props }) => {
  const { children, variant, url, event } = props;

  return (
    <Link
      to={url}
      className={variant ? `${variant} ${button_primary}` : button_primary}
      onClick={event}>
      {children}
    </Link>
  );
};

export default ButtonPrimary;
