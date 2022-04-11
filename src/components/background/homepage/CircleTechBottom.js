import React, { Fragment } from 'react';

import Circle from '../Circle';

const CircleTechBottom = () => {
  return (
    <Fragment>
      <Circle
        className="lg:hidden"
        bgColor="bg-blue-13"
        coordinatesY="top-[151px]"
        coordinatesX="-left-[35px]"
      />

      <Circle
        className="hidden lg:block"
        bgColor="bg-blue-13"
        coordinatesY="-bottom-[290px] xl:-bottom-[140px] 2xl:-bottom-[110px]"
        coordinatesX="right-[35px] 2xl:right-[215px]"
      />

      <Circle
        className="hidden lg:block"
        bgColor="bg-pink-21"
        coordinatesY="-bottom-[140px] 2xl:-bottom-[110px]"
        coordinatesX="left-[220px] 2xl:left-[260px]"
      />
    </Fragment>
  );
};

export default CircleTechBottom;
