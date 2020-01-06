import * as types from './types';
import * as actions from './actions';

async function login(action, dispatch) {
  dispatch(actions.authRequest());

  const { email, password } = action.payload;

  if (!email || !password) return dispatch(actions.authFailure());

  const rawResponse = await fetch('http://localhost:3001/tokens/', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    method: 'POST',
    credentials: 'include',
  });

  if (rawResponse.status === 401) return dispatch(actions.authFailure());

  const response = await rawResponse.json();
  return dispatch(actions.authSuccess(response));
}

async function middlewareActions(action, dispatch) {
  if (types.AUTH_MID_REQUEST === action.type) {
    return login(action, dispatch);
  }

  return dispatch(action);
}

export default function authMiddleware(dispatch) {
  return action => middlewareActions(action, dispatch);
}
