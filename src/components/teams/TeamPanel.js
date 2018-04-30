import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import { fetchTeamsAction } from '../../store/teams';

class TeamPanel extends Component {
  componentDidMount() {
    const criteria = { itemNumber: 5 };
    console.log('component did mount');
    this.props.fetchTeams(criteria); 
  }  

  componentDidUpdate() {
    console.log('component did update'); 
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
    fetchTeams: (criteria) => { dispatch(fetchTeamsAction(criteria));} 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamPanel);
