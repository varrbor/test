import * as actionTypes from './actionTypes';

export const onGetRepos = (userLogin) => {
    return {
        type: actionTypes.FETCH_REPOS,
        userLogin: userLogin
    }
}

export const fetchReposStart = () => {
    return {
        type: actionTypes.FETCH_REPOS_START
    }
}

export const fetchReposSuccess = repos => {
    return {
        type: actionTypes.FETCH_REPOS_SUCCESS,
        repos: repos
    }
}

export const fetchReposFail = err => {
    return {
        type: actionTypes.FETCH_REPOS_FAIL,
        err: err
    }
}
