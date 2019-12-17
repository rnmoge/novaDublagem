// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest} from 'redux-saga/effects';
// import AsyncStorage from '@react-native-community/async-storage';
// import api from '../../../services/api';
import {CatalogClean} from '../catalog/actions';
import {navigate} from '../../../services/navigation';
import {commonLoadingActivityOn} from '../common/actions';

function* cleanCatalog() {
  yield put(CatalogClean());
}
function* handleCartSaga() {
  yield put(commonLoadingActivityOn());
  navigate('Cart');
}

export default all([
  takeLatest('@home/HOME_CLEAN', cleanCatalog),
  takeLatest('@home/HANDLE_CART', handleCartSaga),
]);
