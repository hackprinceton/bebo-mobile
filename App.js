import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './src/components/Main'
import reducers from './src/reducers'
import thunk from 'redux-thunk'

import { createStore, applyMiddleware } from 'redux';

let store = createStore(
  reducers,
  applyMiddleware(thunk)
)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App
