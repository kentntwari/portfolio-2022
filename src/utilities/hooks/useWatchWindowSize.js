import { useReducer } from 'react';

import useEventListener from './useEventListener';

const useWatchWindowSize = ({ ...data }) => {
  let MATCH_MAX_WIDTH = window.matchMedia(`(max-width:${data.maxWidth})`).matches;
  let MATCH_MIN_WIDTH = window.matchMedia(`(min-width:${data.minWidth})`).matches;
  let MATCH_MAX_HEIGHT = window.matchMedia(`(max-height:${data.maxHeight})`).matches;
  let MATCH_MIN_HEIGHT = window.matchMedia(`(min-height:${data.minHeight})`).matches;

  const initialState = {
    isWithinMaxWidth: MATCH_MAX_WIDTH,
    isWithinMinWidth: MATCH_MIN_WIDTH,
    isWithinMaxHeight: MATCH_MAX_HEIGHT,
    isWithinMinHeight: MATCH_MIN_HEIGHT,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case 'EVALUATE_MAX_WIDTH':
        return {
          ...state,
          isWithinMaxWidth: MATCH_MAX_WIDTH,
        };

      case 'EVALUATE_MIN_WIDTH':
        return {
          ...state,
          isWithinMinWidth: MATCH_MIN_WIDTH,
        };

      case 'EVALUATE_MAX_HEIGHT':
        return {
          ...state,
          isWithinMaxHeight: MATCH_MAX_HEIGHT,
        };

      case 'EVALUATE_MIN_HEIGHT':
        return {
          ...state,
          isWithinMinHeight: MATCH_MIN_HEIGHT,
        };

      default:
        return { ...state };
    }
  }

  useEventListener('resize', () => {
    if (data.maxWidth) dispatch({ type: 'EVALUATE_MAX_WIDTH' });

    if (data.minWidth) dispatch({ type: 'EVALUATE_MIN_WIDTH' });

    if (data.maxHeight) dispatch({ type: 'EVALUATE_MAX_HEIGHT' });

    if (data.minHeight) dispatch({ type: 'EVALUATE_MIN_HEIGHT' });
  });

  return [
    state.isWithinMaxWidth,
    state.isWithinMinWidth,
    state.isWithinMaxHeight,
    state.isWithinMinHeight,
  ];
};

export default useWatchWindowSize;
