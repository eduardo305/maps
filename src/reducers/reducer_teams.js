import { FETCH_TEAMS, FETCH_TEAM, FETCH_TEAM_PLAYERS } from '../actions/index';

const INITIAL_STATE = { all: [], players: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TEAMS:
      return { ...state, all: action.payload.data };
      break;
    case FETCH_TEAM:
      return { ...state, team: action.payload.data };
      break;
    case FETCH_TEAM_PLAYERS:
      return { ...state, players: action.payload.data };
      break;
    default:
      return state;
  }
}
