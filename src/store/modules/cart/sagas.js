// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest, select} from 'redux-saga/effects';
// import AsyncStorage from '@react-native-community/async-storage';
// import api from '../../../services/api';
import {addToCartSucess} from './actions';

import {
  commonLoadingActivityOn,
  // commonActionFailure,
  // commonActionSucess,
} from '../common/actions';
// import {navigate} from '../../../services/navigation';

function* addToCartSaga(action) {
  const {produto, descricao, valorReal} = action.payload;
  yield put(addToCartSucess(produto, descricao, valorReal));
}

export default all([takeLatest('@cart/ADD_TO_CART', addToCartSaga)]);
