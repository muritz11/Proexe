import { SidebarActionTypes } from "../constants/sidebar-action-types";

export const toggleSidebar = (data) => {
    return {
        type: SidebarActionTypes.TOGGLE_SIDEBAR,
        payload: data
    }
}