import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const allReducers = combineReducers({
    allUsers: userReducer,
})

export default allReducers;