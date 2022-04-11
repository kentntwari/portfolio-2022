import { HIDE_BLUR, TOGGLE_BLUR } from '../types';

const blurReducer = (state, action) => {
  switch (action.type) {
    case HIDE_BLUR:
      return { ...state, hidden: true };

    case TOGGLE_BLUR:
      return { ...state, hidden: false };

    default:
      throw new Error();
  }
};

export default blurReducer;
