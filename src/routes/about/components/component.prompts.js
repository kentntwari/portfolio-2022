import React, { Fragment, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ButtonPrimary from '../../../components/buttons/component.buttonPrimary';

import { section, heading, divWrapper, button } from '../styles/styles.prompts';

import CirclePromptsAboutRight from '../../../components/background/aboutPage/component.circlePromptsRight';

const Prompts = () => {
  const contactLinks = useCallback(() => {
    const links = ['Indeed', 'Linkedin'];

    return links.map((link) => (
      <Fragment key={uuidv4()}>
        <ButtonPrimary url="/" className={button}>
          Contact me on {link}
        </ButtonPrimary>
      </Fragment>
    ));
  }, []);

  return (
    <section className={section}>
      <h2 className={heading}>I'd love to work with you or be part of your team</h2>
      <div className={divWrapper}>{contactLinks()}</div>

      <Fragment>
        <CirclePromptsAboutRight />
      </Fragment>
    </section>
  );
};

export default Prompts;
