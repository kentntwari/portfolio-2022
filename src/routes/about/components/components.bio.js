import React, { Fragment, useMemo } from 'react';

import useFetchBackground from '../../../utilities/hooks/useFetchBackground';
import useWatchWindowSize from '../../../utilities/hooks/useWatchWindowSize';

import HandleState from '../../../components/state/component.handleState';
import { LoadBio } from '../../../components/loaders/aboutpage/loaders.bio';

import { heading, paragraph } from '../styles/styles.hero';

const Bio = () => {
  const { response } = useFetchBackground();

  const [isWithinMaxWidth, , ,] = useWatchWindowSize({ maxWidth: '768px' });

  return (
    <Fragment>
      <HandleState showLoader={response.bio ? false : true} loader={<LoadBio />}>
        <h1 className={heading}>
          Hello,
          {isWithinMaxWidth && <br />} my name is Kent.
        </h1>

        <p className={paragraph}>{response.bio && response.bio}</p>
      </HandleState>
    </Fragment>
  );
};

export default Bio;
