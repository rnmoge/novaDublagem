// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest} from 'redux-saga/effects';
// import AsyncStorage from '@react-native-community/async-storage';
// import getRealm from '../../../services/realm';
// import api from '../../../services/api';
// import {loginRequest, loginSucess, loginFailure} from './actions';
import {commonLoadingActivityOn} from '../common/actions';
// import {menuSucess} from '../menu/actions';
import {navigate} from '../../../services/navigation';

function* handleRegisterOrderSaga() {
  yield put(commonLoadingActivityOn(''));
  navigate('RegisterOrder');
}
function* handleQueryOrderSaga() {
  yield put(commonLoadingActivityOn(''));
  navigate('QueryOrder');
}
function* handleTransmitOrderSaga() {
  yield put(commonLoadingActivityOn(''));
  navigate('TransmitOrder');
}
export default all([
  takeLatest('@order/HANDLE_REGISTER_ORDER', handleRegisterOrderSaga),
  takeLatest('@order/HANDLE_QUERY_ORDER', handleQueryOrderSaga),
  takeLatest('@order/HANDLE_TRANSMIT_ORDER', handleTransmitOrderSaga),
]);
