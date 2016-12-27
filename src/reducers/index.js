import { combineReducers } from 'redux';

import MarkerReducer from './marker-reducer';

const rootReducer = combineReducers({
  position: MarkerReducer
});

export default rootReducer;
