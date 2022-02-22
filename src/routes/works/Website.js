import React from 'react';

import ButtonSecondary from '../../components/buttons/ButtonSecondary';

const Website = ({ title, description }) => {
  return (
    <article className="bg-white-full p-[20px] flex flex-col gap-[20px] shadow-[0_4px_4px_rgba(196,196,196,0.25)]">
      <h4 className="text-center">{title}</h4>
      <p className="text-center">{description}</p>
      <ButtonSecondary removeClasses={['px-10']} addClasses={['px-[40px]', 'm-auto']}>
        Learn More
      </ButtonSecondary>
    </article>
  );
};

export default Website;
