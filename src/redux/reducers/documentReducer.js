

const initialState = {
    documents: [
        {
        document: "Drivers license",
        docFor: "Riders",
        status: "Active",
        },
        {
        document: "Valid ID Card",
        docFor: "Riders",
        status: "Active",
        },
        {
        document: "Bike Receipt",
        docFor: "Riders",
        status: "Active",
        },
    ]
}

export const documentReducer = (state = initialState) => {
    return state
}
