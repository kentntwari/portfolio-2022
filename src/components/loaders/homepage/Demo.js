import React from 'react';

import { cardTextClass } from '../../../utilities/functions/generateCardSnippetTextStyles';

import { modifySnippet as wrapper } from '../../../utilities/functions/customSnippetStyles';

import {
  snippet_loader,
  card_loader,
  inner_snippet_loader,
  inner_paragraph_skeleton_upper,
  inner_paragraph_skeleton_middle,
  inner_paragraph_skeleton_last,
} from '../../../styles/loaders/loadSnippet';

export const LoadSnippet = ({ mappingTo }) => {
  if (mappingTo)
    return (
      <div className={`${wrapper(mappingTo)} ${snippet_loader}`}>
        <div className={inner_snippet_loader}></div>
      </div>
    );

  return (
    <div className={snippet_loader}>
      <div className={inner_snippet_loader}></div>
    </div>
  );
};

export const LoadSnippetCard = ({ mappingTo }) => {
  if (mappingTo)
    return (
      <div className={`${cardTextClass(mappingTo)} ${card_loader}`}>
        <div className={inner_paragraph_skeleton_upper}></div>
        <div className={inner_paragraph_skeleton_middle}></div>
        <div className={inner_paragraph_skeleton_last}></div>
      </div>
    );

  return (
    <div className={card_loader}>
      <div className={inner_paragraph_skeleton_upper}></div>
      <div className={inner_paragraph_skeleton_middle}></div>
      <div className={inner_paragraph_skeleton_last}></div>
    </div>
  );
};
