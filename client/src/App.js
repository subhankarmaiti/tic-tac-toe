import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSocketMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import Router from './Router';
import reducers from './store/reducers';
function App() {
  const socket = io('http://192.168.0.144:5000');
  const socketIoMiddleware = createSocketMiddleware(socket, 'server/');
  const store = createStore(reducers, applyMiddleware(socketIoMiddleware));
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
