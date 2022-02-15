import React, { Fragment, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useFetchBackground from '../../utilities/hooks/useFetchBackground';

import BlobQuestionsAboutCenter from '../../components/background/aboutPage/BlobQuestionsAboutCenter';

const FAQ = () => {
  const { FAQ } = useFetchBackground();

  const displayFAQ = useCallback(() => {
    return FAQ.map(([, content]) => (
      <article key={uuidv4()}>
        <div className="bg-white-full py-[10px] px-[20px] rounded-t-md">
          <p>{content.question}</p>
        </div>
        <div className="bg-white-70 py-[10px] px-[20px] rounded-b-md">
          <p>{content.answer}</p>
        </div>
      </article>
    ));
  }, [FAQ]);

  return (
    <section className="relative w-full mt-[104px]">
      <h2 className="text-center mb-[15px]">Still want to know more?</h2>
      <p className="text-center mb-[35px]">
        I compiled a few questions that might get across and did my best to answer them.
        Hope it helps!
      </p>

      <div className="w-full flex flex-col items-start gap-[15px]">{displayFAQ()}</div>

      <Fragment>
        <BlobQuestionsAboutCenter />
      </Fragment>
    </section>
  );
};

export default FAQ;
