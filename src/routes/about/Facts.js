import React, { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchBackground from '../../utilities/hooks/useFetchBackground';

import CircleFactsAboutRight from '../../components/background/aboutPage/CircleFactsAboutRight';

const Facts = () => {
  const { facts } = useFetchBackground();

  const applyCardStyles = useMemo(() => {
    return 'relative bg-white-full p-5 font-body shadow-[0_4px_30px_rgba(196,196,196,0.25)] rounded-md';
  }, []);

  return (
    <section className="relative flex flex-col justify-start gap-[92px]">
      {facts !== null &&
        facts.map(
          (res, index) =>
            res && (
              <div
                key={uuidv4()}
                className={`${
                  index === 0 ? `mt-[60px] ${applyCardStyles}` : `${applyCardStyles}`
                }`}>
                <p> {res.description}</p>

                <img
                  className="absolute -top-[60px] -left-5 w-[90px] h-[90px]"
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
