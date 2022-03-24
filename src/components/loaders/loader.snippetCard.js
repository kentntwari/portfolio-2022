import React from 'react';

import {
  card_loader,
  inner_paragraph_skeleton_upper,
  inner_paragraph_skeleton_middle,
  inner_paragraph_skeleton_last,
} from '../../styles/loaders/styles.loadSnippet';

const SnippetCardLoader = () => {
  return (
    <div className={card_loader}>
      <div className={inner_paragraph_skeleton_upper}></div>
      <div className={inner_paragraph_skeleton_middle}></div>
      <div className={inner_paragraph_skeleton_last}></div>
    </div>
  );
};

export default SnippetCardLoader;
