import React, { Fragment } from 'react';

import {
  title,
  wrapper_div,
  paragraph_upper,
  paragraph_last,
  paragraph_middle,
} from '../../../styles/loaders/loadBio';

export const LoadBio = () => {
  return (
    <Fragment>
      <div className={title}></div>
      <div className={wrapper_div}>
        <div className={paragraph_upper}></div>
        <div className={paragraph_middle}></div>
        <div className={paragraph_last}></div>
      </div>
    </Fragment>
  );
};
