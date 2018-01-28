import { connect } from 'react-redux';
import { getWeather } from 'features/Weather/ducks';
import { Header } from './Header';

const mapDispatchToProps = {
  getWeather,
};

export default connect(null, mapDispatchToProps)(Header);
