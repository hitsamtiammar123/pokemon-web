import { useEffect, useRef, useState } from 'react';
import api from '@pokemon-redux/api';

export const usePrevious = (val) => {
  const r = useRef();
  useEffect(() => {
    r.current = val;
  });
  return r.current;
};

export const useFileSelector = () => {
  const f = useRef(document.createElement('input'));

  f.current.type = 'file';

  return f.current;
};

export const useAxios = (url, method = 'get') => {
  const [states, setStates] = useState({
    loading: false,
    response: {},
    error: null,
    status: 1,
  });

  function callApi(data, headers = null) {
    let a = null;
    const _headers = headers || {
      'Content-type': 'application/json',
    };
    switch (method) {
      case 'get':
        a = api.get(url, {
          params: data,
          headers: _headers,
        });
        break;
      case 'post':
        a = api.post(url, data, {
          headers: _headers,
        });
        break;
      default:
    }
    setStates({
      ...setStates,
      loading: true,
      status: -1,
    });
    a.then((r) => {
      setStates({
        ...states,
        loading: false,
        response: r.data,
        status: 1,
      });
    }).catch((err) => {
      setStates({
        ...states,
        loading: false,
        error: err,
        status: 0,
      });
    });
  }

  return [
    callApi,
    states.loading,
    states.status,
    states.response,
    states.error,
  ];
};
