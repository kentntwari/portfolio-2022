import React, { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchBackground from '../../utilities/hooks/useFetchBackground';

import CircleFactsAboutRight from '../../components/background/aboutPage/CircleFactsAboutRight';

const Facts = () => {
  const { facts } = useFetchBackground();

  const applyCardStyles = useCallback(() => {
    return 'relative bg-white-full p-5 font-body shadow-[30px_38px_37px_20px_rgba(196,196,196,0.25)]';
  }, []);

  return (
    <section className="relative flex flex-col justify-start gap-[92px]">
      {facts.map(
        (res, index) =>
          res && (
            <div
              key={uuidv4()}
              className={`${
                index === 0 ? `mt-[60px] ${applyCardStyles()}` : `${applyCardStyles()}`
              }`}>
              <p> {res.description}</p>

              <img
                className="absolute -top-[60px] -left-[20px] w-[90px] h-[90px]"
                src={res.icon}
                alt="icon"
              />
            </div>
          )
      )}

      <CircleFactsAboutRight />
    </section>
  );
};

export default Facts;
