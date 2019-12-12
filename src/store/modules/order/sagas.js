// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest} from 'redux-saga/effects';
// import AsyncStorage from '@react-native-community/async-storage';
// import getRealm from '../../../services/realm';
// import api from '../../../services/api';
import {handleDetailsClientSucess} from './actions';
import {commonLoadingActivityOn, commonActionFailure} from '../common/actions';
// import {menuSucess} from '../menu/actions';
import {CatalogClean} from '../catalog/actions';
import {navigate} from '../../../services/navigation';
// import api2 from '../../../services/api2';

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
function* handleDetailsClientSaga(action) {
  yield put(commonLoadingActivityOn(''));

  try {
    const {id, data} = action.payload;
    const client = data.find(element => {
      return element.id === id;
    });

    yield put(handleDetailsClientSucess(client));
    navigate('DetailsClient');
  } catch (err) {
    yield put(commonActionFailure(''));
  }
}
function* backOrderSaga() {
  yield put(commonLoadingActivityOn(''));
  navigate('Request');
}
function* backRegisterOrderSaga() {
  yield put(commonLoadingActivityOn(''));
  navigate('RegisterOrder');
}
function* handleNewOrderSaga() {
  yield put(commonLoadingActivityOn(''));
  navigate('NewOrder');
}
function* cleanCatalogSaga() {
  yield put(CatalogClean());
}

export default all([
  takeLatest('@order/HANDLE_REGISTER_ORDER', handleRegisterOrderSaga),
  takeLatest('@order/HANDLE_QUERY_ORDER', handleQueryOrderSaga),
  takeLatest('@order/HANDLE_TRANSMIT_ORDER', handleTransmitOrderSaga),
  takeLatest('@order/BACK_ORDER', backOrderSaga),
  takeLatest('@order/HANDLE_DETAILS_CLIENT', handleDetailsClientSaga),
  takeLatest('@order/BACK_REGISTER_ORDER', backRegisterOrderSaga),
  takeLatest('@order/HANDLE_NEW_ORDER', handleNewOrderSaga),
  takeLatest('@order/CLEAN_CATALOG', cleanCatalogSaga),
]);
