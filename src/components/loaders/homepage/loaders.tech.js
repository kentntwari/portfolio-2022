import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { divWrapper, img } from '../../../routes/home/styles/styles.tech';

export const LoadTech = () => {
  return (
    <div className={divWrapper}>
      {Array(5)
        .fill(null)
        .map(() => (
          <div key={uuidv4()} className="bg-gray-full-100">
            <div className={`${img} animate-pulse bg-gray-full-400`}></div>
          </div>
        ))}
    </div>
  );
};
