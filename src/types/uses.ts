export interface UsersState {
    users: any[];
    isLoading: boolean;
    error: null | string;
}

export enum UsersActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

export interface FetchUsersAction {
    type: UsersActionTypes.FETCH_USERS;
}

export interface FetchUsersSuccessAction {
    type: UsersActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

export interface FetchUsersErrorAction {
    type: UsersActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UsersAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction;