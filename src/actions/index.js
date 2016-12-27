import axios from 'axios';

import { FETCH_OWN_LOCATION, FETCH_HOST_LOCATION } from './action_types';

const ROOT_URL = 'http://ip-api.com/json';

export function fetchLocation(host) {
  let url = host ? `${ROOT_URL}/${host}` : `${ROOT_URL}`;

  const request = axios.get(url);

  return {
    type: FETCH_HOST_LOCATION,
    payload: request
  };
}
