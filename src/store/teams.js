import Rx from 'rxjs/Rx';
import TeamService from './TeamService';
export const FETCH_TEAMS = 'fetch-teams';
export const FULFILLED = 'fulfilled';
const teamService = new TeamService();

const teamsReducer =  (state = ['aberdeen', 'celtic'], action) => {
  switch(action.type) {
    case FETCH_TEAMS:
      return state;
    case FULFILLED:
      return action.response.results;
    default:
      return state;
  }
};

const fetchTeamsAction = (criteria) => {
  return {
    type: FETCH_TEAMS,
    criteria
  };
}; 

const fetchTeamsFulfilledAction = (response) => {
  return {
    type: FULFILLED,
    response
  };
};

const fetchTeamsEpic = action$ =>
  action$.ofType(FETCH_TEAMS)
    .switchMap(action =>
      Rx.Observable.fromPromise(teamService.getTeams(action.criteria))
        .map(response => fetchTeamsFulfilledAction(response))

    );

export { teamsReducer, fetchTeamsAction, fetchTeamsEpic };

