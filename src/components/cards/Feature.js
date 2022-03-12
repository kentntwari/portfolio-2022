import React from 'react';

import { generateBgColor as bg } from '../../utilities/functions/generateBgColor';

const Feature = ({ data, index }) => {
  return (
    <div
      className={`w-full ${bg(index)} p-5 lg:p-10
     shadow-[0_4px_4px_rgba(196,196,196,0.25)] rounded-[10px]`}>
      <h4 className="w-9/12 lg:w-full mx-auto text-center lg:text-left capitalize">{data}</h4>
    </div>
  );
};

export default Feature;
