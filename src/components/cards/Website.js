import React from 'react';

import ButtonSecondary from '../buttons/ButtonSecondary';

const Website = ({ title, description, slug, bgColor }) => {
  return (
    <article
      className={`${bgColor} p-5 flex flex-col gap-7.5 
      shadow-[0_4px_4px_rgba(196,196,196,0.25)] rounded-[10px]`}>
      <div className="flex flex-col gap-5">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <ButtonSecondary url={`/works/${slug}`} className="w-fit py-2.5 px-10">
        Learn More
      </ButtonSecondary>
    </article>
  );
};

export default Website;
