import { ADD_ITEM, ADD_FILTER, REMOVE_ITEM } from "./types";

export const addItem = (payload) => {
    return {
        type: ADD_ITEM,
        payload,
    }
};

export const removeItem = (payload) => {
    return {
        type: REMOVE_ITEM,
        payload,
    }
};

export const addFilter = (payload) => {
    return {
        type: ADD_FILTER,
        payload,
    }
};
