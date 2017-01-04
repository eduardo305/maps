import axios from 'axios';

import { FETCH_OWN_LOCATION, FETCH_HOST_LOCATION } from './action_types';

const ROOT_URL = 'http://ip-api.com/json';

export function fetchLocationOld(host) {
  let url = host ? `${ROOT_URL}/${host}` : `${ROOT_URL}`;

  const request = axios.get(url);

  return {
    type: FETCH_HOST_LOCATION,
    payload: request
  };
}

export function fetchLocation(address) {
  let geocoder = new google.maps.Geocoder();

  const request = new Promise(( resolve, reject ) => {

    if ( address ) {
      geocoder.geocode( { 'address': address}, (results, status) => {
        if (status === 'OK') {
          resolve({ lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()});
        } else {
          reject('Please try another location');
        }
      });
    } else {
      navigator.geolocation.getCurrentPosition(( position ) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        resolve(pos);
      });
    }
  });

  return {
    type: FETCH_HOST_LOCATION,
    payload: request
  };
}
