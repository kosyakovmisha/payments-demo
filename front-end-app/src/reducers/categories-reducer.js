import {GET_CATEGORIES} from "../actions/categories";

const categoriesReducerDefaultState = [];

export default (state = categoriesReducerDefaultState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return [...state, action.categories];
        default:
            return state;
    }
}