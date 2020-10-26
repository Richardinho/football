export default class TeamService {
  getTeams(criteria) {
    return Promise.resolve({
      criteria: {
        items: [
          { key: 'scotland', selected: true, displayName: 'Scotland',},
          { key: 'england', selected: false, displayName: 'England', },
          { key: 'germany', selected: false, displayName: 'Germany', },

        ]
      },   
      results: [
        {key: 'celtic', name: 'Celtic', country: 'scotland'},
        {key: 'aberdeen', name: 'Aberdeen', country: 'scotland'},
        {key: 'arsenal', name: 'Arsenal', country: 'england'},
        {key: 'bayern-munich', name: 'Bayern Munich', country: 'germany'},
      ]
    }); 
  }
}
