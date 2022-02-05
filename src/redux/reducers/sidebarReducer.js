import { SidebarActionTypes} from "../constants/sidebar-action-types";

const initialState = false

export const sidebarReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SidebarActionTypes.TOGGLE_SIDEBAR:
            return state = payload;
    
        default:
            return state;
    }
}
