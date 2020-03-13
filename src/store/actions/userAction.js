import * as actionTypes from './actionTypes';

export const onGetUser = (userLogin) => {
    return {
        type: actionTypes.FETCH_USER,
        userLogin: userLogin
    }
}

export const fetchUserStart = () => {
    return {
        type: actionTypes.FETCH_USER_START
    }
}

export const fetchUserSuccess = userInfo => {
    return {
        type: actionTypes.FETCH_USER_SUCCESS,
        userInfo: userInfo
    }
}

export const fetchUserFail = err => {
    return {
        type: actionTypes.FETCH_USER_FAIL,
        err: err
    }
}
