import React, { Fragment } from 'react';

import useWatchWindowSize from '../../../utilities/hooks/useWatchWindowSize';

import Circle from '../Circle';

// circle at the top lef of the page
const CircleTopLeft = () => {
  const [isWithinMaxWidth, isWithinMinWidth, ,] = useWatchWindowSize({
    maxWidth: '768px',
    minWidth: '1024px',
  });

  return (
    <Fragment>
      {isWithinMaxWidth && (
        <Circle
          bgColor="bg-blue-13"
          coordinatesX="left-0 -translate-x-[174px]"
          coordinatesY="top-10 -translate-y-[148px]"
        />
      )}

      {isWithinMinWidth && (
        <Circle
          bgColor="bg-blue-13"
          coordinatesX="left-0 -translate-x-[137px]"
          coordinatesY="top-10 -translate-y-[133px]"
        />
      )}
    </Fragment>
  );
};

export default CircleTopLeft;
