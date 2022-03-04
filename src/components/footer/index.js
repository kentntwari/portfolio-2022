import React from 'react';

import Navigation from '../menu/Navigation';
import Copyright from '../../utilities/images/copyright.png';

const Footer = () => {
  return (
    <footer className="mt-33 flex flex-col gap-[8.25rem]">
      <section className="flex flex-col items-center gap-[43px]">
        <div className="flex flex-col gap-2 5">
          <h2 className="text-center">Let's get in touch</h2>
          <p className="text-center w-[286px] m-auto">
            I would love to contribute to your business success, whether that involves
            hiring me as part of your team or for one of your projects.
          </p>
        </div>

        <section className="w-full flex flex-col items-center gap-5">
          <p
            className="font-bold underline underline-offset-8
           decoration-2 decoration-black-full">
            Contact me on Indeed
          </p>
          <p
            className="font-bold underline underline-offset-8
           decoration-2 decoration-black-full">
            Contact me on Linkedin
          </p>
        </section>
      </section>

      <section className="w-full flex flex-col gap-7">
        <div className="bg-black-full w-full h-[1px]"></div>

        <section className="w-[215px] h-[164px] mx-auto flex flex-col justify-between">
          <Navigation
            hiddenOnMobile={false}
            className="w-full flex justify-between"
            applyClassOnLink="font-bold"
          />

          <p className="flex items-center gap-2.5">
            <span>
              <img className="w-[20px] h-[20px]" src={Copyright} alt="copyright" />
            </span>
            Kent Ntwari. 2022
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
