import INITIAL_STATE from './INITIAL_STATE';

export function store(state) {
  localStorage.setItem('AUTH_STATE', JSON.stringify(state));
}

export function getStoredState() {
  const state = localStorage.getItem('AUTH_STATE');

  if (!state) return INITIAL_STATE;

  return JSON.parse(state);
}
