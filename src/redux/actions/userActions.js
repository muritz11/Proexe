import { UsersActionTypes } from "../constants/users-action-types"

export const setUsers = (users) => {
    return {
        type: UsersActionTypes.SET_USERS,
        payload: users
    }
}

export const addUser = (user) => {
    return {
        type: UsersActionTypes.ADD_USER,
        payload: user
    }
}

export const updateUser = (data) => {
    return {
        type: UsersActionTypes.UPDATE_USER,
        payload: data
    }
}


export const selectUser = (user) => {
    return {
        type: UsersActionTypes.SELECTED_USER,
        payload: user
    }
}

export const deleteUser = (index) => {
    return {
        type: UsersActionTypes.DELETE_USER,
        payload: index
    }
}

export const removeSelectedUser = () => {
    return {
        type: UsersActionTypes.REMOVE_SELECTED_USER
    }
}


// export const loggedUser = (user) => {
//     return {
//         type: "LOGGED_USER",
//         payload: user
//     }
// }