import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import registerServiceWorker from './registerServiceWorker';
import { teamsReducer, fetchTeamsEpic } from './store/teams';
import { criteriaReducer } from './store/criteria';
import App from './App';
import { updateCriteriaEpic } from './store/criteria';

import 'reset-css';
import './index.module.scss';

const reducer = combineReducers({
  teams: teamsReducer,
  criteria: criteriaReducer,
});

const rootEpic = combineEpics(fetchTeamsEpic, updateCriteriaEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);

const initialState = {
  criteria: {
    items: [],
  },
  results: [],
};

const store = createStore(reducer, initialState, applyMiddleware(epicMiddleware)); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
