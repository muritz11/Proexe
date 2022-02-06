import { SuccessMsgTypes } from "../constants/success-msg-action-types";

export const setSuccessMsg = (data) => {
    return {
        type: SuccessMsgTypes.SET_SUCCESS_MSG,
        payload: data
    }
}