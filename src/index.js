import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
	applyMiddleware,
	combineReducers,
	createStore,
} from 'redux'

import {
	combineEpics,
	createEpicMiddleware,
} from 'redux-observable';

import registerServiceWorker from './registerServiceWorker';
import {
	teamsReducer,
	fetchTeamsEpic,
} from './store/teams';

import { criteriaReducer } from './store/criteria';
import App from './App';
import { updateCriteriaEpic } from './store/criteria';

import 'reset-css';
import './index.module.css';

const reducer = combineReducers({
  teams: teamsReducer,
  criteria: criteriaReducer,
});

const rootEpic = combineEpics(fetchTeamsEpic, updateCriteriaEpic);
const epicMiddleware = createEpicMiddleware();

const initialState = {
  criteria: {
    items: [],
  },
  teams: [],
};

const store = createStore(reducer, initialState, applyMiddleware(epicMiddleware)); 

epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
