import React from 'react';

const CircleCenter = ({
  bgColor = 'bg-blue-13',
  coordinatesX,
  coordinatesY,
  width = '384px',
  height = '384px',
}) => {
  return (
    <div
      className={`${bgColor} absolute ${coordinatesX ? coordinatesX : undefined} ${
        coordinatesY ? coordinatesY : undefined
      } -z-10 w-[${width}] h-[${height}] my-auto mx-auto rounded-full blur-[140px]`}></div>
  );
};

export default CircleCenter;
