import { UsersAction, UsersActionTypes } from "../../types/uses";
import { Dispatch } from "redux";
import axios from "axios";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch({ type: UsersActionTypes.FETCH_USERS });
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            dispatch({ type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
        } catch(e) {
            dispatch({
                type: UsersActionTypes.FETCH_USERS_ERROR,
                payload: "произошла ошибка"
            });
        }
    }
}