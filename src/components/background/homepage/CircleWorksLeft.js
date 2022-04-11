import React, { Fragment } from 'react';

import Circle from '../Circle';

const CircleWorksHomeLeft = () => {
  return (
    <Fragment>
      <Circle
        className="lg:hidden"
        bgColor="bg-pink-16"
        coordinatesX="left-0"
        coordinatesY="top-[270px]"
      />
    </Fragment>
  );
};

export default CircleWorksHomeLeft;
