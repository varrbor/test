import { put } from 'redux-saga/effects';
import axios from '../../axios-api'
import * as actions from '../actions/index'

export function* searchUsersSaga(props) {
    yield put(actions.searchUsersStart());
    try {
        const response = yield axios.get(`https://api.github.com/search/users?q= ${props.name}`);
        yield put(actions.searchUsersSuccess(response.data));
    } catch (err) {
        yield put(actions.searchUsersFail(err));
    }
}
