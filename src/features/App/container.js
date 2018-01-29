import { connect } from 'react-redux';
import { entitiesIdsSelector } from 'features/Weather/selectors';
import { getWeatherByIds } from 'features/Weather/ducks';
import { App } from './App';

const mapStateToProps = state => ({
  citiesIds: entitiesIdsSelector(state),
});

const mapDispatchToProps = {
  getWeatherByIds,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
