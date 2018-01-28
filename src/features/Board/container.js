import { connect } from 'react-redux';
import { entitiesSelector } from 'features/Weather/selectors';
import { Board } from './Board';

const mapStateToProps = state => ({
  cities: entitiesSelector(state),
});

export default connect(mapStateToProps)(Board);
