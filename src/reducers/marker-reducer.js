import React from 'react';

import { FETCH_HOST_LOCATION } from '../actions/index';

const INITIAL_STATE = {
  mapCenter: { lat: 37.800627, lng: -122.4142752 },
  markers: [{
    position: {
      lat: 37.7916188,
      lng: -122.429802,
    },
    key: `Lafayette Park`,
    defaultAnimation: 2,
  }]
};

export default function( state = INITIAL_STATE, action ) {
  switch (action.type) {
    case FETCH_HOST_LOCATION:
      return { ...state, markers: [{ position: { lat: action.payload.data.lat, lng: action.payload.data.lon }}], mapCenter: { lat: action.payload.data.lat, lng: action.payload.data.lon } };
      break;

    default:
      return state;
  }
}
