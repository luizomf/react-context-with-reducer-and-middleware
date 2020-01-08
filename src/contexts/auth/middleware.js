import * as types from './types';
import * as actions from './actions';
import { apiURL } from '../../config/appConfig';
import requests from './requests';

async function login(action, dispatch) {
  dispatch(actions.authRequest());

  const { email, password } = action.payload;

  if (!email || !password) return dispatch(actions.authFailure());

  const rawResponse = await requests({
    url: `${apiURL}/tokens/`,
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
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
