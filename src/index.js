import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { createEpicMiddleware } from 'redux-observable';

import registerServiceWorker from './registerServiceWorker';
import headerReducer from './store/header';
import { teamsReducer, fetchTeamsEpic } from './store/teams';
import { criteriaReducer } from './store/criteria';
import App from './App';

import 'reset-css';
import './styles/headers.css';
import './index.module.css';

const reducer = combineReducers({
  header: headerReducer,
  teams: teamsReducer,
  criteria: criteriaReducer,
});

const epicMiddleware = createEpicMiddleware(fetchTeamsEpic);

const initialState = { teams: ['Liverpool', 'Arsenal']};

const store = createStore(reducer, initialState, applyMiddleware(epicMiddleware)); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
