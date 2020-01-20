import {put, all, takeLatest, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
// import getRealm from '../../../services/realm';
import api from '../../../services/api';
import {
  selectTableOrderSucess,
  searchDescriptionSucess,
  searchModelSucess,
  tablePriceSucess,
  colorsProduts,
  saveCommision,
  sizePriceOneSucess,
  selectTypeChargeSucess,
  selectPackingSucess,
  selectPagamentSucess,
  detailsProduct,
  sizesSucess,
  billingDateSucess,
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

    let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
    token = JSON.parse(token);
    const {data} = yield call(api.get, `/tabelapreco`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const tabela = data.find(element => {
      return element.id === idTable;
    });
    yield put(saveCommision(tabela));
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
    yield put(searchDescriptionSucess(data));
    yield put(commonActionSucess(''));
  } catch (err) {
    yield put(commonActionFailure(''));
  }
}
function* searchModelSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const {linha, id, model} = action.payload;

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
    yield put(colorsProduts(cores.data.cores));
    yield put(detailsProduct(cores.data));
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

    yield put(tablePriceSucess(data));
    yield put(commonActionSucess(''));
  } catch (err) {
    yield put(commonActionFailure(''));
  }
}
function* backDetailsClientSaga() {
  yield put(commonLoadingActivityOn(''));
  navigate('DetailsClient');
  yield put(commonActionSucess(''));
}
function* handleProductSaga() {
  yield put(commonLoadingActivityOn(''));
  navigate('ProductOrder');
}
function* sizePriceSaga(action) {
  yield put(commonLoadingActivityOn(''));
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  token = JSON.parse(token);
  const {id, idGroup, sizes, idProduct} = action.payload;

  try {
    const price1 = sizes.find(element => {
      return element.id === id;
    });
    const data = yield call(
      api.get,
      `/linhamatriz/${idProduct}?grupotamanhoid=${idGroup}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    yield put(sizesSucess(data.data.tamanhos));

    yield put(sizePriceOneSucess(price1));
  } catch (err) {
    yield put(commonActionFailure(''));
  }
}
function* billingDateSaga(action) {
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  token = JSON.parse(token);
  const {id} = action.payload;
  try {
    const billingDate = yield call(
      api.get,
      `datafaturamento?linhaMatrizId=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    yield put(billingDateSucess(billingDate.data.data_faturamento));
  } catch (err) {
    yield put(commonActionFailure(''));
  }
}
function* selectTypeChargeSaga() {
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  token = JSON.parse(token);

  const charge = yield call(api.get, `/tipocobranca`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  yield put(selectTypeChargeSucess(charge.data));
  const packing = yield call(api.get, `/embalagem`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  yield put(selectPackingSucess(packing.data));
  const pagament = yield call(api.get, `/condicaopagamento`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  yield put(selectPagamentSucess(pagament.data));
}
export default all([
  takeLatest('@neworder/BACK_DETAILS_CLIENT', backDetailsClientSaga),
  takeLatest('@neworder/HANDLE_PRODUCTS', handleProductSaga),
  takeLatest('@neworder/SELECT_TABLE_ORDER', selectTableOrderSaga),
  takeLatest('@newOrder/SEARCH_DESCRIPITION', searchDescripitionOrder),
  takeLatest('@newOrder/SEARCH_MODEL', searchModelSaga),
  takeLatest('newOrder/BILLING_DATE', billingDateSaga),
  takeLatest('@newOrder/COLOR_AND_SIZES', requestTablePriceSaga),
  takeLatest('@newOrder/SIZE_PRICE_ONE', sizePriceSaga),
  takeLatest('@newOrder/SELECT_TYPE_CHARGE', selectTypeChargeSaga),
]);
