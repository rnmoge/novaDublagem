import {all} from 'redux-saga/effects';

import login from './Login/sagas';

export default function* rootSaga() {
  return yield all([
    login,
    // adicione mais sagas
  ]);
}
