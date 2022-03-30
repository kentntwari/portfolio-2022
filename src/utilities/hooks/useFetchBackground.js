import { useEffect, useReducer } from 'react';

import sanityClient from '../../client';

const useFetchBackground = () => {
  const initial_state = {
    is_loading: true,
    api: {
      is_valid: true,
      response: null,
    },
    response: {
      bio: null,
      facts: null,
      image: null,
      questions: null,
    },
    is_error: false,
  };

  const [state, dispatch] = useReducer(reducer, initial_state);

  function reducer(state, action) {
    switch (action.type) {
      case 'GET_API':
        return { ...state, api: { is_valid: true, response: action.payload } };

      case 'API_ERROR':
        return { ...state, api: { ...state.api, is_valid: false } };

      case 'IS_LOADING':
        return { ...state, is_loading: true };

      case 'IS_ERROR':
        return { ...state, is_error: true };

      case 'RESPONSE_AVAILABLE':
        return {
          ...state,
          is_loading: false,
        };

      case 'GET_BIO':
        return {
          ...state,
          response: {
            ...state.response,
            bio: action.payload,
          },
        };

      case 'GET_FACTS':
        return {
          ...state,
          response: {
            ...state.response,
            facts: action.payload,
          },
        };

      case 'GET_IMAGE':
        return {
          ...state,
          response: {
            ...state.response,
            image: action.payload,
          },
        };

      case 'GET_QUESTIONS':
        return {
          ...state,
          response: {
            ...state.response,
            questions: action.payload,
          },
        };
    }
  }

  useEffect(() => {
    let is_mounted = true;

    (async function getApi() {
      try {
        const API_ENDPOINT = (await import('../../api/api.background')).background();

        if (is_mounted) dispatch({ type: 'GET_API', payload: API_ENDPOINT });
      } catch (error) {
        if (is_mounted) dispatch({ type: 'API_ERROR' });
      }
    })();

    return () => (is_mounted = false);
  }, []);

  useEffect(() => {
    let is_mounted = true;

    (async function getResponse() {
      try {
        const fetch_sanity = await sanityClient.fetch(state.api.response);

        if (is_mounted && fetch_sanity === null) dispatch({ type: 'IS_LOADING' });

        if (is_mounted && fetch_sanity) {
          dispatch({ type: 'RESPONSE_AVAILABLE' });

          fetch_sanity.bio && dispatch({ type: 'GET_BIO', payload: fetch_sanity.bio });

          fetch_sanity.facts &&
            dispatch({ type: 'GET_FACTS', payload: fetch_sanity.facts });

          fetch_sanity.image &&
            dispatch({ type: 'GET_IMAGE', payload: fetch_sanity.image });

          fetch_sanity.questions &&
            dispatch({ type: 'GET_QUESTIONS', payload: fetch_sanity.questions });
        }
      } catch (error) {
        if (is_mounted) dispatch({ type: 'IS_ERROR' });
      }
    })();

    return () => (is_mounted = false);
  }, [state.api.response]);

  return {
    is_loading: state.is_loading,
    is_api_valid: state.api.is_valid,
    response: {
      bio: state.response.bio,
      facts: state.response.facts,
      image: state.response.image,
      FAQ: state.response.questions,
    },
    is_error: state.is_error,
  };
};

export default useFetchBackground;
