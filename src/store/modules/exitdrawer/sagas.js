// chama funções assincronas com respostas
// select busca informações sobre o estado
import {call, put, all, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
// import api from '../../../services/api';
// import {loginRequest, loginSucess, loginFailure} from './actions';
import {commonLoadingActivityOn, commonActionFailure} from '../common/actions';

import {navigate} from '../../../services/navigation';

function* exitAplicationSaga() {
  yield put(commonLoadingActivityOn(''));
  try {
    yield call(AsyncStorage.removeItem, '@novaDublagem:token');
    navigate('Login');
  } catch (err) {
    yield put(commonActionFailure('error ao sair'));
  }
}

export default all([
  takeLatest('@exitdrawer/EXIT_APLICATION', exitAplicationSaga),
]);
