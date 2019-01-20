import { all, fork } from 'redux-saga/effects';
import citySaga from './citySagas';

export default function* () {
  yield all([
    fork(citySaga),
  ]);
};
