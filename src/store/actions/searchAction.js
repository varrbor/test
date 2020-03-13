import * as actionTypes from './actionTypes';

export const updateUsersList = ( name ) => {
    return {
        type: actionTypes.UPDATE_USERS_LIST,
        name: name
    };
};

export const setUser = ( userLogin ) => {
    return {
        type: actionTypes.SET_USER,
        userLogin: userLogin
    };
};

export const searchUsersStart = () => {
    return {
        type: actionTypes.SEARCH_USERS_START
    }
}

export const searchUsersSuccess = users => {
    return {
        type: actionTypes.SEARCH_USERS_SUCCESS,
        users: users
    }
}

export const searchUsersFail = err => {
    return {
        type: actionTypes.SEARCH_USERS_FAIL,
        err: err
    }
}
