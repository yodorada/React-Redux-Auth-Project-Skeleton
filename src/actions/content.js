import {
    CONTENT_CHANGE
} from '../constants';


export function contentChange(link) {
    return {
        type: CONTENT_CHANGE,
        payload: link
    }
}

export function contentReset() {
    return {
        type: CONTENT_CHANGE,
        payload: ''
    }
}
