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
    
        case UsersActionTypes.UPDATE_USER:
            const upd_ind = state.users.findIndex((val) => {
                return val.id === payload.index
            })
            state.users[upd_ind] = payload.data
            return state
    
        case UsersActionTypes.DELETE_USER:
            const del_ind = state.users.findIndex((val) => {
                return val.id === payload
            })
            state.users.splice(del_ind, 1)
            return state
    
        default:
            return state;
    }
}

export const selectedUserReducer = (state='', {type, payload}) => {
    switch (type) {
        case UsersActionTypes.SELECTED_USER:
            return payload
    
        case UsersActionTypes.REMOVE_SELECTED_USER:
            return {}
    
        default:
            return state
    }
}