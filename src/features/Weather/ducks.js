// import { createActions, handleActions, combineActions } from 'redux-actions';
export const GET_WEATHER = 'weather/GET_WEATHER';
const GET_WEATHER_SUCCESS = 'weather/GET_WEATHER_SUCCESS';
const GET_WEATHER_ERROR = 'weather/GET_WEATHER_ERROR';

export const getWeather = query => ({
  type: GET_WEATHER,
  payload: query,
});

export const getWeatherSuccess = data => ({
  type: GET_WEATHER_SUCCESS,
  payload: data,
});

export const getWeatherError = message => ({
  type: GET_WEATHER_ERROR,
  payload: message,
});

const initialState = {
  isLoading: false,
  error: '',
  entities: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        error: '',
        isLoading: true,
      };

    case GET_WEATHER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        entities: {
          ...state.entities,
          [action.payload.id]: {
            ...action.payload,
          },
        },
      };
    }

    case GET_WEATHER_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
