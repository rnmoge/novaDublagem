// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest} from 'redux-saga/effects';
// import AsyncStorage from '@react-native-community/async-storage';
// import api from '../../../services/api';
// import {cleanLogin} from './actions';
// import {loginRequest, loginSucess, loginFailure} from './actions';
import {
  commonLoadingActivityOn,
  commonActionSucess,
  commonActionFailure,
} from '../common/actions';

import {navigate} from '../../../services/navigation';

function* cleanLoginSaga() {
  yield put(commonLoadingActivityOn(''));
  navigate('Login');
}

export default all([takeLatest('', cleanLoginSaga)]);
