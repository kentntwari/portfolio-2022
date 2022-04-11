import React, { Fragment } from 'react';

import useWatchWindowSize from '../../../utilities/hooks/useWatchWindowSize';

import Circle from '../Circle';

const CircleFeaturesBottomLeft = () => {
  const [, isWithinMinWidth, ,] = useWatchWindowSize({ minWidth: '1440px' });

  return (
    <Fragment>
      {isWithinMinWidth && (
        <Circle bgColor="bg-pink-21" blur="270px" coordinatesY="top-[110px]" />
      )}
    </Fragment>
  );
};

export default CircleFeaturesBottomLeft;
