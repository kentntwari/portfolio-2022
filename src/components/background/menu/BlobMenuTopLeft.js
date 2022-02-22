import React, { forwardRef } from 'react';

const BlobMenuTopLeft = forwardRef(({ hiddenOnMobile }, ref) => {
  return (
    <svg
      ref={ref}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        hiddenOnMobile ? 'hidden' : 'block'
      } absolute top-0 left-0 -z-10 transform scale-[2.05] -translate-x-[150px] -translate-y-[100px]`}>
      <path
        fill="#ff77b8"
        d="M42.5,-45.4C56.1,-29,68.6,-14.5,69.3,0.7C70,16,58.9,31.9,45.4,46.7C31.9,61.6,16,75.3,0,75.3C-16,75.3,-32,61.7,-48.3,46.8C-64.6,32,-81.2,16,-80,1.2C-78.8,-13.7,-59.9,-27.3,-43.6,-43.7C-27.3,-60.1,-13.7,-79.2,0.4,-79.6C14.5,-80.1,29,-61.8,42.5,-45.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );
});

export default BlobMenuTopLeft;
