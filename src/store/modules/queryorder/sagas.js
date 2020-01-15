import {put, all, takeLatest, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
// import getRealm from '../../../services/realm';
import api from '../../../services/api';
import {requestOrdersSucess} from './actions';
import {
  commonLoadingActivityOn,
  commonActionFailure,
  commonActionSucess,
} from '../common/actions';

function* requestOrdersSaga(action) {
  yield put(commonLoadingActivityOn());
  try {
    const {page} = action.payload;
    console.tron.log('entrou');
    let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
    token = JSON.parse(token);
    const {data} = yield call(api.get, `/pedido?page=${page}&pagesize=20`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.tron.log(data.data);
    yield put(requestOrdersSucess(data.data));
    yield put(commonActionSucess());
  } catch (err) {
    yield put(commonActionFailure());
  }
}

export default all([
  takeLatest('@queryorder/REQUEST_ORDERS', requestOrdersSaga),
]);
