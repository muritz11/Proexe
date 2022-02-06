import { combineReducers } from "redux";
import { userReducer, selectedUserReducer } from "./userReducer";
import { successMsgReducer } from "./successMsgReducer";

const allReducers = combineReducers({
    allUsers: userReducer,
    selectedUser: selectedUserReducer,
    successMsg: successMsgReducer,
})

export default allReducers;