import React from 'react';
import { useSelector } from 'react-redux';
import { Landing } from '@pokemon-component-layout';

export default function MyPokemon() {
  const list = useSelector((state) => state.pokemon.mypokemon);

  return (
    <div id="my-pokemon">
      {list.length === 0 ? (
        <h2>You have no Pokemon yet</h2>
      ) : (
        <Landing
          detailRedirect={(pokemon) => `/detail/${pokemon.index}/mypokemon`}
          showLoadMore={false}
          title="My Pokemon"
          list={list}
        />
      )}
    </div>
  );
}
