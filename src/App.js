import React from 'react';
import { Provider } from 'react-redux';
import store from '@pokemon-redux/store';
import { MainNavigation } from '@pokemon-navigation';

function App() {
  return (
    <Provider store={store}>
      <>
        <MainNavigation />
      </>
    </Provider>
  );
}

export default App;
