import { combineReducers } from 'redux';
import { weatherReducer } from 'features/Weather';

export const rootReducer = combineReducers({
  weather: weatherReducer,
});
