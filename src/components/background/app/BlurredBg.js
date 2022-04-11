import React, { useContext } from 'react';

import blurContext from '../../../global/context/initContext';

// blurred background when menu is toggled
const BlurredBg = ({ children }) => {
  const context = useContext(blurContext);

  const { hidden } = context;

  return <div className={hidden ? 'filter-none' : 'blur-md pointer-events-none'}>{children}</div>;
};

export default BlurredBg;
