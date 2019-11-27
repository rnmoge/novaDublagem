// // chama funções assincronas com respostas
// // select busca informações sobre o estado
// import {put, all, takeLatest, call} from 'redux-saga/effects';
// import AsyncStorage from '@react-native-community/async-storage';
// // import getRealm from '../../../services/realm';

// import {menuSucess} from './actions';

// // import {loginRequest, loginSucess, loginFailure} from './actions';
// import {commonLoadingActivityOn, commonActionFailure} from '../common/actions';

// // import {navigate} from '../../../services/navigation';

// function* menuRequestSaga() {
//   yield put(commonLoadingActivityOn(''));
//   try {
//     yield put(commonLoadingActivityOn(''));
//     let data = yield call(AsyncStorage.getItem, '@novaDublagem:user');
//     data = JSON.parse(data);
//     console.tron.log('entroi');
//     yield put(menuSucess(data));
//   } catch (err) {
//     yield put(commonActionFailure(''));
//   }
// }

// export default all([takeLatest('@menu/MENU_REQUEST', menuRequestSaga)]);
