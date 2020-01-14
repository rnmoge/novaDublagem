// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
// import api from '../../../services/api';
import {addToCartSucess} from './actions';

import {
  // commonActionFailure,
  // commonActionSucess,
  commonLoadingActivityOn,
} from '../common/actions';

function* requestCartSga() {
  let product = yield call(AsyncStorage.getItem, '@novaDublagem:Products');
  product = JSON.parse(product);
  console.tron.log(product);
  if (product === null) {
    yield put(addToCartSucess([]));
  } else {
    yield put(addToCartSucess(product));
  }
}
function* addToCartSaga(action) {
  yield put(commonLoadingActivityOn(''));
  yield call(
    AsyncStorage.setItem,
    '@novaDublagem:Products',
    JSON.stringify(action.payload.list)
  );
}
function* removeToCartSaga() {
  yield call(AsyncStorage.removeItem, '@novaDublagem:Products');
}
export default all([
  takeLatest('@cart/ADD_TO_CART', addToCartSaga),
  takeLatest('@cart/REMOVE_TO_CART', removeToCartSaga),
  takeLatest('@cart/REQUEST_CART', requestCartSga),
]);
