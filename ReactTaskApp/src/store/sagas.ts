import {all, takeLatest} from 'redux-saga/effects';
import {GET_ALL_POST} from '../screen/home/redux/HomeAction';
import {HomeSaga} from '../screen/home/redux/HomeSaga';
export default function* sagas() {
  yield all([takeLatest(GET_ALL_POST, HomeSaga)]);
}
