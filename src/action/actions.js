import axios from "axios";
import {
    INCREMENT,
    DECREMENT,
    FETCH_USER_REQUEST,
    FETCH_USERS_ERROR,
    FETCH_USERS_SUCCESS,
    CREATE_USER_REQUEST,
    CREATE_USERS_SUCCESS,
    CREATE_USERS_ERROR,
} from "./types";

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
            dispatch(fetchUserSuccess(data));
        } catch (error) {
            console.log(error);
            dispatch(fetchUsersError());
        }
    };
};

export const fetchUsersRequest = () => {
    return { type: FETCH_USER_REQUEST };
};

export const fetchUserSuccess = (payload) => {
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

export const createUsersRequest = () => {
    return { type: CREATE_USER_REQUEST };
};

export const createUserSuccess = (payload) => {
    return {
        type: CREATE_USERS_SUCCESS,
        dataUser: payload,
    };
};

export const createUsersError = () => {
    return {
        type: CREATE_USERS_ERROR,
    };
};
export const createUserRedux = (email, password, username) => {
    return async (dispatch, getState) => {
        dispatch(createUsersRequest());
        try {
            let res = await axios.post("http://localhost:8080/users/create", { email, password, username });
            if (res && res.data.errCode === 0) {
                dispatch(createUserSuccess());
                dispatch(fetchAllUser());
            }
        } catch (error) {
            dispatch(createUsersError());
        }
    };
};
