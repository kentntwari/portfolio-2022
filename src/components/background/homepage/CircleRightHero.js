import React, { useRef } from 'react';

import Circle from '../Circle';

const CircleRightHero = () => {
  const circle_right = useRef();

  return (
    <Circle
      ref={circle_right}
      bgColor="bg-pink-21"
      blur="270px"
      coordinatesX="right-0 translate-x-[361px]"
      coordinatesY="bottom-0 translate-y-[73px]"
    />
  );
};

export default CircleRightHero;
