import React from 'react';
import ReactDOM from 'react-dom';
import LoadingScreen from './components/LoadingScreen';
import {Provider} from 'react-redux';
import {store} from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <LoadingScreen />
    </Provider>,
  document.getElementById('root')
);
