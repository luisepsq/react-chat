import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider } from 'react-redux';
import { createStore } from 'redux';
import {addUser} from './actions'
import chat from './reducers';
import {setupSocket} from './sockets'
const store=createStore(chat);

store.dispatch(addUser('Me'))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'))

serviceWorker.unregister();
