// chama funções assincronas com respostas
// select busca informações sobre o estado
import {call, put, all, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
// import api from '../../../services/api';
import {CatalogClean} from '../catalog/actions';
import {loginClean} from '../login/actions';
import {tableClean} from '../table/actions';
import {commonLoadingActivityOn, commonActionFailure} from '../common/actions';

// import getRealm from '../../../services/realm';
import {navigate} from '../../../services/navigation';

function* exitAplicationSaga() {
  yield put(commonLoadingActivityOn(''));
  try {
    yield put(CatalogClean());
    yield put(loginClean());
    yield put(tableClean());
    yield call(AsyncStorage.removeItem, '@novaDublagem:token');
    yield call(AsyncStorage.removeItem, '@novaDublagem:userTable');
    yield call(AsyncStorage.removeItem, '@novaDublagem:user');
    navigate('Login');
  } catch (err) {
    yield put(commonActionFailure('error ao sair'));
  }
}

export default all([
  takeLatest('@exitdrawer/EXIT_APLICATION', exitAplicationSaga),
]);
