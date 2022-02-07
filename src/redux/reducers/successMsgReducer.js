import { SuccessMsgTypes } from "../constants/success-msg-action-types";

const initialState = ''

export const successMsgReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SuccessMsgTypes.SET_SUCCESS_MSG:
            return payload
    
        default:
            return state;
    }
}

export const errMsgReducer = (state = '', {type, payload}) => {
    switch (type) {
        case SuccessMsgTypes.SET_ERR_MSG:
            return payload
    
        default:
            return state;
    }
}


