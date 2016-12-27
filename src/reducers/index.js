import { combineReducers } from 'redux';

import MarkerReducer from './marker-reducer';

const rootReducer = combineReducers({
  mapConfig: MarkerReducer
});

export default rootReducer;
