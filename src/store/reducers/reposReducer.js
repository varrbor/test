import * as actionTypes from '../actions/actionTypes';

const initialState = {
    repos: [],
    loading: false,
    err: {}
};

const searchReposStart = ( state, action ) => {
    return {
        ...state,
        ...{ loading: true }
    }
};

const fetchReposSuccess = ( state, action ) => {
    return {
        ...state,
        ...{ repos: action.repos, loading: false }
    }
};

const searchReposFail = ( state, action ) => {
    return {
        ...state,
        ...{ err: action.err, loading: false }
    }
};

const userReducer = (state = initialState, action) => {
    switch ( (action.type)) {
        case actionTypes.FETCH_REPOS_START: return searchReposStart(state, action);
        case actionTypes.FETCH_REPOS_SUCCESS: return fetchReposSuccess(state, action);
        case actionTypes.FETCH_REPOS_FAIL: return searchReposFail(state, action);
        default:
            return state;
    }
};

export default userReducer;