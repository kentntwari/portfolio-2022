import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { title } from '../../../styles/loaders/loadHero';
import * as styles from '../../../styles/loaders/loadChallenges';

export const LoadHero = () => {
  return (
    <div className={styles.wrapper_div}>
      <div className={title}></div>
      <div className={styles.wrapper_paragraph}>
        <div className={`w-11/12 ${styles.paragraph}`}></div>
        <div className={`w-10/12 ${styles.paragraph}`}></div>
        <div className={`w-8/12 ${styles.paragraph}`}></div>
      </div>
      <div className={styles.wrapper_button}>
        {Array(2)
          .fill(null)
          .map(() => (
            <div key={uuidv4()} className={styles.button}></div>
          ))}
      </div>
    </div>
  );
};
