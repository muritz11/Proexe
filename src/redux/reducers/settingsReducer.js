
const initialState = {
    siteName: "Flash",
    copyRight: "Flash 2021 all right reserved",
    riderSearchRadius: 25,
    commission: 25,
    playStoreLink: "",
    appleStoreLink: "",
    googleLink: "",
}

export const settingsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "SET_ISLOGGEDIN":
            return state = payload;
    
        default:
            return state;
    }
}
