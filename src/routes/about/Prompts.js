import React, { Fragment, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ButtonPrimary from '../../components/buttons/ButtonPrimary';

const Prompts = () => {
  const contactLinks = useCallback(() => {
    const links = ['Indeed', 'Linkedin'];

    return links.map((link) => (
      <Fragment key={uuidv4()}>
        <ButtonPrimary url="/" className="py-5 px-7.5 text-center">
          Contact me on {link}
        </ButtonPrimary>
      </Fragment>
    ));
  }, []);

  return (
    <section className="mt-28 grid grid-cols-1 gap-7.5">
      <h2>I'd love to work with you or be part of your team</h2>
      <div className="flex flex-col gap-5">{contactLinks()}</div>
    </section>
  );
};

export default Prompts;
