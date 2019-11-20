// chama funções assincronas com respostas
// select busca informações sobre o estado
import {call, put, all, takeLatest, cancel} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../../services/api';
// import {loginRequest, loginSucess, loginFailure} from './actions';
import {
  commonLoadingActivityOn,
  commonActionSucess,
  commonActionFailure,
} from '../common/actions';

import {navigate} from '../../../services/navigation';

function* loginRequestSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const {username, password} = action.payload;
  if (username && password) {
    try {
      // const {username, password} = action.payload;
      const {data} = yield call(api.post, '/login', {
        username,
        password,
      });
      yield call(
        AsyncStorage.setItem,
        '@novaDublagem:token',
        JSON.stringify(data.token)
      );

      yield put(commonActionSucess(''));
      navigate('TableSelection');
    } catch (err) {
      yield put(commonActionFailure(err.response.data.message));
    }
  } else {
    yield put(commonActionFailure('Preencha os campos'));
  }
}
function* loginRequestExistSaga() {
  yield put(commonLoadingActivityOn(''));

  try {
    let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
    token = JSON.parse(token);

    if (token === null) {
      yield put(commonActionFailure(''));

      yield cancel;
    } else {
      yield call(api.get, '/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.tron.log(token);
      navigate('TableSelection');
    }
  } catch (err) {
    yield put(commonActionFailure(''));
    console.tron.log('catch');
  }
}
function* loginforgotPasswordSaga() {
  yield put(commonLoadingActivityOn(''));
  navigate('ForgotPassword');
}

export default all([
  takeLatest('@login/LOGIN_REQUEST', loginRequestSaga),
  takeLatest('@login/LOGIN_REQUEST_EXIST', loginRequestExistSaga),
  takeLatest('@login/LOGIN_FORGOT_PASSWORD', loginforgotPasswordSaga),
]);
