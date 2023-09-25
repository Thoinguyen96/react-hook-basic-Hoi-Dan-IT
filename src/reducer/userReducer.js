import {
    FETCH_USER_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
    CREATE_USER_REQUEST,
    CREATE_USERS_SUCCESS,
    CREATE_USERS_ERROR,
} from "../action/types";

const INITIAL_STATE = {
    listUsers: [],
    isError: false,
    isLoading: false,
    isCreating: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                isError: false,
                isLoading: true,
            };

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                listUsers: action.dataUser,
                isError: false,
                isLoading: false,
            };
        case FETCH_USERS_ERROR:
            return {
                ...state,
                isError: true,
                isLoading: false,
            };

        case CREATE_USER_REQUEST:
            return {
                ...state,
                isCreating: true,
            };
        case CREATE_USERS_SUCCESS:
            return {
                ...state,
                isCreating: false,
            };
        case CREATE_USERS_ERROR:
            return {
                ...state,
                isCreating: false,
            };
        default:
            return state;
    }
};

export default userReducer;
