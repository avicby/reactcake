import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import {productReducer} from './store/productReducer';
import {cartReducer} from './store/cartReducer';

const reducer = combineReducers({
  item:productReducer,
  order:cartReducer
})
const store = createStore(reducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
