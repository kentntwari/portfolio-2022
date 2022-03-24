import React, { Fragment, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchBackground from '../../../utilities/hooks/useFetchBackground';

import {
  section,
  divWrapperOuter,
  divWrapperInner,
  heading,
  paragraph,
  articleFAQ,
  divQuestionFAQ,
  divAnswerFAQ,
} from '../styles/styles.FAQ';

import CircleFAQAboutLeft from '../../../components/background/aboutPage/component.circleFAQLeft';

const FAQ = () => {
  const { FAQ } = useFetchBackground();

  const displayFAQ = useCallback(() => {
    return FAQ.map(([, content]) => (
      <article key={uuidv4()} className={articleFAQ}>
        <div className={divQuestionFAQ}>
          <p className="xl:w-[489px]">{content.question}</p>
        </div>
        <div className={divAnswerFAQ}>
          <p className="xl:w-[500px]">{content.answer}</p>
        </div>
      </article>
    ));
  }, [FAQ]);

  return (
    <section className={section}>
      <div className={divWrapperOuter}>
        <h2 className={heading}>Still want to know more?</h2>
        <p className={paragraph}>
          I compiled a few questions that might get across and did my best to answer them.
          Hope it helps!
        </p>
      </div>

      <div className={divWrapperInner}>{displayFAQ()}</div>

      <Fragment>
        <CircleFAQAboutLeft />
      </Fragment>
    </section>
  );
};

export default FAQ;
