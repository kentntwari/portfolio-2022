import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchTechUsed from '../../../utilities/hooks/useFetchTechUsed';

import HandleState from '../../../components/state/component.handleState';
import { LoadTech } from '../../../components/loaders/homepage/loaders.tech';

import { section, heading, divWrapper, img } from '../styles/styles.tech';

import CircleTechBottom from '../../../components/background/homepage/component.circleTechBottom';

const Tech = () => {
  const { is_api_valid, is_error, is_loading, response } = useFetchTechUsed();

  return (
    <section className={section}>
      <h2 className={heading}>Here's some of the technologies I use in my projects</h2>

      <div className={divWrapper}>
        {!is_api_valid && <HandleState showLoader={true} loader={<LoadTech />} />}

        {is_error && <HandleState showError={true} error={<LoadTech />} />}

        <HandleState showLoader={is_loading} loader={<LoadTech />}>
          {response &&
            response.map(({ logo, tech: name }) => (
              <img key={uuidv4()} className={img} src={logo} alt={name} title={name} />
            ))}
        </HandleState>
      </div>

      <Fragment>
        <CircleTechBottom />
      </Fragment>
    </section>
  );
};

export default Tech;
