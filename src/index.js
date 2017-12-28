import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // eslint-disable-next-line
import logger from 'redux-logger';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
