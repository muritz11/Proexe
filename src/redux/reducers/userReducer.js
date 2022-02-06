import { UsersActionTypes } from "../constants/users-action-types";

const initialState = {
    users: []
}

export const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case UsersActionTypes.SET_USERS:
            return { ...state, users: payload }
    
        case UsersActionTypes.ADD_USER:
            return { ...state, users: [ ...state.users, payload ] }
    
        default:
            return state;
    }
}

export const selectedUserReducer = (state={}, {type, payload}) => {
    switch (type) {
        case UsersActionTypes.SELECTED_USER:
            return { ...state, ...payload }
    
        case UsersActionTypes.REMOVE_SELECTED_USER:
            return {}
    
        default:
            return state
    }
}