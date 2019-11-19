import {all} from 'redux-saga/effects';
import common from './common/sagas';
import login from './login/sagas';
import forgotpassword from './forgotpassword/sagas';
import exitdrawer from './exitdrawer/sagas';
import catalog from './catalog/sagas';
import detailsproduct from './detailsproduct/sagas';

export default function* rootSaga() {
  return yield all([
    common,
    login,
    forgotpassword,
    exitdrawer,
    catalog,
    detailsproduct,
    // adicione mais sagas
  ]);
}
