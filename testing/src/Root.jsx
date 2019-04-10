import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers/index.reducer';

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware());
  return <Provider store={store}>{children}</Provider>;
};
