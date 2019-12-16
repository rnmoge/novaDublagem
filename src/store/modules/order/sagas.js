// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
// import getRealm from '../../../services/realm';
import api from '../../../services/api';
import {
  handleDetailsClientSucess,
  clientsSucess,
  clientsAddressSucess,
} from './actions';
import {
  commonLoadingActivityOn,
  commonActionFailure,
  commonActionSucess,
} from '../common/actions';
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
function* clientsSaga() {
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  let user = yield call(AsyncStorage.getItem, '@novaDublagem:user');
  token = JSON.parse(token);
  user = JSON.parse(user);
  try {
    const {id} = user.cliente;
    const {data} = yield call(api.get, `/cliente?representante=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(clientsSucess(data));
  } catch (err) {
    yield put(commonActionFailure(''));
  }
}
function* handleDetailsClientSaga(action) {
  yield put(commonLoadingActivityOn(''));
  navigate('DetailsClient');
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  token = JSON.parse(token);
  try {
    const {id} = action.payload;
    const {data} = yield call(api.get, `/cliente/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(commonLoadingActivityOn(''));
    yield put(handleDetailsClientSucess(data));
    yield put(clientsAddressSucess(data.clienteEnderecos[0]));
    yield put(commonActionSucess());
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
  takeLatest('@order/CLIENTS', clientsSaga),
  takeLatest('@order/CLEAN_CATALOG', cleanCatalogSaga),
]);
