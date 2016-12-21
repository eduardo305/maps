import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTeamPlayers } from '../actions/index';

class TeamPlayers extends Component {

  componentWillMount() {
    this.props.fetchTeamPlayers(this.props.params.teamId);
  }

  renderPlayers() {

    const { players } = this.props;

    if (!players.players) {
      return;
    }

    return players.players.map((player) => {
      return (
        <li key={ player.name + player.jerseyNumber }>
          <div className='ed-media'>
            <div className='ed-media-number-wrapper'>{ player.jerseyNumber }</div>
            <div className='ed-media-body'>
              {player.name}
            </div>
          </div>
        </li>
      );
    });
  }

  render() {

    if (!this.props.players) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        { this.renderPlayers() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { players: state.teams.players };
}

export default connect(mapStateToProps, { fetchTeamPlayers })(TeamPlayers);
