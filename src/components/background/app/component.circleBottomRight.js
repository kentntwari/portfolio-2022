import React, { Fragment } from 'react';

import useWatchWindowSize from '../../../utilities/hooks/useWatchWindowSize';

import Circle from '../component.circle';

// blurred circle at the bottom of the page
const CircleBottomRight = () => {
  const [isWithinMaxWidth, isWithinMinWidth, ,] = useWatchWindowSize({
    maxWidth: '768px',
    minWidth: '1024px',
  });

  return (
    <Fragment>
      {isWithinMaxWidth && (
        <Circle
          bgColor="bg-green-14"
          blur="80px"
          coordinatesX="-right-[65px]"
          coordinatesY="bottom-0"
          width="300px"
          height="300px"
        />
      )}

      {isWithinMinWidth && (
        <Circle
          bgColor="bg-green-14"
          blur="270px"
          coordinatesX="right-[65px] lg:right-[60px] xl:right-[104px]"
          coordinatesY="bottom-[40px] lg:bottom-11 xl:bottom-[220px]"
        />
      )}
    </Fragment>
  );
};

export default CircleBottomRight;
