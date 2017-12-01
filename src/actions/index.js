import { checkHttpStatus, parseJSON } from '../utils';

import { loginUserSuccess, loginUserFailure, loginUserRequest } from './login'
import { showMessage } from './message'
import { authRequest, authSuccess, authFailure, doRelog } from './auth'

import { showLoading, hideLoading } from 'react-redux-loading-bar'

import { push } from 'react-router-redux';
import fetch from 'isomorphic-fetch';

import LocalStorageUtils from '../utils/LocalStorageUtils';
import AppConfig from '../config';

export function loginUser(username, password) {
    return function(dispatch) {
        dispatch(showLoading());
        dispatch(loginUserRequest());
        return fetch(AppConfig().server.serviceUrl+'/login', {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Realm': btoa(AppConfig().server.frontendKey),
                'Authorization': 'Basic '+btoa(username+':'+password)
            })
            
        })
        .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                dispatch(hideLoading());
                dispatch(loginUserSuccess(response.data));
                
            })
            .catch(error => {
                dispatch(hideLoading());
                dispatch(loginUserFailure(error));
                dispatch(showMessage('Loginversuch fehlgeschlagen'));
                
            })
    }
}

export function checkUserAuth() {
    return (dispatch) => {
        dispatch(showLoading());
        dispatch(authRequest());
        return fetch(AppConfig().server.serviceUrl+'/authorized', {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Realm': btoa(AppConfig().server.frontendKey),
                'Token': LocalStorageUtils.token()
            })
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(response => {
            dispatch(authSuccess(response.data));
            dispatch(hideLoading());
        })
        .catch(error => {
            dispatch(hideLoading());
            LocalStorageUtils.notAuthorized();
            dispatch(authFailure(error));
            dispatch(showMessage('Bitte loggen sie sich erneut ein'));
            dispatch(doRelog());
            dispatch(push('login'));
            
        })
   }
}
