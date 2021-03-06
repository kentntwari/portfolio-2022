import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  card,
  wrapper_div,
  wrapper_div_question,
  paragraph_question,
  paragraph_answer,
  wrapper_div_answer,
} from '../../../styles/loaders/loadFAQ';

export const LoadFAQ = () => {
  return (
    <div className={card}>
      {Array(3)
        .fill(null)
        .map(() => (
          <div key={uuidv4()} className={wrapper_div}>
            <div className={wrapper_div_question}>
              <div className={`w-[250px] md:w-11/12 ${paragraph_question} `}></div>
              <div className={`w-[250px] ${paragraph_question}`}></div>
            </div>
            <div className={wrapper_div_answer}>
              <div className={`w-[250px] md:w-full ${paragraph_answer}`}></div>
              <div className={`w-[250px] md:w-11/12 ${paragraph_answer}`}></div>
              <div className={`w-[250px] md:w-9/12 ${paragraph_answer}`}></div>
            </div>
          </div>
        ))}
    </div>
  );
};
