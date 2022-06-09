import {UsersAction, UsersActionTypes, UsersState} from "../../types/uses";

const initialState: UsersState = {
    users: [],
    isLoading: false,
    error: null
}

export const userReducer = (state = initialState, action: UsersAction): UsersState => {
    switch (action.type) {
        case UsersActionTypes.FETCH_USERS:
            return { isLoading: true, error: null, users: [] };
        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return { isLoading: false, error: null, users: action.payload };
        case UsersActionTypes.FETCH_USERS_ERROR:
            return { isLoading: false, error: action.payload, users: [] };
        default:
            return state;
    }
}