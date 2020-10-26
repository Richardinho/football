import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import { fetchTeamsAction } from '../../store/teams';

class TeamPanel extends Component {
  componentDidMount() {
    const criteria = { itemNumber: 5 };
    this.props.fetchTeams(criteria); 
  }  

  render() {

    const renderTeam = (team) => (
      <div key={team.key} className={styles.team}>{team.name}</div> 
    );

    return (
      <div className={styles.container}>
        { this.props.teams.map(renderTeam) } 
      </div> 
    ); 
  }
}

const mapStateToProps = (state) => {
  const selectedCountries = state.criteria.items
    .filter(item => item.selected)
    .map(item => item.key);

  return {
    teams: state.teams.filter(team => {
      return selectedCountries.includes(team.country);
    }), 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTeams: (criteria) => { dispatch(fetchTeamsAction(criteria));} 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamPanel);
