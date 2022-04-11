import React from 'react';

import useScrollToTop from '../../utilities/hooks/useScrollToTop';

import ButtonSecondary from '../buttons/ButtonSecondary';

import { article, divWrapper, button } from '../../styles/cards/website';

const Website = ({ title, description, slug, bgColor }) => {
  const scrollToTop = useScrollToTop();

  return (
    <article className={`${bgColor} ${article}`}>
      <div className={divWrapper}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <ButtonSecondary url={`/works/${slug}`} variant={button} event={scrollToTop}>
        Learn More
      </ButtonSecondary>
    </article>
  );
};

export default Website;
