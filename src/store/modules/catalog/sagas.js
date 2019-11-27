// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';
import {ProductsCatalogSucess} from './actions';
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

function* moreDetailsProduct() {
  yield put(commonLoadingActivityOn(''));
  try {
    yield put(commonLoadingActivityOn(''));
    navigate('ProductDetails');
  } catch (err) {
    yield put(commonActionFailure('Produto não encontrado'));
  }
}

export default all([
  takeLatest('@catalog/CATALOG_MORE_DETAILS_PRODUCT', moreDetailsProduct),
  takeLatest('@catalog/REQUEST_PRODUCT_CATALOG', requestProductCatalog),
]);
