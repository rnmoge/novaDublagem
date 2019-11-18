// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest} from 'redux-saga/effects';
// import AsyncStorage from '@react-native-community/async-storage';
// import api from '../../../services/api';
// import {loginRequest, loginSucess, loginFailure} from './actions';
import {commonLoadingActivityOn, commonActionFailure} from '../common/actions';
import {navigate} from '../../../services/navigation';

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
]);
