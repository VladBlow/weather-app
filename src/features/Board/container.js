import { connect } from 'react-redux';
import { entitiesSelector } from 'features/Weather/selectors';
import { deleteWeatherById } from 'features/Weather/ducks';
import { Board } from './Board';

const mapStateToProps = state => ({
  cities: entitiesSelector(state),
});

const mapDispatchToProps = {
  deleteWeatherById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
