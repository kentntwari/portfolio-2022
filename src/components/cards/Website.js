import React from 'react';

import ButtonSecondary from '../buttons/ButtonSecondary';

import { article, divWrapper, button } from '../../styles/cards/website';

const Website = ({ title, description, slug, bgColor }) => {
  return (
    <article className={`${bgColor} ${article}`}>
      <div className={divWrapper}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <ButtonSecondary url={`/works/${slug}`} variant={button}>
        Learn More
      </ButtonSecondary>
    </article>
  );
};

export default Website;
