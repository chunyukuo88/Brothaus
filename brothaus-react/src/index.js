import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'; //The reducers here is whatever is exported from index.js of the reducers directory.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers, {})}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
