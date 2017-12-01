import {createReducer} from '../utils';
import {SHOW_SYSTEM_MESSAGE,DISMISS_SYSTEM_MESSAGE} from '../constants';

const initialState = {
    message: '',
    isActive: false
};

export default createReducer(initialState, {
    [SHOW_SYSTEM_MESSAGE]: (state, payload) => {
       return Object.assign({}, state, {
            message: payload.message,
            isActive: true
        });
    },
    [DISMISS_SYSTEM_MESSAGE]: (state, payload) => {
       return Object.assign({}, state, {
            isActive: false
        });
    }
});
