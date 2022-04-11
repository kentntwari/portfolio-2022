import React, { Fragment, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchBackground from '../../../utilities/hooks/useFetchBackground';

import HandleState from '../../../components/state/HandleState';
import { LoadFAQ } from '../../../components/loaders/aboutpage/FAQ';

import {
  section,
  divWrapperOuter,
  divWrapperInner,
  heading,
  paragraph,
  articleFAQ,
  divQuestionFAQ,
  divAnswerFAQ,
} from '../styles/faq';

import CircleFAQAboutLeft from '../../../components/background/aboutPage/CircleFAQLeft';

const FAQ = () => {
  const { response } = useFetchBackground();

  const displayFAQ = useCallback(
    () => (
      <HandleState showLoader={response.FAQ ? false : true} loader={<LoadFAQ />}>
        {response.FAQ &&
          Object.values(response.FAQ).map(({ question, answer }) => (
            <article key={uuidv4()} className={articleFAQ}>
              <div className={divQuestionFAQ}>
                <p className="xl:w-[489px]">{question}</p>
              </div>
              <div className={divAnswerFAQ}>
                <p className="xl:w-[500px]">{answer}</p>
              </div>
            </article>
          ))}
      </HandleState>
    ),
    [response.FAQ]
  );

  return (
    <Fragment>
      <section className={section}>
        <div className={divWrapperOuter}>
          <h2 className={heading}>Still want to know more?</h2>
          <p className={paragraph}>
            I compiled a few questions that might get across and did my best to answer
            them. Hope it helps!
          </p>
        </div>

        <div className={divWrapperInner}>{displayFAQ()}</div>

        <Fragment>
          <CircleFAQAboutLeft />
        </Fragment>
      </section>
    </Fragment>
  );
};

export default FAQ;
