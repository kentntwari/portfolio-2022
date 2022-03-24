import React from 'react';

import { applyCustomStyles as customStyles } from '../../../utilities/functions/customFactsStyles';
import { positionFactIcon as icon } from '../../../utilities/functions/positionFactIcon';
import useWatchWindowSize from '../../../utilities/hooks/useWatchWindowSize';

import { defaultDivWrapperStyles, imgDefaultStyles } from '../styles/styles.fact';

const Fact = ({ data, index }) => {
  const [, isWithinMinWidth, ,] = useWatchWindowSize({ minWidth: '1024px' });

  return (
    <div
      className={`${index === 0 ? 'mt-56 md:mt-48' : 'mt-auto'} ${customStyles(
        data.description
      )} ${defaultDivWrapperStyles}`}>
      <p> {data.description}</p>

      <img
        className={`${imgDefaultStyles} ${
          isWithinMinWidth
            ? icon(isWithinMinWidth, data.description)
            : '-top-[60px] -left-5'
        } `}
        src={data.icon}
        alt="icon"
      />
    </div>
  );
};

export default Fact;
