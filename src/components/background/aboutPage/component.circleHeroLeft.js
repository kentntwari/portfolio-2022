import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

import useWatchWindowSize from '../../../utilities/hooks/useWatchWindowSize';

import Circle from '../component.circle';

const CircleHeroAboutLeft = () => {
  const [isWithinMaxWidth, isWithinMinWidth, ,] = useWatchWindowSize({
    maxWidth: '768px',
    minWidth: '1024px',
  });

  return (
    <Fragment>
      {isWithinMaxWidth && (
        <Circle
          bgColor="bg-pink-13"
          coordinatesX="-left-[238px]"
          coordinatesY="top-[250px]"
        />
      )}

      {isWithinMinWidth && (
        <Circle
          bgColor="bg-pink-13"
          coordinatesX="lg:right-32 xl:right-80"
          coordinatesY="lg:top-[125px]"
        />
      )}
    </Fragment>
  );
};

export default CircleHeroAboutLeft;
