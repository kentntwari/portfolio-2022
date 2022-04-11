import { useEffect, useReducer } from 'react';
import sanityClient from '../../client';

const useFetchHomepageDemo = () => {
  const initial_state = {
    is_loading: true,
    api: {
      is_valid: false,
      response: null,
    },
    snippets: {
      code: {
        initializer: 'code',
        is_loading: true,
        response: null,
      },
      figma: {
        initializer: 'figma',
        is_loading: true,
        response: null,
      },
      website: {
        initializer: 'website',
        is_loading: true,
        response: null,
      },
    },
    isError: false,
  };

  const [state, dispatch] = useReducer(reducer, initial_state);

  function reducer(state, action) {
    switch (action.type) {
      case 'GET_API':
        return {
          ...state,
          api: {
            is_valid: true,
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

      case 'GET_CODE_SNIPPET':
        return {
          ...state,
          is_loading: false,
          snippets: {
            ...state.snippets,
            code: { is_loading: false, response: action.payload },
          },
        };

      case 'GET_FIGMA_SNIPPET':
        return {
          ...state,
          is_loading: false,
          snippets: {
            ...state.snippets,
            figma: { is_loading: false, response: action.payload },
          },
        };

      case 'GET_WEBSITE_SNIPPET':
        return {
          ...state,
          is_loading: false,
          snippets: {
            ...state.snippets,
            website: { is_loading: false, response: action.payload },
          },
        };

      case 'IS_LOADING':
        return {
          ...state,
          is_loading: true,
        };

      case 'IS_ERROR':
        return {
          ...state,
          isError: true,
        };

      default:
        return state;
    }
  }

  useEffect(() => {
    let is_mounted = true;

    (async function getAPI() {
      try {
        const API_ENDPOINT = (await import('../../api/homeDemo')).homeDemo();

        if (is_mounted) dispatch({ type: 'GET_API', payload: API_ENDPOINT });
      } catch (error) {
        if (is_mounted) dispatch({ type: 'API_ERROR' });
      }
    })();

    return () => (is_mounted = false);
  }, []);

  useEffect(() => {
    let isMounted = true;

    try {
      (async function getSnippets() {
        const fetch_sanity = await sanityClient.fetch(state.api.response);

        if (isMounted && fetch_sanity === null) dispatch({ type: 'IS_LOADING' });

        if (isMounted && fetch_sanity) {
          dispatch({ type: 'GET_CODE_SNIPPET', payload: fetch_sanity.snippet_1 });
          dispatch({ type: 'GET_FIGMA_SNIPPET', payload: fetch_sanity.snippet_2 });
          dispatch({ type: 'GET_WEBSITE_SNIPPET', payload: fetch_sanity.snippet_3 });
        }
      })();
    } catch (error) {
      isMounted && dispatch({ type: 'IS_ERROR' });
    }

    return () => (isMounted = false);
  }, [state.api.response]);

  return {
    is_loading: state.is_loading,
    is_api_valid: state.api.is_valid,
    response: Object.values(state.snippets),
    isError: state.isError,
  };
};

export default useFetchHomepageDemo;
