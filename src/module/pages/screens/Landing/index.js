import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Landing } from '@pokemon-component-layout';
import { useAxios, usePrevious } from '@pokemon-utils/hooks';
import { setLandingList } from '@pokemon-redux/pokemon/actions';
import './styles.scss';

const LIMIT = 8;

export default function LandingScreen() {
  const [getPokemons, isLoading, status, response] = useAxios('/pokemons');
  const prevStatus = usePrevious(status);
  const listRedux = useSelector((state) => state.list.list);
  const offsetRedux = useSelector((state) => state.list.offset);
  const [list, setList] = useState(listRedux);
  const [offset, setOffset] = useState(offsetRedux);
  const dispatch = useDispatch();

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
          dispatch(
            setLandingList({
              list: response.data.list,
              offset,
            })
          );
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
