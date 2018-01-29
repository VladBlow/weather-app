import { put, call, takeLatest } from 'redux-saga/effects';
import {
  GET_WEATHER,
  getWeatherSuccess,
  getWeatherError,
  GET_WEATHER_BY_IDS,
  getWeatherByIdsSuccess,
  getWeatherByIdsError,
} from './ducks';
import { fetchWeatherByCity, fetchWeatherByIds } from './api';

function* getWeatherSaga(action) {
  try {
    const { data } = yield call(fetchWeatherByCity, action.payload);

    yield put(getWeatherSuccess(data));
  } catch (error) {
    yield put(getWeatherError(error.response.data.message));
  }
}

function* getWeatherByIdsSaga(action) {
  try {
    const { data } = yield call(fetchWeatherByIds, action.payload);

    yield put(getWeatherByIdsSuccess(data.list));
  } catch (error) {
    yield put(getWeatherByIdsError(error.response.data.message));
  }
}

export default function* watchGetWeatherSaga() {
  yield takeLatest(GET_WEATHER, getWeatherSaga);
  yield takeLatest(GET_WEATHER_BY_IDS, getWeatherByIdsSaga);
}
