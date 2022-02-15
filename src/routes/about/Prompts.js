import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Prompts = () => {
  const contactLinks = useCallback(() => {
    const links = ['Indeed', 'Linkedin'];

    return links.map((link) => (
      <Link
        key={uuidv4()}
        to="/"
        className="bg-pink-100 py-[10px] px-[40px]
        shadow-[0_4px_4px_rgba(196,196,196,0.25)] rounded-3xl
        text-white-full text-center font-display">
        Contact me on {link}
      </Link>
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
