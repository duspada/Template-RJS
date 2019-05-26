import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as toastr } from 'react-redux-toastr';

import auth from './auth';
import signUp from './signUp';

export default history => combineReducers({
  auth,
  toastr,
  signUp,
  router: connectRouter(history),
});
