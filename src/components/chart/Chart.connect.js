import { connect } from 'react-redux';
import Chart from './Chart';

const mapStateToProps = (state) => ({
  voteCounts: state.main.voteCounts,
  colors: state.main.colors
});

export default connect(
  mapStateToProps,
  {}
)(Chart);
