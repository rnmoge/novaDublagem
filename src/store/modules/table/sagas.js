// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
// import getRealm from '../../../services/realm';
import {requestTablePriceSucess, selectTablePriceSucess} from './actions';

import {CatalogClean} from '../catalog/actions';
import {
  commonLoadingActivityOn,
  commonActionFailure,
  commonActionSucess,
} from '../common/actions';
import {navigate} from '../../../services/navigation';

// import {navigate} from '../../../services/navigation';

function* requestTableSaga() {
  yield put(commonLoadingActivityOn(''));
  try {
    let table2 = yield call(AsyncStorage.getItem, '@novaDublagem:userTable');
    table2 = JSON.parse(table2);

    yield put(requestTablePriceSucess(table2));

    // const realm = yield getRealm();

    // const data = realm.objects('tablePrice').sorted('table_price', true);
    // yield put(commonLoadingActivityOn(''));
  } catch (err) {
    yield put(commonActionFailure(err.response.data.message));
  }
}
function* selectTablePriceSaga(action) {
  yield put(commonLoadingActivityOn(''));
  try {
    const {id, tabelas} = action.payload;
    const tabela = tabelas.find(element => {
      return element.id === id;
    });
    yield put(selectTablePriceSucess(tabela));
    yield put(commonActionSucess(''));

    navigate('Catalogo');
  } catch (err) {
    yield put(commonActionFailure(''));
  }
}

export default all([
  takeLatest('@table/LOGIN_REQUEST_TABLE_PRICE', requestTableSaga),
  takeLatest('@table/SELECT_TABLE_PRICE', selectTablePriceSaga),
]);
