import { combineReducers } from "redux";
import { userReducer, selectedUserReducer } from "./userReducer";
import { successMsgReducer, errMsgReducer } from "./successMsgReducer";

const allReducers = combineReducers({
    allUsers: userReducer,
    selectedUser: selectedUserReducer,
    successMsg: successMsgReducer,
    errMsg: errMsgReducer,
})

export default allReducers;