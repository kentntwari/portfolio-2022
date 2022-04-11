import React from 'react';

import useFetchBackground from '../../../utilities/hooks/useFetchBackground';
import useWatchWindowSize from '../../../utilities/hooks/useWatchWindowSize';

import HandleState from '../../../components/state/HandleState';
import { LoadHeadshot } from '../../../components/loaders/aboutpage/Headshot';

import { default_headshot_styles } from '../styles/hero';

const Headshot = () => {
  const { response } = useFetchBackground();

  const [isWithinMaxWidth, , ,] = useWatchWindowSize({ maxWidth: '419px' });

  return (
    <HandleState showLoader={response.image ? false : true} loader={<LoadHeadshot />}>
      {response.image && (
        <img
          className={`${default_headshot_styles} ${
            isWithinMaxWidth ? 'scale-[2]' : 'scale-[1.5]'
          }`}
          src={response.image}
          alt="Kent-Ntwari"
        />
      )}
    </HandleState>
  );
};

export default Headshot;
