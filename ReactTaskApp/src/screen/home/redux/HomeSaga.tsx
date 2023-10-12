import {put, call} from 'redux-saga/effects';
import {
  fetchAllPostFail,
  fetchAllPostStarted,
  fetchAllPostSuccess,
} from './HomeReducer';
import axios from 'axios';
export function* HomeSaga() {
  try {
    yield put(fetchAllPostStarted());

    const {ok, data} = yield call(
      axios.get,
      `http://localhost:4000/api/v1/posts?=sort=createdAt&_order=desc`,
    );
    console.log('data==>', data);
    yield put(fetchAllPostSuccess(data));
  } catch (err) {
    yield put(fetchAllPostFail());
  }
}
