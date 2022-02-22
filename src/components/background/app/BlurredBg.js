import React, { useContext } from 'react';

import blurContext from '../../../global/context/blurContext';

const BlurredBg = ({ children }) => {
  const context = useContext(blurContext);

  const { hidden } = context;

  return <div className={hidden ? 'filter-none' : 'blur-md'}>{children}</div>;
};

export default BlurredBg;
