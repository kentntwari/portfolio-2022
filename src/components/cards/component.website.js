import React from 'react';

import ButtonSecondary from '../buttons/component.buttonSecondary';

import { article, divWrapper, button } from '../../styles/cards/styles.website';

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
