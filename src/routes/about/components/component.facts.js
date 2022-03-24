import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchBackground from '../../../utilities/hooks/useFetchBackground';

import { section } from '../styles/styles.facts';

import Fact from './component.fact';
const Facts = () => {
  const { facts } = useFetchBackground();

  return (
    <section className={section}>
      {facts &&
        facts.map(
          (res, index) =>
            res && (
              <Fragment key={uuidv4()}>
                <Fact data={res} index={index} />
              </Fragment>
            )
        )}
    </section>
  );
};

export default Facts;
