import React from 'react';
import { INITIAL_LOCATION } from '../utils/consts';

import { FETCH_HOST_LOCATION, FETCH_OWN_LOCATION } from '../actions/action_types';

const INITIAL_STATE = INITIAL_LOCATION;

export default function( state = INITIAL_STATE, action ) {
  switch (action.type) {
    case FETCH_HOST_LOCATION:
      return { ...state, position: { lat: action.payload.lat, lng: action.payload.lng } };
      break;

    default:
      return state;
  }
}
