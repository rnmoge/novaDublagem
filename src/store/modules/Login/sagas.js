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
  yield put(commonLoadingActivityOn('Loading...'));
  try {
    const {username, password} = action.payload;
    const {data} = yield call(api.get, '/users');
    const userSearch = data
      .map(user => {
        return user;
      })
      .find(user => {
        return user.user.toLowerCase().indexOf(username.toLowerCase()) !== -1;
      });
    console.tron.log(userSearch);
    console.tron.log(data);
    if (userSearch !== undefined) {
      if (userSearch.password === password) {
        yield call(
          AsyncStorage.setItem,
          '@novaDublagem:user',
          JSON.stringify({username, password})
        );
        yield put(commonActionSucess('Login sucess'));
        navigate('Home');
      } else {
        yield put(commonActionFailure('Password not exists'));
      }
    } else {
      yield put(commonActionFailure('User or password incorrect'));
    }
  } catch (err) {
    yield put(commonActionFailure('Connect error'));
  }
}
function* loginRequestExistSaga() {
  yield put(commonLoadingActivityOn('Loading...'));
  try {
    const userExist = JSON.parse(
      yield call(AsyncStorage.getItem, '@novaDublagem:user')
    );
    if (userExist === null) {
      yield put(commonActionFailure(''));
      yield cancel;
    }
    const {data} = yield call(api.get, '/users');
    const userSearch = data
      .map(user => {
        return user;
      })
      .find(user => {
        return (
          user.user.toLowerCase().indexOf(userExist.user.toLowerCase()) !== -1
        );
      });
    if (userSearch !== undefined) {
      if (userSearch.password === userExist.password) {
        yield put(commonActionSucess(''));
        navigate('TableSelection');
      } else {
        yield put(commonActionFailure(''));
      }
    } else {
      yield put(commonActionFailure(''));
    }
  } catch (err) {
    yield put(commonActionFailure(''));
  }
}
function* loginforgotPasswordSaga() {
  yield put(commonLoadingActivityOn('Loading...'));
  navigate('ForgotPassword');
}

export default all([
  takeLatest('@login/LOGIN_REQUEST', loginRequestSaga),
  takeLatest('@login/LOGIN_REQUEST_EXIST', loginRequestExistSaga),
  takeLatest('@login/LOGIN_FORGOT_PASSWORD', loginforgotPasswordSaga),
]);
