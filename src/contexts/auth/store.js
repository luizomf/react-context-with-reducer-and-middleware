import INITIAL_STATE from './INITIAL_STATE';
import { adicionalHeaders } from './requests';

export function store(state) {
  localStorage.setItem('AUTH_STATE', JSON.stringify(state));

  const { token } = state;

  if (token) {
    adicionalHeaders.Authorization = `Bearer ${token}`;
  }
}

export function getStoredState() {
  const state = localStorage.getItem('AUTH_STATE');

  if (!state) return INITIAL_STATE;

  return JSON.parse(state);
}
