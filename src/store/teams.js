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
      return action.teams;
    default:
      return state;
  }
};

const fetchTeamsAction = () => {
  return {
    type: FETCH_TEAMS 
  };
}; 

const fetchTeamsFulfilledAction = (response) => {
  return {
    type: FULFILLED,
    teams: response
  };
};

const fetchTeamsEpic = action$ =>
  action$.ofType(FETCH_TEAMS)
    .switchMap(action =>
      Rx.Observable.fromPromise(teamService.getTeams())
        .map(response => fetchTeamsFulfilledAction(response))

    );

export { teamsReducer, fetchTeamsAction, fetchTeamsEpic };

