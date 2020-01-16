import {put, all, takeLatest, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
// import getRealm from '../../../services/realm';
import api from '../../../services/api';
import {requestOrdersSucess, selectOrderSucess} from './actions';
import {
  commonLoadingActivityOn,
  commonActionFailure,
  commonActionSucess,
} from '../common/actions';
import {navigate} from '../../../services/navigation';

function* requestOrdersSaga(action) {
  yield put(commonLoadingActivityOn());
  try {
    const {page} = action.payload;

    let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
    token = JSON.parse(token);
    const {data} = yield call(api.get, `/pedido?page=${page}&pagesize=20`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    yield put(requestOrdersSucess(data.data));
    yield put(commonActionSucess());
  } catch (err) {
    yield put(commonActionFailure());
  }
}
function* selectOrderSaga(action) {
  yield put(commonLoadingActivityOn());
  navigate('DetailsOrder');
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  token = JSON.parse(token);
  try {
    const {id} = action.payload;

    const data = yield call(api.get, `/pedido/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.tron.log(data.data);
    yield put(commonLoadingActivityOn());
    yield put(selectOrderSucess(data.data));
    yield put(commonActionSucess());
  } catch (err) {
    yield put(commonActionFailure());
  }
}

function* backQueryOrderSaga() {
  yield put(commonLoadingActivityOn());
  navigate('QueryOrder');
  yield put(commonActionSucess());
}

export default all([
  takeLatest('@queryorder/BACK_QUERY_ORDER', backQueryOrderSaga),
  takeLatest('@queryorder/REQUEST_ORDERS', requestOrdersSaga),
  takeLatest('@queryorder/SELECT_ORDER', selectOrderSaga),
]);
