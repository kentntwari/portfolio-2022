import React, { Fragment } from 'react';

import { ContactLinks } from '../../../components/blocks/ContactLinks';

import { section, heading, divWrapper } from '../styles/prompts';

import CirclePromptsAboutRight from '../../../components/background/aboutPage/CirclePromptsRight';

const Prompts = () => {
  return (
    <section className={section}>
      <h2 className={heading}>I'd love to work with you or be part of your team</h2>
      <div className={divWrapper}>
        <ContactLinks />
      </div>

      <Fragment>
        <CirclePromptsAboutRight />
      </Fragment>
    </section>
  );
};

export default Prompts;
