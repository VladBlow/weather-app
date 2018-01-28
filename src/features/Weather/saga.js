import { put, call, takeLatest } from 'redux-saga/effects';
import { GET_WEATHER, getWeatherSuccess, getWeatherError } from './ducks';
import { fetchWeatherByCity } from './api';

function* getWeatherSaga(action) {
  try {
    const { data } = yield call(fetchWeatherByCity, action.payload);

    yield put(getWeatherSuccess(data));
  } catch (error) {
    yield put(getWeatherError(error.response.data.message));
  }
}

export default function* watchGetWeatherSaga() {
  yield takeLatest(GET_WEATHER, getWeatherSaga);
}
