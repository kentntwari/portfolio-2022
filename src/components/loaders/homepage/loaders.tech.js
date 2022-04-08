import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { section, divWrapper, img } from '../../../routes/home/styles/styles.tech';

export const LoadTech = () => {
  return (
    <section className={section}>
      <div className="flex flex-col items-center gap-4">
        <div className="animate-pulse w-[200px] lg:w-[600px] h-6 bg-gray-full-400 rounded-full"></div>
        <div className="animate-pulse w-[250px] md:w-[400px] lg:w-[650px] h-6 bg-gray-full-400 rounded-full"></div>
        <div className="animate-pulse w-[250px] md:w-[350px] lg:w-[400px] h-6 bg-gray-full-400 rounded-full"></div>
      </div>
      <div className={divWrapper}>
        {Array(5)
          .fill(null)
          .map(() => (
            <div key={uuidv4()} className="bg-gray-full-100">
              <div className={`${img} animate-pulse bg-gray-full-400`}></div>
            </div>
          ))}
      </div>
    </section>
  );
};
