import {
    SHOW_SYSTEM_MESSAGE,
    DISMISS_SYSTEM_MESSAGE
} from '../constants';


export function showMessage(msg) {
    return {
        type: SHOW_SYSTEM_MESSAGE,
        payload: {
          message: msg
        }
    }
}

export function resetMessage() {
    return {
        type: DISMISS_SYSTEM_MESSAGE,
        payload: {}
    }
}
