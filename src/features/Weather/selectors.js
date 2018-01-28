import { createSelector } from 'reselect';

const weatherSelector = state => state.weather;

export const entitiesSelector = createSelector(
  weatherSelector,
  weather =>
    weather.entities ? Object.values(weather.entities) : weather.entities,
);

export const entitiesIdsSelector = createSelector(
  weatherSelector,
  weather =>
    weather.entities ? Object.keys(weather.entities) : weather.entities,
);
