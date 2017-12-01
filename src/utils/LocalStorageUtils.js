import AppConfig from '../config';

let localStorage = global.window.localStorage;

let namespace = AppConfig().storage.prefix;

function clear() {
    localStorage.clear();
}

function get(key) {
    return localStorage.getItem(namespace+key);
}

function set(key, value) {
    localStorage.setItem(namespace+key, value);
}

function remove(key) {
    localStorage.removeItem(namespace+key);
}

function setObject(key, object) {
    set(key, JSON.stringify(object));
}

function getObject(key) {
    return JSON.parse(get(key));
}


function login(obj) {
    set('token', obj.token);
    set('tokenExpires', obj.tokenExpires);
    set('username', obj.username);
}
function logout() {
    clear();
}
function notAuthorized() {
    clear();
}


function updateAccountData(obj) {
    set('username', obj.username);
    set('tokenExpires', obj.tokenExpires);
}

function getAccountData() {
    let accountData = {
        username : get('username')
    };
    return accountData;
}

function token() {
    return get('token');
}


function checkAuth(isAuthenticated) {
    if(token()) {
        let expire = new Date(get('tokenExpires'));
        let now = new Date();
        if(expire.getTime()>now.getTime()) {
            return true;
        }
    }
    if(!isAuthenticated) {
        return false;
    }
    return true;
}


const LocalStorageUtils = {
  clear, get, set, setObject, getObject, token, remove, login, logout, updateAccountData, getAccountData, checkAuth, notAuthorized
}

export default LocalStorageUtils;