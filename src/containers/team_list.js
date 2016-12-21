import React, { Component } from 'react';
import { fetchTeams}  from '../actions/index';
import { connect } from 'react-redux';

import { Link } from 'react-router';

class TeamList extends Component {

  componentWillMount() {
    this.props.fetchTeams();
  }

  getTeamId(team) {
    var matches = team._links.fixtures.href.match(/\d+/g);

    return matches[1];
  }

  renderTeams() {

    const { teams } = this.props;

    if (!teams.teams) {
      return;
    }

    return teams.teams.map((team) => {
      return (
        <li key={ team.code }>
          <Link to={'teams/' + this.getTeamId(team)}>
            <div className='ed-media'>
              <div className='ed-media-img-wrapper'>
                <img src={team.crestUrl} />
              </div>
              <div className='ed-media-body'>
                {team.name}
              </div>
            </div>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div>List of teams</div>
        <ul>
          { this.renderTeams() }
        </ul>
      </div>
    );
  }
}

function  mapStateToProps(state) {
  return { teams: state.teams.all };
}

export default connect(mapStateToProps, { fetchTeams })(TeamList);
