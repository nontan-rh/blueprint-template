import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import Root from './components/Root';
import Reducer from './reducers';

const store: Store<any> = createStore(Reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  React.createElement(Provider, { store }, React.createElement(Root)),
  rootElement
);
