import {put, all, takeLatest, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
// import getRealm from '../../../services/realm';
import api from '../../../services/api';
import {
  selectTableOrderSucess,
  searchDescriptionSucess,
  searchModelSucess,
} from './actions';
import {
  commonLoadingActivityOn,
  commonActionFailure,
  commonActionSucess,
} from '../common/actions';
// import {menuSucess} from '../menu/actions';
import {navigate} from '../../../services/navigation';
// import api2 from '../../../services/api2';
function* selectTableOrderSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const {idTable} = action.payload;

  try {
    yield put(selectTableOrderSucess(idTable));
  } catch (err) {
    yield put(commonActionFailure(''));
  }
}
function* searchDescripitionOrder(action) {
  yield put(commonLoadingActivityOn(''));
  const {id, description} = action.payload;
  try {
    let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
    token = JSON.parse(token);
    const {data} = yield call(
      api.get,
      `/linhamatriz?tabelaPreco=${id}&descricao=${description}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.tron.log(data);
    yield put(searchDescriptionSucess(data));
    yield put(commonActionSucess(''));
  } catch (err) {
    yield put(commonActionFailure(''));
  }
}
function* searchModelSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const {linha, id, model, descricao} = action.payload;

  try {
    let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
    token = JSON.parse(token);
    const {data} = yield call(
      api.get,
      `/linhamatriz?tabelaPreco=${id}&linha=${linha}&matriz=${model}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.tron.log('data');
    console.tron.log(data, descricao);
    yield put(searchModelSucess(data));
    yield put(commonActionSucess(''));
  } catch (err) {
    yield put(commonActionFailure(''));
  }
}
function* requestTablePriceSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const {idTable, idProduct} = action.payload;
  try {
    let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
    token = JSON.parse(token);

    const cores = yield call(api.get, `/linhamatriz/${idProduct}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.tron.log(cores);
    // yield put(ProductsCatalogSucessId(cores.data.cores));

    const {
      data: {data},
    } = yield call(
      api.get,
      `/tabelaprecolinhamatriz?tabelapreco=${idTable}&linhamatriz=${idProduct}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.tron.log(data.data);
    // yield put(requestTablePriceSucess(data));
    yield put(commonActionSucess(''));
  } catch (err) {
    yield put(commonActionFailure(''));
  }
}
function* backDetailsClientSaga() {
  yield put(commonLoadingActivityOn(''));
  navigate('DetailsClient');
}
function* handleProductSaga() {
  yield put(commonLoadingActivityOn(''));
  navigate('ProductOrder');
}

export default all([
  takeLatest('@neworder/BACK_DETAILS_CLIENT', backDetailsClientSaga),
  takeLatest('@neworder/HANDLE_PRODUCTS', handleProductSaga),
  takeLatest('@neworder/SELECT_TABLE_ORDER', selectTableOrderSaga),
  takeLatest('@newOrder/SEARCH_DESCRIPITION', searchDescripitionOrder),
  takeLatest('@newOrder/SEARCH_MODEL', searchModelSaga),
  takeLatest('@newOrder/COLOR_AND_SIZES', requestTablePriceSaga),
]);
