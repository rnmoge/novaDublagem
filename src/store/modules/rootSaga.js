import {all} from 'redux-saga/effects';
import common from './common/sagas';
import login from './login/sagas';
import forgotpassword from './forgotpassword/sagas';
import exitdrawer from './exitdrawer/sagas';
import catalog from './catalog/sagas';
import table from './table/sagas';
import menu from './menu/sagas';
import order from './order/sagas';
import neworder from './neworder/sagas';
import home from './home/sagas';

export default function* rootSaga() {
  return yield all([
    common,
    login,
    forgotpassword,
    exitdrawer,
    catalog,
    table,
    menu,
    order,
    neworder,
    home,
    // adicione mais sagas
  ]);
}
