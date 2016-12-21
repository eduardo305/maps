import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchTeam } from '../actions/index';
import TeamPlayers from '../components/team_players';

class TeamDetails extends Component {

  componentWillMount() {
    this.props.fetchTeam(this.props.params.teamId);
  }

  componentWillUpdate() {
    return <div>Loading...</div>;
  }

  getTeamId(team) {
    var matches = team._links.fixtures.href.match(/\d+/g);

    return matches[1];
  }

  getTeam(teamId) {
    return this.props.teams.teams.find((team) => {
      return this.props.params.teamId === this.getTeamId(team);
    });
  }

  render() {

    let team = this.getTeam(this.props.params.teamId);

    if (!team) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to='/'>Back</Link>
        <div>{ team.name }</div>
        <TeamPlayers teamId={ this.props.params.teamId }/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { teams: state.teams.all };
}

export default connect(mapStateToProps, { fetchTeam })(TeamDetails);
