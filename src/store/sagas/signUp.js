import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import { push } from 'connected-react-router';

import api from '../../services/api';
import { Creators } from '../ducks/signUp';

export function* signUp({ name, email, password }) {
  try {
    const response = yield call(api.post, 'users', { name, email, password });

    localStorage.setItem('@MyApp:token', response.data.token);

    yield put(Creators.signUpSuccess(response.data.token));
    yield put(push('/'));
  } catch (err) {
    yield put(Creators.signUpFailure(err.message));
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no cadastro',
        message: 'Houve falha ao realizar seu cadastro.',
      }),
    );
  }
}

export function* signOut() {
  localStorage.removeItem('@MyApp:token');
  localStorage.removeItem('@MyApp:team');

  yield put(push('/signin'));
}