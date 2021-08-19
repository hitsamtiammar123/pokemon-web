import * as CONST from './constants';

const initialStates = {
  mypokemon: [],
  action: '',
};

function pokemonReducer(state = initialStates, action) {
  const { type, payload } = action;

  switch (type) {
    case CONST.ADD_POKEMON:
      return {
        ...state,
        mypokemon: state.mypokemon.concat(payload),
        action: type,
      };
    case CONST.REMOVE_POKEMON:
      return {
        ...state,
        mypokemon: state.mypokemon.filter(
          (pokemon) => pokemon.index !== payload.index
        ),
        action: type,
      };
    default:
  }
  return state;
}

export default pokemonReducer;
