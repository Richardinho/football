import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import { fetchTeamsAction } from '../../store/teams';

class TeamPanel extends Component {
  componentDidMount() {
    this.props.fetchTeams(); 
  }  

  render() {

    const renderTeam = (team, index) => (
      <div key={index} className={styles.team}>{team}</div> 
    );

    return (
      <div>
        { this.props.teams.map(renderTeam) } 
      </div> 
    ); 
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTeams: () => { dispatch(fetchTeamsAction());} 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamPanel);
