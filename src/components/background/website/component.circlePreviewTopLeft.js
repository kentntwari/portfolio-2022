import React, { Fragment } from 'react';

import useWatchWindowSize from '../../../utilities/hooks/useWatchWindowSize';

import Circle from '../component.circle';

const CirclePreviewTopLeft = () => {
  const [, isWithinMinWidth, ,] = useWatchWindowSize({ minWidth: '1024px' });

  return (
    <Fragment>
      {isWithinMinWidth && (
        <Circle
          bgColor="bg-pink-21"
          blur="270px"
          coordinatesX="-top-20 2xl:-top-56"
          coordinatesY="-right-[100px] 2xl:-right-40"
        />
      )}
    </Fragment>
  );
};

export default CirclePreviewTopLeft;
