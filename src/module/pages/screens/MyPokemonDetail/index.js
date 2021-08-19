import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useAxios, usePrevious } from '@pokemon-utils/hooks';
import { Detail } from '@pokemon-component-layout';
import { removePokemon } from '@pokemon-redux/pokemon/actions';

export default function DetailMyPokemon() {
  const [getPokemonDetail, isLoading, status, response] =
    useAxios('/pokemon/detail');
  const prevStatus = usePrevious(status);
  const list = useSelector((state) => state.pokemon.mypokemon);
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  useEffect(() => {
    const id = params.id;
    const pokemon = list.find((p) => p.index === id);
    setData(pokemon);
    if (pokemon) {
      getPokemonDetail({
        name: pokemon.id,
      });
    }
  }, []);

  useEffect(() => {
    if (prevStatus && prevStatus !== status) {
      switch (status) {
        case 1:
          setData({
            ...response.data.result,
            name: data.name,
            index: data.index,
          });
          break;
        case 0:
          alert('There is some error when loading pokemons data');
          break;
        default:
      }
    }
  }, [status, response]);

  function onPokemonBtnClick() {
    const willDelete = confirm('Are you sure want to release this pokemon?');
    if (willDelete) {
      dispatch(removePokemon(data));
      history.push('/mypokemon');
    }
  }

  return (
    <div id="detail-my-pokemon">
      <Detail
        type="mypokemon"
        onPokemonBtnClick={onPokemonBtnClick}
        pokemon={data}
        loading={isLoading}
      />
    </div>
  );
}
