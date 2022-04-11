import { useEffect, useReducer } from 'react';
import sanityClient from '../../client';

const useFetchTechUsed = () => {
  const initial_state = {
    is_loading: true,
    api: {
      is_valid: false,
      response: null,
    },
    response: null,
    is_error: false,
  };

  const [state, dispatch] = useReducer(reducer, initial_state);

  function reducer(state, action) {
    switch (action.type) {
      case 'GET_API':
        return { ...state, api: { is_valid: true, response: action.payload } };

      case 'API_ERROR':
        return { ...state, api: { ...state.api, is_valid: false } };

      case 'GET_RESPONSE':
        return { ...state, is_loading: false, response: action.payload };

      case 'IS_LOADING':
        return { ...state, is_loading: true };

      case 'IS_ERROR':
        return { ...state, is_error: true };

      default:
        return console.error('Case is mising in current hook');
    }
  }

  useEffect(() => {
    let is_mounted = true;

    (async function getAPI() {
      try {
        const API_ENDPOINT = (await import('../../api/technologies')).technologies();

        if (is_mounted) dispatch({ type: 'GET_API', payload: API_ENDPOINT });
      } catch (error) {
        if (is_mounted) dispatch({ type: 'API_ERROR' });
      }
    })();

    return () => (is_mounted = false);
  }, []);

  useEffect(() => {
    let is_mounted = true;

    (async function getUsedTech() {
      try {
        const fetch_sanity = await sanityClient.fetch(state.api.response);

        if (is_mounted && fetch_sanity === null) dispatch({ type: 'IS_LOADING' });

        if (is_mounted && fetch_sanity)
          dispatch({ type: 'GET_RESPONSE', payload: fetch_sanity });
      } catch (error) {
        if (is_mounted) dispatch({ type: 'IS_ERROR' });
      }
    })();

    return () => (is_mounted = false);
  }, [state.api.response]);

  return {
    is_loading: state.is_loading,
    is_api_valid: state.api.is_valid,
    response: state.response,
    is_error: state.is_error,
  };
};

export default useFetchTechUsed;
