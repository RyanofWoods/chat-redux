// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer.js';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import currentUserReducer from './reducers/current_user_reducer';

const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger));
const initialState = {
  messages: [],
  channels: ['general', 'ruby', 'javascript', 'react', 'social'],
  selectedChannel: 'general',
  currentUser: 'Ryan' // currentUser: prompt('Choose a Username: ') || `anonymous${Math.floor((Math.random() * 1000))}`,
};

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: currentUserReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
