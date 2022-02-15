import React from 'react';

const Headshot = ({ asset: image }) => {
  return (
    <img
      className="transform scale-[2] translate-x-[20px]"
      src={image}
      alt="Kent-Ntwari"
    />
  );
};

export default Headshot;
