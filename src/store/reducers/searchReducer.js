import * as actionTypes from '../actions/actionTypes';

const initialState = {
    usersList: null,
    userLogin: null,
    name: '',
    loading: false,
    err: {}
};

const setUser = ( state, action ) => {
    return {
        ...state,
        ...{  userLogin: action.userLogin, loading: false }
    }
};

const searchUsersStart = ( state, action ) => {
    return {
        ...state,
        ...{ loading: true }
    }
};

const searchUsersSuccess = ( state, action ) => {
    return {
        ...state,
        ...{ usersList: action.users, loading: false }
    }
};

const searchUsersFail = ( state, action ) => {
    return {
        ...state,
        ...{ err: action.err, loading: false }
    }
};

const searchReducer = (state = initialState, action) => {
    switch ( (action.type)) {
        case actionTypes.SET_USER: return setUser( state, action );
        case actionTypes.SEARCH_USERS_START: return searchUsersStart(state, action);
        case actionTypes.SEARCH_USERS_SUCCESS: return searchUsersSuccess(state, action);
        case actionTypes.SEARCH_USERS_FAIL: return searchUsersFail(state, action);
        default:
            return state;
    }
};

export default searchReducer;