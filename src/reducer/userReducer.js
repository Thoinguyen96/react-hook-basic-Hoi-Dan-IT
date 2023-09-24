import { FETCH_USER_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "../action/types";

const INITIAL_STATE = {
    listUsers: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            console.log("FETCH_USER_REQUEST=", state);

            return {
                ...state,
            };

        case FETCH_USERS_SUCCESS:
            console.log("FETCH_USERS_SUCCESS=", state);

            return {
                ...state,
                listUsers: action.dataUser,
            };
        case FETCH_USERS_ERROR:
            console.log("FETCH_USERS_ERROR=", state);
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default userReducer;
