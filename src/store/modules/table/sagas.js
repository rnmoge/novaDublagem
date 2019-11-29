// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest} from 'redux-saga/effects';
// import AsyncStorage from '@react-native-community/async-storage';
import getRealm from '../../../services/realm';
import {requestTablePriceSucess} from './actions';

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
function* selectTablePriceSaga() {
  yield put(commonLoadingActivityOn(''));
  // const realm = yield getRealm();

  // const {
  //   data2: {id},
  // } = realm.objects('tablePrice').sorted('id', true);
  // const data2 = realm.objects('tablePrice').sorted('id', true);
  // const data4 = yield select(state =>
  //  state.data.find(element => element.id === id)
  // );
  yield put(commonLoadingActivityOn(''));
  // yield put(requestTablePriceSucess(id));

  // console.tron.log(id);
  navigate('Home');
}

export default all([
  takeLatest('@table/LOGIN_REQUEST_TABLE_PRICE', requestTableSaga),
  takeLatest('@table/SELECT_TABLE_PRICE', selectTablePriceSaga),
]);
