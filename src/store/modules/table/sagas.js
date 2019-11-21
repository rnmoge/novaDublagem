// chama funções assincronas com respostas
// select busca informações sobre o estado
import {call, put, all, takeLatest, cancel} from 'redux-saga/effects';
// import AsyncStorage from '@react-native-community/async-storage';
import getRealm from '../../../services/realm';
import {requestTablePriceSucess} from './actions';

// import {loginRequest, loginSucess, loginFailure} from './actions';
import {
  commonLoadingActivityOn,
  commonActionSucess,
  commonActionFailure,
} from '../common/actions';

// import {navigate} from '../../../services/navigation';

function* requestTableSaga() {
  yield put(commonLoadingActivityOn(''));
  try {
    const realm = yield getRealm();

    const data = realm.objects('tablePrice').sorted('table_price', true);

    // console.tron.log(data);
    yield put(commonLoadingActivityOn(''));
    yield put(requestTablePriceSucess(data));
  } catch (err) {
    yield put(commonActionFailure(err.response.data.message));
    console.tron.log('entrou catch');
  }
}

export default all([
  takeLatest('@table/LOGIN_REQUEST_TABLE_PRICE', requestTableSaga),
]);
