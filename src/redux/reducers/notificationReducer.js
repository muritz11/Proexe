

const initialState = {
    notifications: [
        {
        sendTo: "Riders",
        date: "0 Seconds ago",
        message: "Congrats your account has been approved.",
        },
        {
        sendTo: "Users",
        date: "0 Seconds ago",
        message: "Congrats your account has been verified.",
        },
        {
        sendTo: "Users",
        date: "Aug 25, 2021",
        message: "Hello welcome to flash!!",
        },
        {
        sendTo: "All",
        date: "Aug 25, 2021",
        message: "Happy Independence Day",
        },
        {
        sendTo: "All",
        date: "Aug 25, 2021",
        message: "You successfully created your account.",
        },
    ]
}

export const notificationReducer = (state = initialState) => {
    return state
}
