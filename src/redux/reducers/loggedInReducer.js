
const initialState = false

export const loggedInReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "SET_ISLOGGEDIN":
            return state = payload;
    
        default:
            return state;
    }
}
