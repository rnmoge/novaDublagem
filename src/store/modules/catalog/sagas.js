// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';
import {
  ProductsCatalogSucess,
  catalogMoreDetailsProductSucess,
  requestTablePriceSucess,
} from './actions';

import {commonLoadingActivityOn, commonActionFailure} from '../common/actions';
import {navigate} from '../../../services/navigation';

function* requestProductCatalog() {
  yield put(commonLoadingActivityOn(''));
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  token = JSON.parse(token);
  const {
    data: {data},
  } = yield call(api.get, '/linhamatriz', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  yield put(ProductsCatalogSucess(data));
}

function* moreDetailsProduct(action) {
  yield put(commonLoadingActivityOn(''));
  try {
    const {id, products} = action.payload;
    const product = products.find(element => {
      return element.id === id;
    });
    yield put(catalogMoreDetailsProductSucess(product));
    yield put(commonLoadingActivityOn(''));
    navigate('ProductDetails');
  } catch (err) {
    yield put(commonActionFailure('Produto não encontrado'));
  }
}
function* requestTablePriceSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const {idProduct, idTable} = action.payload;
  try {
    let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
    token = JSON.parse(token);
    const {
      data: {data},
    } = yield call(
      api.get,
      `tabelaprecolinhamatriz?tabelapreco=${idTable}&linhamatriz=${idProduct}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(requestTablePriceSucess(data));
  } catch (err) {
    yield put(commonActionFailure('Verifique sua conexão'));
  }
}
function* backCatalogSaga() {
  yield put(commonLoadingActivityOn(''));
  navigate('Catalogo');
}

export default all([
  takeLatest('@catalog/CATALOG_MORE_DETAILS_PRODUCT', moreDetailsProduct),
  takeLatest('@catalog/REQUEST_PRODUCT_CATALOG', requestProductCatalog),
  takeLatest('@catalog/REQUEST_TABLE_PRICE', requestTablePriceSaga),
  takeLatest('@catalog/BACK_CATALOG', backCatalogSaga),
]);
