// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest} from 'redux-saga/effects';
// import AsyncStorage from '@react-native-community/async-storage';
import getRealm from '../../../services/realm';
import {requestTablePriceSucess, selectTablePriceSucess} from './actions';

// import {loginRequest, loginSucess, loginFailure} from './actions';
import {commonLoadingActivityOn, commonActionFailure} from '../common/actions';
import {navigate} from '../../../services/navigation';

// import {navigate} from '../../../services/navigation';

function* requestTableSaga() {
  yield put(commonLoadingActivityOn(''));
  try {
    const realm = yield getRealm();

    const data = realm.objects('tablePrice').sorted('table_price', true);
    yield put(commonLoadingActivityOn(''));
    yield put(requestTablePriceSucess(data));
  } catch (err) {
    yield put(commonActionFailure(err.response.data.message));
  }
}
function* selectTablePriceSaga(action) {
  try {
    const {id, tabelas} = action.payload;
    const tabela = tabelas.find(element => {
      return element.id === id;
    });
    yield put(commonLoadingActivityOn(''));
    yield put(selectTablePriceSucess(tabela));
    yield put(commonLoadingActivityOn(''));
    navigate('Home');
  } catch (err) {
    yield put(commonActionFailure(''));
  }
}

export default all([
  takeLatest('@table/LOGIN_REQUEST_TABLE_PRICE', requestTableSaga),
  takeLatest('@table/SELECT_TABLE_PRICE', selectTablePriceSaga),
]);
