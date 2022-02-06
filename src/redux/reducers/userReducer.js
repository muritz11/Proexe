
const initialState = {
    users: [
        {
            id: 1,
            name: "John Smith",
            username: "johnsmith",
            email: "john@smith.com",
            city: "NYC"
        },
        {
            id: 2,
            name: "Jane Smith",
            username: "janesmith",
            email: "jane@smith.com",
            city: "NYC"
        },
        {
            id: 3,
            name: "John Smith",
            username: "johnsmith",
            email: "john@smith.com",
            city: "NYC"
        },
        {
            id: 4,
            name: "John Smith",
            username: "johnsmith",
            email: "john@smith.com",
            city: "NYC"
        },
    ]
}

export const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        //TODO ?? [update, del user]
        // case "SET_STATUS":
        //     return state.users[0].status = payload;
    
        default:
            return state;
    }
}

// export const loggedUserReducer = (state={}, {type, payload}) => {
//     switch (type) {
//         case "LOGGED_USER":
//             return payload
    
//         default:
//             return state
//     }
// }