import * as CONST from './constants';

const pokemonInitialStates = {
  mypokemon: [],
  action: '',
};

const listInitialStates = {
  list: [],
  offset: 0,
  action: '',
};

function listReducer(state = listInitialStates, action) {
  const { type, payload } = action;
  switch (type) {
    case CONST.ADD_LIST:
      return {
        ...state,
        list: state.list.concat(payload.list),
        offset: payload.offset,
        action: type,
      };
    default:
  }
  return state;
}

function pokemonReducer(state = pokemonInitialStates, action) {
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

export { listReducer };
export default pokemonReducer;
