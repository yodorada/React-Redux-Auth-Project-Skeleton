import {createReducer} from '../utils';
import {CONTENT_CHANGE} from '../constants';

const initialState = {
    link: ''
};

export default createReducer(initialState, {
    [CONTENT_CHANGE]: (state, payload) => {
       return Object.assign({}, state, {
            link: payload
        });
    }
});
