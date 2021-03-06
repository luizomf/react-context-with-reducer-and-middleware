import * as types from './types';
import INITIAL_STATE from './INITIAL_STATE';
import { adicionalHeaders } from './requests';

export default function authReducer(state, action) {
  switch (action.type) {
    case types.AUTH_SUCCESS: {
      return {
        ...action.payload,
        isLoggedIn: true,
        loginSuccess: true,
        isLoading: false,
      };
    }

    case types.AUTH_FAILURE: {
      delete adicionalHeaders.Authorization;
      return { ...INITIAL_STATE, loginError: true, isLoading: false };
    }

    case types.AUTH_REQUEST: {
      return { ...INITIAL_STATE, isLoading: true };
    }

    default:
      return state;
  }
}
