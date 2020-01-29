import {put, all, takeLatest, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
// import getRealm from '../../../services/realm';
import api from '../../../services/api';

import {
  commonLoadingActivityOn,
  commonActionFailure,
  commonActionSucess,
} from '../common/actions';
// import {menuSucess} from '../menu/actions';
import {navigate} from '../../../services/navigation';
// import api2 from '../../../services/api2';

function* requestPriceAndComission(action) {
  yield put(commonLoadingActivityOn());
  const {idProduct, idGroupSize, idTable} = action.payload;
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  token = JSON.parse(token);

  try {
    const table = yield call(api.get, `tabelapreco/${idTable}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.tron.log(table);
    const {
      data: {data},
    } = yield call(
      api.get,
      `/tabelaprecolinhamatriz?tabelapreco=${idTable}&linhamatriz=${idProduct}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.tron.log(data);
    const price1 = data.find(element => {
      return element.grupotamanho_id === idGroupSize;
    });
    console.tron.log(price1);
  } catch (err) {
    yield put(commonActionFailure());
  }
}

function* requestUpdateOrder(action) {
  yield put(commonLoadingActivityOn());
  try {
    const {size, comission, value, order} = action.payload;
    const pedidoItemTamanhos = [];
    const item = order.map(element => {
      console.tron.log('jcnxzjhjkchzjkxvhzjk');
      return element.pedidoItem.pedidoItemTamanhos.id === size.id;
    });
    console.tron.log(item);
    console.tron.log(size);

    pedidoItemTamanhos.push(size);
    console.tron.log(pedidoItemTamanhos);
  } catch (err) {
    yield put(commonActionFailure());
  }
}

export default all([
  takeLatest(
    '@editorder/REQUEST_PRICE_AND_COMISSION',
    requestPriceAndComission
  ),
  takeLatest('@editorder/REQUEST_UPDATE_ORDER', requestUpdateOrder),
]);
