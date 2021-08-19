import React, { useEffect, useState } from 'react';
import { Landing } from '@pokemon-component-layout';
import { useAxios, usePrevious } from '@pokemon-utils/hooks';
import './styles.scss';

const LIMIT = 8;

export default function LandingScreen() {
  const [getPokemons, isLoading, status, response] = useAxios('/pokemons');
  const prevStatus = usePrevious(status);
  const [list, setList] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getPokemons({
      limit: LIMIT,
      offset,
    });
  }, [offset]);

  useEffect(() => {
    if (prevStatus && prevStatus !== status) {
      switch (status) {
        case 1:
          setList([...list, ...response.data.list]);
          break;
        case 0:
          alert('There is some error when loading pokemons data');
          break;
        default:
      }
    }
  }, [status, response]);

  function onClickMorePressed() {
    setOffset(offset + LIMIT);
  }

  return (
    <div id="landing">
      <Landing
        onClickMorePressed={onClickMorePressed}
        list={list}
        loading={isLoading}
      />
    </div>
  );
}
