import React, { forwardRef, useEffect } from 'react';

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

  useEffect(() => {
    if (ref && className) ref.current.classList.add(className);
  }, [ref, className]);

  return (
    <>
      <div
        ref={ref}
        className={`${bgColor} transform absolute ${
          coordinatesX ? coordinatesX : 'left-0'
        } ${coordinatesY ? coordinatesY : 'top-0'} -z-10 rounded-full`}
        style={{ filter: `blur(${blur})`, width: `${width}`, height: `${height}` }}></div>
    </>
  );
});

export default Circle;
