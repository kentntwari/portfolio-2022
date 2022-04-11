import React, { Fragment } from 'react';

import useWatchWindowSize from '../../../utilities/hooks/useWatchWindowSize';

import Circle from '../Circle';

const CircleHeroAboutRight = () => {
  const [isWithinMaxWidth, isWithinMinWidth, ,] = useWatchWindowSize({
    maxWidth: '768px',
    minWidth: '1024px',
  });

  return (
    <Fragment>
      {isWithinMaxWidth && (
        <Circle
          bgColor="bg-blue-13"
          coordinatesX="left-[70px]"
          coordinatesY="translate-y-[250px]"
        />
      )}

      {isWithinMinWidth && (
        <Circle
          bgColor="bg-blue-13"
          coordinatesX="-right-10 xl:right-60"
          coordinatesY="top-36 xl:top-80"
        />
      )}
    </Fragment>
  );
};

export default CircleHeroAboutRight;
