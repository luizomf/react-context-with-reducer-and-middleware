import * as types from './types';

export function authMidRequest(payload) {
  return {
    type: types.AUTH_MID_REQUEST,
    payload,
  };
}

export function authRequest(payload) {
  return {
    type: types.AUTH_REQUEST,
    payload,
  };
}

export function authSuccess(payload) {
  return {
    type: types.AUTH_SUCCESS,
    payload,
  };
}

export function authFailure(payload) {
  return {
    type: types.AUTH_FAILURE,
    payload,
  };
}
