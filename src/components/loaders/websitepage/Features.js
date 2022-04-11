import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { section } from '../../../routes/website/styles/features';
import { card, paragraph } from '../../../styles/loaders/loadFeatures';

export const LoadFeatures = () => {
  return (
    <div className={section}>
      {Array(6)
        .fill(null)
        .map(() => (
          <div key={uuidv4()} className={card}>
            <div className={`w-full ${paragraph}`}></div>
            <div className={`w-10/12 ${paragraph}`}></div>
          </div>
        ))}
    </div>
  );
};
