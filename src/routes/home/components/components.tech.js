import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchTechUsed from '../../../utilities/hooks/useFetchTechUsed';

import { section, heading, divWrapper, img } from '../styles/styles.tech';

import CircleTechBottom from '../../../components/background/homepage/component.circleTechBottom';

const Tech = () => {
  const tech = useFetchTechUsed();

  return (
    <section className={section}>
      <h2 className={heading}>Here's some of the technologies I use in my projects</h2>

      <div className={divWrapper}>
        {tech !== null &&
          tech.map(({ logo, tech: name }) => (
            <img key={uuidv4()} className={img} src={logo} alt={name} title={name} />
          ))}
      </div>

      <Fragment>
        <CircleTechBottom />
      </Fragment>
    </section>
  );
};

export default Tech;
