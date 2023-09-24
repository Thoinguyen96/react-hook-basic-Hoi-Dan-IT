import axios from "axios";
import { INCREMENT, DECREMENT, FETCH_USER_REQUEST, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS } from "./types";

export const increaseCounter = () => {
    return {
        type: INCREMENT,
        payload: { name: "thoi nguyen", like: "30" },
    };
};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};

export const fetchAllUser = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUsersRequest());
        try {
            let res = await axios.get("http://localhost:8080/users/all");
            const data = res && res.data ? res.data : [];
            dispatch(fetUserSuccess(data));
            console.log(data);
        } catch (error) {
            console.log(error);
            dispatch(fetchUsersError());
        }
    };
};

export const fetchUsersRequest = () => {
    return { type: FETCH_USER_REQUEST };
};

export const fetUserSuccess = (payload) => {
    return {
        type: FETCH_USERS_SUCCESS,
        dataUser: payload,
    };
};

export const fetchUsersError = () => {
    return {
        type: FETCH_USERS_ERROR,
    };
};
