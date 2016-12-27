import axios from 'axios';

export const FETCH_HOST_LOCATION = 'FETCH_HOST_LOCATION';

const ROOT_URL = 'http://ip-api.com/json';

export function fetchHostLocation(host) {
  const request = axios.get(`${ROOT_URL}/${host}`);

  return {
    type: FETCH_HOST_LOCATION,
    payload: request
  };
}
