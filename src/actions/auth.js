import {
    AUTH_CHECK,
    AUTH_RE_CHECK,
    AUTH_SUCCESS,
    AUTH_NEEDS_RELOG,
    AUTH_FAILURE
} from '../constants';

import LocalStorageUtils from '../utils/LocalStorageUtils';

export function doRelog() {
    return {
        type: AUTH_NEEDS_RELOG,
        payload: {}
    }
}


export function authRequest() {
  return {
    type: AUTH_CHECK,
    payload: {}
  }
}

export function authSuccess(data) {
  LocalStorageUtils.updateAccountData(data);
  return {
    type: AUTH_SUCCESS,
    payload: {}
  }
}

export function authFailure(error) {
  return {
    type: AUTH_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}


export function doNewAuth() {
  return {
    type: AUTH_RE_CHECK,
    payload: {}
  }
}

