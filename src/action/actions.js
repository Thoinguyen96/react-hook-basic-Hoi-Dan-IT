import { INCREMENT, DECREMENT } from "./types";

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
