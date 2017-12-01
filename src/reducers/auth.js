import {createReducer} from '../utils';
import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_PREPARE,
    LOGOUT_USER,
    AUTH_CHECK,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    AUTH_RE_CHECK
} from '../constants';

const initialState = {
    token: null,
    username: null,
    isAuthenticated: false,
    isAuthenticating: false,
    isLoggingOut: false,
    doAuth: false,
    statusText: null
};

export default createReducer(initialState, {
    [LOGIN_USER_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': true,
            'statusText': null
        });
    },
    [LOGIN_USER_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated': true,
            'isLoggingOut': false,
            'doAuth': false,
            'token': payload.token,
            'username': payload.username,
            'statusText': 'You have been successfully logged in.'
        });

    },
    [LOGIN_USER_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated': false,
            'isLoggingOut': false,
            'doAuth': false,
            'token': null,
            'username': null,
            'statusText': `Authentication Error: ${payload.status} ${payload.statusText}`
        });
    },
    [LOGOUT_PREPARE]: (state, payload) => {
        return Object.assign({}, state, {
            'isLoggingOut': true,
            'doAuth': false
        });
    },
    [LOGOUT_USER]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticated': false,
            'isLoggingOut': false,
            'token': null,
            'doAuth': false,
            'username': null,
            'statusText': 'You have been successfully logged out.'
        });
    },
    [AUTH_RE_CHECK]: (state, payload) => {
        return Object.assign({}, state, {
            'doAuth': true
        });

    },
    [AUTH_CHECK]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': true,
            'doAuth': false
        });

    },
    [AUTH_CHECK]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': true,
            'doAuth': false
        });

    },
    [AUTH_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated': true,
            'doAuth': false
        });

    },
    [AUTH_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated': false,
            'doAuth': false,
            'token': null,
            'username': null,
            'statusText': `Authentication Error: ${payload.status} ${payload.statusText}`
        });

    },
});

