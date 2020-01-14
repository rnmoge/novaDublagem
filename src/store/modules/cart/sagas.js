// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
// import api from '../../../services/api';
import {addToCartSucess} from './actions';

import {
  // commonActionFailure,
  // commonActionSucess,
  commonLoadingActivityOn,
} from '../common/actions';

function* addToCartSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const {produto, descricao, valorReal} = action.payload;
  yield put(addToCartSucess(produto, descricao, valorReal));
}

export default all([takeLatest('@cart/ADD_TO_CART', addToCartSaga)]);
