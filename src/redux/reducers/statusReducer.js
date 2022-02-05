
const initialState = {
    userStatus: [
        {
            id: 1,
            status: "Active",
        },
        {
            id: 2,
            status: "Suspended",
        },
    ],
    riderStatus: [
        {
            id: 1,
            status: "Active",
        },
        {
            id: 2,
            status: "Pending",
        },
        {
            id: 3,
            status: "Suspended",
        },
    ],
    orderStatus: [
        {
            id: 1,
            status: "Completed",
        },
        {
            id: 2,
            status: "Ongoing",
        },
        {
            id: 3,
            status: "Cancelled",
        },
    ]

}

export const statusReducer = (state = initialState) => {
    return state
}
