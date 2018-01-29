/**
 * Actions and actions creators for one city
 */

export const GET_WEATHER = 'weather/GET_WEATHER';

export const getWeather = query => ({
  type: GET_WEATHER,
  payload: query,
});

const GET_WEATHER_SUCCESS = 'weather/GET_WEATHER_SUCCESS';

export const getWeatherSuccess = data => ({
  type: GET_WEATHER_SUCCESS,
  payload: data,
});

const GET_WEATHER_ERROR = 'weather/GET_WEATHER_ERROR';

export const getWeatherError = message => ({
  type: GET_WEATHER_ERROR,
  payload: message,
});

const DELETE_WEATHER_BY_ID = 'weather/DELETE_WEATHER_BY_ID';

export const deleteWeatherById = id => ({
  type: DELETE_WEATHER_BY_ID,
  payload: id,
});

/**
 * Actions and actions creators for several cities
 */

export const GET_WEATHER_BY_IDS = 'weather/GET_WEATHER_BY_IDS';

export const getWeatherByIds = data => ({
  type: GET_WEATHER_BY_IDS,
  payload: data,
});

const GET_WEATHER_BY_IDS_SUCCESS = 'weather/GET_WEATHER_BY_IDS_SUCCESS';

export const getWeatherByIdsSuccess = data => ({
  type: GET_WEATHER_BY_IDS_SUCCESS,
  payload: data,
});

const GET_WEATHER_BY_IDS_ERROR = 'weather/GET_WEATHER_BY_IDS_ERROR';

export const getWeatherByIdsError = data => ({
  type: GET_WEATHER_BY_IDS_ERROR,
  payload: data,
});

const initialState = {
  isLoading: false,
  error: '',
  entities: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
    case GET_WEATHER_BY_IDS: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

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

    case GET_WEATHER_BY_IDS_SUCCESS: {
      const entities = action.payload.reduce((acc, city) => {
        acc = {
          ...acc,
          [city.id]: city,
        };

        return acc;
      }, {});

      return {
        ...state,
        isLoading: false,
        entities,
      };
    }

    case DELETE_WEATHER_BY_ID: {
      delete state.entities[action.payload];

      return {
        ...state,
      };
    }

    case GET_WEATHER_ERROR:
    case GET_WEATHER_BY_IDS_ERROR: {
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
