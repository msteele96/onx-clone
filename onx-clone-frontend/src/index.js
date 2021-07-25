import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer';
import { BrowserRouter } from 'react-router-dom';


const store = createStore(rootReducer, applyMiddleware(thunk))

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// for use with devtools but no thunk

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
