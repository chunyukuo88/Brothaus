import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index.js';

export default ({ children, initialState = {language: 'english'} }) => {
  return (
    <Provider store={createStore(reducer, initialState)}>
      {children}
    </Provider>
  )
}
