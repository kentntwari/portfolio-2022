import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  website_card_loader_wrapper,
  inner_heading_loading,
  inner_paragraph_loading_upper,
  inner_paragraph_loading_middle,
  inner_paragraph_loading_last,
  loader_button,
} from '../../../styles/loaders/loadWebsiteCard';

export const LoadWebsitesGrid = () => {
  return (
    <div className="w-full 2xl:w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
      {Array(4)
        .fill(null)
        .map(() => (
          <article key={uuidv4()} className={website_card_loader_wrapper}>
            <div className={inner_heading_loading}></div>
            <div className="flex flex-col gap-4">
              <div className={inner_paragraph_loading_upper}></div>
              <div className={inner_paragraph_loading_middle}></div>
              <div className={inner_paragraph_loading_last}></div>
            </div>

            <div className={loader_button}></div>
          </article>
        ))}
    </div>
  );
};
