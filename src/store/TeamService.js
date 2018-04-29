export default class TeamService {
  getTeams() {
    return Promise.resolve([
      'Celtic',
      'Aberdeen',
      'Kilmarnock',
      'Motherwell'
    ]); 
  }
}
