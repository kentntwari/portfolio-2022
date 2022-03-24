import React, { forwardRef } from 'react';

const Circle = forwardRef(({ ...props }, ref) => {
  const {
    bgColor,
    blur = '140px',
    coordinatesX,
    coordinatesY,
    width = '384px',
    height = '384px',
    className,
  } = props;

  return (
    <>
      <div
        ref={ref}
        className={`${className ? className : 'auto'} ${bgColor} transform absolute ${
          coordinatesX ? coordinatesX : 'left-0'
        } ${coordinatesY ? coordinatesY : 'top-0'} -z-10 rounded-full`}
        style={{ filter: `blur(${blur})`, width: `${width}`, height: `${height}` }}></div>
    </>
  );
});

export default Circle;
