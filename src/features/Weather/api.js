import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const APP_ID = 'appid=770e97f1d934e290ce7d7b9aa681a860';
const UNITS = 'units=metric';

export const fetchWeatherByCity = city =>
  axios.get(`${BASE_URL}weather?q=${city}&${APP_ID}&${UNITS}`);

export const fetchWeatherByIds = citiesIds =>
  axios.get(`${BASE_URL}group?id=${citiesIds.join(',')}&${APP_ID}&${UNITS}`);
