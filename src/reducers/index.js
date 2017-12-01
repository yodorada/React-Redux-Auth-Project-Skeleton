import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { REHYDRATE, PURGE, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth';
import notification from './notification';
import content from './content';

import AppConfig from '../config';

const config = {
	key: 'primary',
	whitelist: AppConfig().storage.persistWhitelist,
	blacklist: AppConfig().storage.persistBlacklist,
	keyPrefix: AppConfig().storage.prefix,
	storage: storage
}

export default persistCombineReducers(config, {
	auth,
	notification,
	content,
	routing: routerReducer,
	loadingBar: loadingBarReducer
});
