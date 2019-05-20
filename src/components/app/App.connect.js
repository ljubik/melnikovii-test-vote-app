import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => ({
  main: state.main
});

export default connect(
  mapStateToProps,
  null
)(App);
