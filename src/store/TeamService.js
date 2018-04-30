export default class TeamService {
  getTeams(criteria) {
    return Promise.resolve({
      criteria: [
        {
          displayName: 'country',
          items: [
            { key: 'scotland', selected: true, displayName: 'Scotland', results: 3 },
            { key: 'england', selected: false,displayName: 'England', results: 2 }
          ]
        }
      ],   
      results: [
        'Celtic',
        'Aberdeen',
        'Kilmarnock',
        'Motherwell'
      ]
    }); 
  }
}
