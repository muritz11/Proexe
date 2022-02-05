
const initialState = {
    users: [
        {
            id: 1,
            name: "Bassie Cooper",
            email: "tim.jennings@example.com",
            phone: "(671) 55-0110",
            status: "Active",
            password: ""
        },
        {
            id: 2,
            name: "Bradley Cooper",
            email: "tim.jennings@example.com",
            phone: "(671) 55-0110",
            status: "Suspended",
            password: ""
        },
        {
            id: 3,
            name: "Benjamin Carson",
            email: "tim.jennings@example.com",
            phone: "(671) 55-0110",
            status: "Active",
            password: ""
        },
        {
            id: 4,
            name: "Wakili Cooper",
            email: "tim.jennings@example.com",
            phone: "(671) 55-2022",
            status: "Active",
            password: ""
        },
        {
            id: 5,
            name: "Bassie Cooper",
            email: "tim.jennings@example.com",
            phone: "(671) 55-0110",
            status: "Active",
            password: ""
        },
    ],
    riders: [
        {
            id: 1,
            name: "Bassie Cooper",
            email: "tim.jennings@example.com",
            phone: "(671) 55-2022",
            status: "Active",
            online: 0,
            bank: "Access",
            accountNumber: "00099944333",
            message: "",
            password: ""
        },
        {
            id: 2,
            name: "Marshal Smith",
            email: "tim.jennings@example.com",
            phone: "(671) 55-0110",
            status: "Active",
            online: 1,
            bank: "Access",
            accountNumber: "00099944333",
            message: "",
            password: ""
        },
        {
            id: 3,
            name: "Bassie Cooper",
            email: "tim.jennings@example.com",
            phone: "(671) 55-0110",
            status: "Pending",
            online: 1,
            bank: "Access",
            accountNumber: "00099944333",
            message: "",
            password: ""
        },
        {
            id: 4,
            name: "Bradley Cooper",
            email: "tim.jennings@genesys.com",
            phone: "(671) 55-0110",
            status: "Active",
            online: 0,
            bank: "Access",
            accountNumber: "00099944333",
            message: "",
            password: ""
        },
        {
            id: 5,
            name: "Bassie Cooper",
            email: "tim.jennings@example.com",
            phone: "(671) 55-0110",
            status: "Active",
            online: 1,
            bank: "Access",
            accountNumber: "00099944333",
            message: "",
            password: ""
        },
        {
            id: 6,
            name: "Bassie Cooper",
            email: "tim.jennings@example.com",
            phone: "(671) 55-2022",
            status: "Suspended",
            online: 0,
            bank: "Access",
            accountNumber: "00099944333",
            message: "",
            password: ""
        },
        {
            id: 7,
            name: "Bassie Cooper",
            email: "tim.jennings@example.com",
            phone: "(671) 55-0110",
            status: "Active",
            online: 1,
            bank: "Access",
            accountNumber: "00099944333",
            message: "",
            password: ""
        },
        {
            id: 8,
            name: "Mohamadu Buhari",
            email: "tim.jennings@example.com",
            phone: "(671) 55-0110",
            status: "Active",
            online: 1,
            bank: "Access",
            accountNumber: "00099944333",
            message: "",
            password: ""
        },
        {
            id: 9,
            name: "Charles Wakili",
            email: "tim.jennings@example.com",
            phone: "(671) 55-0110",
            status: "Pending",
            online: 1,
            bank: "Access",
            accountNumber: "00099944333",
            message: "",
            password: ""
        },
        {
            id: 10,
            name: "Bassie Cooper",
            email: "tim.jennings@example.com",
            phone: "(671) 55-0110",
            status: "Active",
            online: 1,
            bank: "Access",
            accountNumber: "00099944333",
            message: "",
            password: ""
        },
        {
            id: 11,
            name: "Bassie Cooper",
            email: "tim.jennings@example.com",
            phone: "(671) 55-0110",
            status: "Pending",
            online: 1,
            bank: "Access",
            accountNumber: "00099944333",
            message: "",
            password: ""
        },
        {
            id: 12,
            name: "Bassie Cooper",
            email: "tim.jennings@example.com",
            phone: "(671) 55-0110",
            status: "Pending",
            online: 1,
            bank: "Access",
            accountNumber: "00099944333",
            message: "",
            password: ""
        },
        {
            id: 13,
            name: "Bassie Cooper",
            email: "tim.jennings@example.com",
            phone: "(671) 55-0110",
            status: "Pending",
            online: 1,
            bank: "Access",
            accountNumber: "00099944333",
            message: "",
            password: ""
        },
        {
            id: 14,
            name: "Chinonso Cooper",
            email: "tim.jennings@example.com",
            phone: "(671) 55-0110",
            status: "Pending",
            online: 1,
            bank: "Access",
            accountNumber: "00099944333",
            message: "",
            password: ""
        },
    ]
}

export const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        //TODO ??
        case "SET_STATUS":
            return state.users[0].status = payload;
    
        default:
            return state;
    }
}

export const loggedUserReducer = (state={}, {type, payload}) => {
    switch (type) {
        case "LOGGED_USER":
            return payload
    
        default:
            return state
    }
}