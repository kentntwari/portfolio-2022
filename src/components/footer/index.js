import React from 'react';

import Navigation from '../menu/Navigation';
import Copyright from '../../utilities/images/copyright.png';
import { Fragment } from 'react/cjs/react.production.min';

const Footer = () => {
  return (
    <Fragment>
      <div className="hidden lg:block lg:mt-33 lg:bg-black-full lg:w-full lg:h-[1px]"></div>

      <footer className="mt-33 lg:mt-7 flex flex-col lg:flex-row-reverse lg:items-center gap-14 lg:gap-7">
        <section className="flex flex-col gap-[43px]">
          <div className="grow-[2] flex flex-col gap-5">
            <h2 className="lg:text-right">Let's get in touch</h2>
            <p className="lg:text-right">
              I would love to contribute to your business success, whether that involves
              hiring me as part of your team or for one of your projects.
            </p>
          </div>

          <section className="w-full flex flex-col lg:items-end gap-5">
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
          <div className="lg:hidden bg-black-full w-full h-[1px]"></div>

          <section className="grow lg:mt-20 flex flex-col gap-28">
            <Navigation
              hiddenOnMobile={false}
              className="w-full flex justify-between lg:justify-start lg:gap-10"
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
    </Fragment>
  );
};

export default Footer;
