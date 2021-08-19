import { combineReducers, createStore } from 'redux';
import pokemonReducer from './pokemon/reducer';

const reducers = combineReducers({
  pokemon: pokemonReducer,
});

const store = createStore(reducers);

export default store;
