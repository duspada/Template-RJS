import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as toastActions } from 'react-redux-toastr';

import { Creators as AuthCreators } from './ducks/auth';
import { Creators as SignUpCreators } from './ducks/signUp';

const mapStateToProps = state => ({
  auth: state.auth,
  signUp: state.signUp,
  toastr: state.toastr,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...AuthCreators,
  ...SignUpCreators,
  ...toastActions,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps);
