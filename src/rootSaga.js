import { all, fork } from 'redux-saga/effects';
import { weatherSaga } from 'features/Weather';

export function* rootSaga() {
  yield all([weatherSaga].map(saga => fork(saga)));
}
