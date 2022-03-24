import React from 'react';

import { generateBgColor as bg } from '../../utilities/functions/generateBgColor';

import { divWrapper, heading } from '../../styles/cards/styles.feature';

const Feature = ({ data, index }) => {
  return (
    <div className={`${bg(index)} ${divWrapper} `}>
      <h4 className={heading}>{data}</h4>
    </div>
  );
};

export default Feature;
