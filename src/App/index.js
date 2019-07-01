import React from 'react';
import MainPage from "../containers/MainPage";

import store from '../store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
