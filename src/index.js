import React from 'react';
import ReactDOM from 'react-dom';
import LoadingScreen from './components/LoadingScreen';
import {store} from './app/store';
import { Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <LoadingScreen />
    </Provider>,
  document.getElementById('root')
);
