export const selectUser = (user) => {
    return {
        type: "SELECT_USER",
        payload: user
    }
}

export const setStatus = (status) => {
    return {
        type: "SET_STATUS",
        payload: status
    }
}

export const loggedUser = (user) => {
    return {
        type: "LOGGED_USER",
        payload: user
    }
}