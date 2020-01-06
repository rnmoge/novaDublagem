// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';

import {
  commonLoadingActivityOn,
  commonActionFailure,
  commonActionSucess,
} from '../common/actions';
import {navigate} from '../../../services/navigation';
import {dateValidatorSucess, cleanValidator} from './actions';

function* backNewOrderSaga() {
  yield put(commonLoadingActivityOn(''));
  navigate('NewOrder');
}
function* dateValidatorSaga(action) {
  yield put(commonLoadingActivityOn(''));
  yield put(cleanValidator());
  const {idProduto, date} = action.payload;
  try {
    let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
    token = JSON.parse(token);
    const repost = yield call(
      api.get,
      `datafaturamento?confdate=${date}&linhaMatrizId=${idProduto}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (repost.data.dataValida === true) {
      yield put(dateValidatorSucess(true));
    } else {
      yield put(dateValidatorSucess(false));
    }
  } catch (err) {
    yield put(commonActionFailure('Error ao bsucar uma data válida'));
  }
}
function* selectTransportSaga() {
  yield put(commonLoadingActivityOn(''));
  try {
    let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
    token = JSON.parse(token);
    const transport = yield call(api.get, `cliente?transportadora=`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(commonActionSucess(''));
  } catch (err) {
    yield put(commonActionFailure('Error ao buscar a transportadora'));
  }
}
export default all([
  takeLatest('@productorder/BACK_NEW_ORDER', backNewOrderSaga),
  takeLatest('@productorder/DATE_VALIDATOR', dateValidatorSaga),
  // takeLatest('@catalog/REQUEST_TABLE_PRICE', requestTablePriceSaga),
  // takeLatest('@catalog/BACK_CATALOG', backCatalogSaga),
  // takeLatest('@catalog/SEARCH_DESCRIPITION', searchDescripitionSaga),
  // takeLatest('@catalog/SEARCH_MODEL', searchModelSaga),
]);
