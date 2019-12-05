import {put, all, takeLatest} from 'redux-saga/effects';
// import AsyncStorage from '@react-native-community/async-storage';
// import getRealm from '../../../services/realm';
// import api from '../../../services/api';
// import {handleDetailsClientSucess} from './actions';
import {commonLoadingActivityOn} from '../common/actions';
// import {menuSucess} from '../menu/actions';
import {navigate} from '../../../services/navigation';
// import api2 from '../../../services/api2';

function* backDetailsClientSaga() {
  yield put(commonLoadingActivityOn(''));
  navigate('DetailsClient');
}

export default all([
  takeLatest('@neworder/BACK_DETAILS_CLIENT', backDetailsClientSaga),
]);
