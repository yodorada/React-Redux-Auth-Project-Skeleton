import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    LOGOUT_PREPARE
} from '../constants';

import LocalStorageUtils from '../utils/LocalStorageUtils';


export function loginUserSuccess(data) {
  LocalStorageUtils.login(data);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      token: data.token,
      username: data.username
    }
  }
}

export function loginUserFailure(error) {
  LocalStorageUtils.notAuthorized();
  return {
    type: LOGIN_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST
  }
}

export function logout() {
    LocalStorageUtils.logout();
    return {
        type: LOGOUT_USER
    }
}

export function logoutPrepare() {
    return {
        type: LOGOUT_PREPARE
    }
}

export function logoutAndRedirect() {
    return (dispatch) => {
        dispatch(logoutPrepare());
    }
}
