import { connect } from 'react-redux';
import { increaseCounter } from '../../redux/actions';

import Candidate from './Candidate';

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: (payload) => dispatch(increaseCounter(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(Candidate);
