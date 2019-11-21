// chama funções assincronas com respostas
// select busca informações sobre o estado
import {call, put, all, takeLatest, cancel} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import getRealm from '../../../services/realm';
import api from '../../../services/api';
// import {loginRequest, loginSucess, loginFailure} from './actions';
import {
  commonLoadingActivityOn,
  commonActionSucess,
  commonActionFailure,
} from '../common/actions';

import {navigate} from '../../../services/navigation';

function* loginRequestSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const realm = yield getRealm();

  const {username, password} = action.payload;
  if (username && password) {
    try {
      // const {username, password} = action.payload;
      const {data} = yield call(api.post, '/login', {
        username,
        password,
      });
      yield call(
        AsyncStorage.setItem,
        '@novaDublagem:token',
        JSON.stringify(data.token)
      );
      for (let i = 0; i < data.tabelaprecos.length; i += 1) {
        const {
          id,
          tabelapreco,
          comissao1,
          comissao2,
          comissao3,
          updated_at,
        } = data.tabelaprecos[i];
        const table = {
          id: Number(id),
          table_price: tabelapreco,
          comission_1: comissao1 === undefined ? 'not' : comissao1,
          comission_2: comissao2 === undefined ? 'not' : comissao2,
          comission_3: comissao2 === undefined ? 'not' : comissao3,
          update_at: updated_at,
        };
        realm.write(() => {
          realm.create('tablePrice', table, true);
        });
      }
      const {} = data;
      //   permission,
      //   status,
      //   last_update_app,
      //   created_at,
      //   updated_at,

      // const objeto = {
      //   permission: permission === undefined ? 'not' : username,
      //   status: status === undefined ? 'not' : status,
      //   lastupdateapp: last_update_app === null ? 'not' : last_update_app,
      //   created_at: created_at === undefined ? 'not' : created_at,
      //   updated_at: updated_at === undefined ? 'not' : updated_at,
      // }
      console.tron.log(data);
      // realm.write(() => {
      //   realm.create('User', objeto, true);
      // });
      if (data.permission === 'Representante') {
        yield put(commonActionSucess(''));
        navigate('TableSelection');
      } else {
        yield put(commonActionSucess(''));
        navigate('Home');
        // console.tron.log('ENTROHOME');
      }
    } catch (err) {
      yield put(commonActionFailure(err.response.data.message));
    }
  } else {
    yield put(commonActionFailure('Preencha os campos'));
  }
}
function* loginRequestExistSaga() {
  yield put(commonLoadingActivityOn(''));

  try {
    let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
    token = JSON.parse(token);

    if (token === null) {
      yield put(commonActionFailure(''));

      yield cancel;
    } else {
      yield call(api.get, '/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('TableSelection');
    }
  } catch (err) {
    yield put(commonActionFailure(''));
    console.tron.log('catch');
  }
}
function* loginforgotPasswordSaga() {
  yield put(commonLoadingActivityOn(''));
  navigate('ForgotPassword');
}

export default all([
  takeLatest('@login/LOGIN_REQUEST', loginRequestSaga),
  takeLatest('@login/LOGIN_REQUEST_EXIST', loginRequestExistSaga),
  takeLatest('@login/LOGIN_FORGOT_PASSWORD', loginforgotPasswordSaga),
]);
