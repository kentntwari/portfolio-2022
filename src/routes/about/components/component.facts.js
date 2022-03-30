import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchBackground from '../../../utilities/hooks/useFetchBackground';

import HandleState from '../../../components/state/component.handleState';

import { section } from '../styles/styles.facts';

import Fact from './component.fact';
const Facts = () => {
  const { response } = useFetchBackground();

  return (
    <section className={section}>
      <HandleState showLoader={response.facts ? false : true}>
        {response.facts &&
          response.facts.map(
            (res, index) =>
              res && (
                <Fragment key={uuidv4()}>
                  <Fact data={res} index={index} />
                </Fragment>
              )
          )}
      </HandleState>
    </section>
  );
};

export default Facts;
