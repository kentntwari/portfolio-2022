import { useEffect, useReducer } from 'react';
import sanityClient from '../../client';

const useFetchWebsiteDetails = (slug) => {
  const initial_state = {
    is_loading: true,
    api: {
      is_valid: true,
      response: null,
    },
    response: {
      challenges: null,
      features: null,
      preview: null,
      summary: null,
      title: null,
      trailer: null,
    },
    is_error: false,
  };

  const [state, dispatch] = useReducer(reducer, initial_state);

  function reducer(state, action) {
    switch (action.type) {
      case 'GET_API':
        return {
          ...state,
          api: {
            ...state.api,
            response: action.payload,
          },
        };

      case 'API_ERROR':
        return {
          ...state,
          api: {
            ...state.api,
            is_valid: false,
          },
        };

      case 'IS_LOADING':
        return { ...state, is_loading: true };

      case 'IS_ERROR':
        return { ...state, is_error: true };

      case 'RESPONSE_AVAILABLE':
        return { ...state, is_loading: false };

      case 'GET_CHALLENGES':
        return {
          ...state,
          response: {
            ...state.response,
            challenges: action.payload,
          },
        };

      case 'GET_FEATURES':
        return {
          ...state,
          response: {
            ...state.response,
            features: action.payload,
          },
        };

      case 'GET_PREVIEW':
        return {
          ...state,
          response: {
            ...state.response,
            preview: action.payload,
          },
        };

      case 'GET_SUMMARY':
        return {
          ...state,
          response: {
            ...state.response,
            summary: action.payload,
          },
        };

      case 'GET_TITLE':
        return {
          ...state,
          response: {
            ...state.response,
            title: action.payload,
          },
        };

      case 'GET_TRAILER':
        return {
          ...state,
          response: {
            ...state.response,
            trailer: action.payload,
          },
        };
    }
  }

  useEffect(() => {
    let is_mounted = true;

    (async function getApi() {
      try {
        const API_ENDPOINT = (await import('../../api/api.website')).website(slug);

        is_mounted && dispatch({ type: 'GET_API', payload: API_ENDPOINT });
      } catch (error) {
        is_mounted && dispatch({ type: 'API_ERROR' });
      }
    })();

    return () => (is_mounted = false);
  }, [slug]);

  useEffect(() => {
    let is_mounted = true;

    (async function getResponse() {
      try {
        const fetch_sanity = await sanityClient.fetch(state.api.response);

        fetch_sanity
          ? dispatch({ type: 'RESPONSE_AVAILABLE' })
          : dispatch({ type: 'IS_LOADING' });

        if (is_mounted && fetch_sanity !== null) {
          fetch_sanity.challenges &&
            dispatch({ type: 'GET_CHALLENGES', payload: fetch_sanity.challenges });

          fetch_sanity.features &&
            dispatch({ type: 'GET_FEATURES', payload: fetch_sanity.features });

          fetch_sanity.preview &&
            dispatch({ type: 'GET_PREVIEW', payload: fetch_sanity.preview });

          fetch_sanity.summary &&
            dispatch({ type: 'GET_SUMMARY', payload: fetch_sanity.summary });

          fetch_sanity.title &&
            dispatch({ type: 'GET_TITLE', payload: fetch_sanity.title });

          fetch_sanity.trailer &&
            dispatch({ type: 'GET_TRAILER', payload: fetch_sanity.trailer });
        }
      } catch (error) {
        is_mounted && dispatch({ type: 'IS_ERROR' });
      }
    })();

    return () => (is_mounted = false);
  }, [state.api.response]);

  return {
    is_loading: state.is_loading,
    is_api_valid: state.api.is_valid,
    is_error: state.is_error,
    response: {
      title: state.response.title,
      summary: state.response.summary,
      preview: state.response.preview,
      features: state.response.features,
      challenges: state.response.challenges,
      trailer: state.response.trailer,
    },
  };
};

export default useFetchWebsiteDetails;
