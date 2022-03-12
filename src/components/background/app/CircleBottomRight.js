import React, { useRef } from 'react';

import Circle from '../Circle';

const CircleBottomRight = () => {
  const circle_bottom_right = useRef();

  return (
    <Circle
      ref={circle_bottom_right}
      bgColor="bg-green-14"
      blur="80px"
      coordinatesX="-right-[65px]"
      coordinatesY="bottom-0"
      width="300px"
      height="300px"
    />
  );
};

export default CircleBottomRight;
