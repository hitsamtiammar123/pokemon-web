import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Detail } from '@pokemon-component-layout';
import { useAxios, usePrevious } from '@pokemon-utils/hooks';
import './styles.scss';

export default function DetaiScreen() {
  const [getPokemonDetail, isLoading, status, response] =
    useAxios('/pokemon/detail');
  const prevStatus = usePrevious(status);
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getPokemonDetail({
      name: params.id,
    });
  }, []);

  useEffect(() => {
    if (prevStatus && prevStatus !== status) {
      switch (status) {
        case 1:
          setData(response.data.result);
          break;
        case 0:
          alert('There is some error when loading pokemons data');
          break;
        default:
      }
    }
  }, [status, response]);

  return (
    <div id="detail">
      <Detail pokemon={data} loading={isLoading} />
    </div>
  );
}
