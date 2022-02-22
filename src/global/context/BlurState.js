import React, { useEffect, useReducer } from 'react';

import portfolioContext from './blurContext';
import portfolioReducer from './blurReducer';
import { HIDE_BLUR, TOGGLE_BLUR } from '../types';

const BlurState = ({ children }) => {
  const initialState = { hidden: true };

  const [state, dispatch] = useReducer(portfolioReducer, initialState);

  useEffect(() => {
    dispatch({ type: HIDE_BLUR });
  }, []);

  function triggerBgBlur() {
    return dispatch({ type: TOGGLE_BLUR });
  }

  function hideBgBlur() {
    return dispatch({ type: HIDE_BLUR });
  }

  return (
    <portfolioContext.Provider
      value={{ hidden: state.hidden, triggerBgBlur, hideBgBlur }}>
      {children}
    </portfolioContext.Provider>
  );
};

export default BlurState;
