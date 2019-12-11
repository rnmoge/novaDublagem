// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest} from 'redux-saga/effects';
// import AsyncStorage from '@react-native-community/async-storage';
// import api from '../../../services/api';
import {CatalogClean} from '../catalog/actions';
// import {navigate} from '../../../services/navigation';

function* cleanCatalog() {
  yield put(CatalogClean());
}

export default all([takeLatest('@home/HOME_CLEAN', cleanCatalog)]);
