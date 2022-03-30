import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  wrapper_div,
  wrapper_title,
  wrapper_paragraph,
  wrapper_button,
  title,
  paragraph,
  button,
} from '../../../styles/loaders/styles.loadChallenges';

export const LoadChallenges = () => {
  return (
    <div className={wrapper_div}>
      <div className={wrapper_title}>
        <div className={`w-[500px] ${title}`}></div>
        <div className={`w-[600px] ${title}`}></div>
      </div>

      <div className={wrapper_paragraph}>
        <div className={`w-11/12 ${paragraph}`}></div>
        <div className={`w-10/12 ${paragraph}`}></div>
        <div className={`w-8/12 ${paragraph}`}></div>
      </div>
      <div className={wrapper_button}>
        {Array(2)
          .fill(null)
          .map(() => (
            <div key={uuidv4()} className={button}></div>
          ))}
      </div>
    </div>
  );
};
