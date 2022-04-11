import React, { Fragment } from 'react';

import Circle from '../Circle';

const CircleRightHero = () => {
  return (
    <Fragment>
      <Circle
        className="md:hidden"
        bgColor="bg-pink-21"
        blur="270px"
        coordinatesX="right-0 translate-x-[361px]"
        coordinatesY="bottom-0 translate-y-[73px]"
      />

      <Circle
        className="hidden lg:block"
        bgColor="bg-pink-21"
        coordinatesX="right-0 translate-x-[5.625rem] 2xl:-translate-x-16"
        coordinatesY="top-0 translate-y-[29.75rem] 2xl:-translate-y-40"
      />

      <Circle
        className="hidden lg:block"
        bgColor="bg-green-14"
        coordinatesX="right-0 translate-x-[8.625rem]"
        coordinatesY="top-0 translate-y-[12rem]"
      />
    </Fragment>
  );
};

export default CircleRightHero;
