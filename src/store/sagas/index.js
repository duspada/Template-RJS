import { all, takeLatest } from 'redux-saga/effects';

import { Types as AuthTypes } from '../ducks/auth';
import { Types as SignUpTypes } from '../ducks/signUp';
import { getAuth } from './auth';
import { signUp } from './signUp';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, getAuth),
    takeLatest(SignUpTypes.SIGNUP_REQUEST, signUp),
  ]);
}
