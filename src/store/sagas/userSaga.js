import { put } from 'redux-saga/effects';
import axios from '../../axios-api'
import * as actions from '../actions/index'

export function* fetchUserSaga(props) {
    yield put(actions.fetchUserStart());
    try {
        const response = yield axios.get(`https://api.github.com/users/${props.userLogin}`);
        yield put(actions.fetchUserSuccess(response.data));
    } catch (err) {
        yield put(actions.fetchUserFail(err));
    }
}
