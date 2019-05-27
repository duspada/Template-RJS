import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import { push } from 'connected-react-router';

import api from '~/services/api';

export function* getAuth(credentials) {
  try {
    const response = yield call(api.post, '/sessions', {
      method: 'POST',
      email: credentials.payload.email,
      password: credentials.payload.password,
    });
    if (yield response.status === 200) {
      yield put(push('/')); //go to some page
      // or do something, like put the token on the localstorage
    } else {
      yield put(
        toastrActions.add({
          type: 'error',
          title: 'Falha no login',
          message: 'Verifique suas credenciais.',
        }),
      );
    }
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Erro ao efetuar login.',
      }),
    );
  }
}
