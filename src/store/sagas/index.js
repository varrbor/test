import { takeEvery, all } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import { searchUsersSaga } from './searchSaga'
import { fetchUserSaga } from './userSaga'
import { fetchReposSaga } from './reposSaga'

export function* watchActions() {
    yield all([
        takeEvery(actionTypes.UPDATE_USERS_LIST, searchUsersSaga),
        takeEvery(actionTypes.FETCH_USER, fetchUserSaga),
        takeEvery(actionTypes.FETCH_REPOS, fetchReposSaga)
    ])
}