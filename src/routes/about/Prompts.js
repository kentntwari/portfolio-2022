import React, { Fragment, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ButtonPrimary from '../../components/buttons/ButtonPrimary';

const Prompts = () => {
  const contactLinks = useCallback(() => {
    const links = ['Indeed', 'Linkedin'];

    return links.map((link) => (
      <Fragment key={uuidv4()}>
        <ButtonPrimary url="/">Contact me on {link}</ButtonPrimary>
      </Fragment>
    ));
  }, []);

  return (
    <section className="mt-[104px] grid grid-cols-1 gap-[36px] place-items-center">
      <h2 className="w-[270px] text-center">
        I'd love to work with you or be part of your team
      </h2>
      <div className="flex flex-col gap-[20px]">{contactLinks()}</div>
    </section>
  );
};

export default Prompts;
