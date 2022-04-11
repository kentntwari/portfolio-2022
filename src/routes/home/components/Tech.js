import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchTechUsed from '../../../utilities/hooks/useFetchTechUsed';

import HandleState from '../../../components/state/HandleState';
import { LoadTech } from '../../../components/loaders/homepage/Tech';

import { section, heading, divWrapper, img } from '../styles/tech';

import CircleTechBottom from '../../../components/background/homepage/CircleTechBottom';

const Tech = () => {
  const { is_api_valid, is_error, is_loading, response } = useFetchTechUsed();

  if (is_loading || !is_api_valid)
    return <HandleState showLoader={true} loader={<LoadTech />} />;

  if (is_error) return <HandleState showError={true} error={<LoadTech />} />;

  return (
    <HandleState showLoader={response ? false : true} loader={<LoadTech />}>
      <section className={section}>
        <h2 className={heading}>Here's some of the technologies I use in my projects</h2>

        <div className={divWrapper}>
          {response &&
            response.map(({ logo, tech: name }) => (
              <img key={uuidv4()} className={img} src={logo} alt={name} title={name} />
            ))}
        </div>

        <Fragment>
          <CircleTechBottom />
        </Fragment>
      </section>
    </HandleState>
  );
};

export default Tech;
