import axios from '../utils/axios';

export const ADD_CATEGORY = "ADD_CATEGORY";
export const GET_CATEGORY = "GET_CATEGORY";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";

const _getCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
});

export const getCategories = () => {
    return (dispatch) => {
        return axios.get('categories')
            .then(result => {
                const list = [];

                result.data.forEach(category => {
                    list.push(category);
                });

                dispatch(_getCategories(list));
            });
    };
};