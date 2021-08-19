import { combineReducers, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pokemonReducer, { listReducer } from './pokemon/reducer';

const reducers = combineReducers({
  pokemon: pokemonReducer,
  list: listReducer,
});

const composeEnhancer =
  // eslint-disable-next-line no-undef
  (process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const persistConfig = {
  key: 'pokemon-test',
  storage,
  whitelist: ['pokemon'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, composeEnhancer());
const persistor = persistStore(store);

export { persistor };
export default store;
