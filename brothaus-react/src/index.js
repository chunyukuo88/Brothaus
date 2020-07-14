import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {AccountContextWrapper} from './contexts/account-context';
import {AuthContextWrapper} from './contexts/authentication-context';

ReactDOM.render(
  <React.StrictMode>
      <AccountContextWrapper>
          <AuthContextWrapper>
            <App/>
          </AuthContextWrapper>
      </AccountContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
