import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index.js';

/**
 * This helper function is used by index.js and various test modules.
 * Without this, I would have to update tests any time I add/change
 * middleware or do anything else that changes the Provider.
 * */

export default function Root ({ children, initialState = {language: 'english'} }) {
  return (
    <Provider store={createStore(reducer, initialState)}>
      {children}
    </Provider>
  )
}
