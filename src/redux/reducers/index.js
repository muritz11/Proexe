import { combineReducers } from "redux";
import { userReducer, loggedUserReducer } from "./userReducer";
import { loggedInReducer } from "./loggedInReducer";
import { orderHistoryReducer } from "./orderHistoryReducer";
import { statusReducer } from "./statusReducer";
import { notificationReducer } from "./notificationReducer";
import { documentReducer } from "./documentReducer";
import { settingsReducer } from "./settingsReducer";
import { sidebarReducer } from "./sidebarReducer";

const allReducers = combineReducers({
    sidebar: sidebarReducer,
    isLoggedIn: loggedInReducer,
    loggedUser: loggedUserReducer,
    allUsers: userReducer,
    orderHistory: orderHistoryReducer,
    allStatus: statusReducer,
    allnotification: notificationReducer,
    alldocument: documentReducer,
    siteSettings: settingsReducer,
})

export default allReducers;