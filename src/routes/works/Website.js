import React from 'react';

import { setButtonUrl as data } from '../../utilities/functions/setButtonUrl';

import ButtonSecondary from '../../components/buttons/ButtonSecondary';

const Website = ({ title, description, slug, bgColor }) => {
  return (
    <article
      className={`${bgColor} p-[20px] flex flex-col gap-10 
      shadow-[0_4px_4px_rgba(196,196,196,0.25)] rounded-[10px]`}>
      <div className="flex flex-col items-center gap-5">
        <h4 className="text-center">{title}</h4>
        <p className="text-center">{description}</p>
      </div>

      <ButtonSecondary {...data(slug)}>Learn More</ButtonSecondary>
    </article>
  );
};

export default Website;
