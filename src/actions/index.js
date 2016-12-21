import axios from 'axios';

export const FETCH_TEAMS = 'FETCH_TEAMS';
export const FETCH_TEAM = 'FETCH_TEAM';
export const FETCH_TEAM_PLAYERS = 'FETCH_TEAM_PLAYERS';

const ROOT_URL = 'http://api.football-data.org/v1';

export function fetchTeams() {
  const request = axios.get(`${ROOT_URL}/soccerseasons/398/teams`, {
    headers: { 'X-Auth-Token' : '848e26bc5a2347daaafd5f0685158cc2'}
  });

  return {
    type: FETCH_TEAMS,
    payload: request
  };
}

export function fetchTeam(teamId) {
  const request = axios.get(`${ROOT_URL}/teams/${teamId}`, {
    headers: { 'X-Auth-Token' : '848e26bc5a2347daaafd5f0685158cc2'}
  });

  return {
    type: FETCH_TEAM,
    payload: request
  };
}

export function fetchTeamPlayers(teamId) {
  const request = axios.get(`${ROOT_URL}/teams/${teamId}/players`, {
    headers: { 'X-Auth-Token' : '848e26bc5a2347daaafd5f0685158cc2'}
  });

  return {
    type: FETCH_TEAM_PLAYERS,
    payload: request
  };
}
