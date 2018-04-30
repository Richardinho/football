export default class TeamService {
  getTeams(criteria) {
    console.log('criteria', criteria);
    return Promise.resolve([
      'Celtic',
      'Aberdeen',
      'Kilmarnock',
      'Motherwell'
    ]); 
  }
}
