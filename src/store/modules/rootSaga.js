import {all} from 'redux-saga/effects';
import common from './common/sagas';
import login from './login/sagas';
import forgotpassword from './forgotpassword/sagas';

export default function* rootSaga() {
  return yield all([
    common,
    login,
    forgotpassword,
    // adicione mais sagas
  ]);
}
