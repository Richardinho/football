import TeamService from './TeamService';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

export const FETCH_TEAMS = 'fetch-teams';
export const FULFILLED = 'fulfilled';
const teamService = new TeamService();

export const teamsReducer =  (state = ['aberdeen', 'celtic'], action) => {
  switch(action.type) {
    case FETCH_TEAMS:
      return state;
    case FULFILLED:
      return action.response.results;
    default:
      return state;
  }
};

export const fetchTeamsAction = (criteria) => {
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

export const fetchTeamsEpic = action$ => {

	return action$.pipe(
		ofType(FETCH_TEAMS),
		switchMap((action) => {
			return from(teamService.getTeams(action.criteria)).pipe(
				map(response => fetchTeamsFulfilledAction(response))
			);
		}),
	);
};


