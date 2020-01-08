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
import {
  dateValidatorSucess,
  cleanValidator,
  selectTransportSucess,
  selectTransportInputSucess,
  selectDespachInputSucess,
} from './actions';

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
    yield put(selectTransportSucess(transport.data));
    yield put(commonActionSucess(''));
  } catch (err) {
    yield put(commonActionFailure('Error ao buscar a transportadora'));
  }
}
// const {id, sizes} = action.payload;
//   try {
//     const price1 = sizes.find(element => {
//       return element.id === id;
//     });
function* selectTransportInput(action) {
  yield put(commonLoadingActivityOn(''));
  const {id, transports} = action.payload;
  try {
    const transport = transports.find(element => {
      return element.id === id;
    });
    yield put(selectTransportInputSucess(transport));
  } catch (err) {
    console.tron.log('entrou catch');
  }
}
function* selectDespachInput(action) {
  yield put(commonLoadingActivityOn(''));
  const {id, despachs} = action.payload;
  try {
    const despach = despachs.find(element => {
      return element.id === id;
    });
    yield put(selectDespachInputSucess(despach));
  } catch (err) {
    console.tron.log('entrou catch');
  }
}
export default all([
  takeLatest('@productorder/BACK_NEW_ORDER', backNewOrderSaga),
  takeLatest('@productorder/DATE_VALIDATOR', dateValidatorSaga),
  takeLatest('@productorder/SELECT_TRANSPORT', selectTransportSaga),
  takeLatest('@productorder/SELECT_TRANSPORT_INPUT', selectTransportInput),
  takeLatest('@productorder/SELECT_DESPACH_INPUT', selectDespachInput),
  // takeLatest('@catalog/SEARCH_DESCRIPITION', searchDescripitionSaga),
  // takeLatest('@catalog/SEARCH_MODEL', searchModelSaga),
]);
