import React from 'react';

import useWatchWindowSize from '../../../utilities/hooks/useWatchWindowSize';

const Headshot = ({ asset: image }) => {
  const [isWithinMaxWidth, isWithinMinWidth, ,] = useWatchWindowSize({
    maxWidth: '419px',
    minWidth: '420px',
  });

  return (
    <img
      className={`mt-36 md:mt-24 xl:w-[790px] transform ${
        isWithinMaxWidth ? 'scale-[2]' : 'auto'
      } ${
        isWithinMinWidth ? 'scale-[1.5]' : 'auto'
      } md:scale-100 translate-x-5 3xl:translate-x-96 lg:translate-x-72 xl:translate-x-60 lg:-translate-y-4`}
      src={image}
      alt="Kent-Ntwari"
    />
  );
};

export default Headshot;
