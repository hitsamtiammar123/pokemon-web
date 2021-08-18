import { useEffect, useRef } from 'react';

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
