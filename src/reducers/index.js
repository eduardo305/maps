import { combineReducers } from 'redux';

import TeamsReducer from './reducer_teams';

const rootReducer = combineReducers({
  teams: TeamsReducer
});

export default rootReducer;
