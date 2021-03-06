// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import messagesReducer from './reducers/messages_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';

const baseReducer = (state = null) => state;

const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));
const initialState = {
  messages: [
    {
      author: 'anonymous92',
      content: 'Hello world!',
      created_at: '2017-09-26T23:03:16.365Z'
    },
    {
      author: 'anonymous77',
      content: 'My name is anonymous77',
      created_at: '2017-09-26T23:03:21.194Z'
    }
  ],
  channels: ['general', 'ruby', 'javascript', 'react', 'social'],
  selectedChannel: 'general',
  currentUser: 'Ryan' // currentUser: prompt('Choose a Username: ') || `anonymous${Math.floor((Math.random() * 1000))}`,
};

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  selectedChannel: selectedChannelReducer,
  channels: baseReducer,
  currentUser: baseReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
