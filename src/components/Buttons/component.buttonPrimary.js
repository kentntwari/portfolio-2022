import React from 'react';
import { Link } from 'react-router-dom';

import { button_primary } from '../../styles/buttons/styles.buttonPrimary';

const ButtonPrimary = ({ ...props }) => {
  const { children, variant, url } = props;

  return (
    <Link to={url} className={variant ? `${variant} ${button_primary}` : button_primary}>
      {children}
    </Link>
  );
};

export default ButtonPrimary;
