import { put } from 'redux-saga/effects';
import axios from '../../axios-api'
import * as actions from '../actions/index'

export function* fetchReposSaga(props) {
    yield put(actions.fetchReposStart());
    try {
        const response = yield axios.get(`https://api.github.com/users/${props.userLogin}/repos`);
        yield put(actions.fetchReposSuccess(response.data));
    } catch (err) {
        yield put(actions.fetchReposFail(err));
    }
}
