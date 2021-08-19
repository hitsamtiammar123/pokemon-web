import * as CONST from './constants';

export const addPokemon = (payload) => ({
  type: CONST.ADD_POKEMON,
  payload,
});

export const removePokemon = (payload) => ({
  type: CONST.REMOVE_POKEMON,
  payload,
});

export const setLandingList = (payload) => ({
  type: CONST.ADD_LIST,
  payload,
});
