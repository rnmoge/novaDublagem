// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';
import {
  // ProductsCatalogSucess,
  catalogMoreDetailsProductSucess,
  requestTablePriceSucess,
  ProductsCatalogSucessId,
  searchDescriptionSucess,
  searchModelSucess,
} from './actions';

import {
  commonLoadingActivityOn,
  commonActionFailure,
  commonActionSucess,
} from '../common/actions';
import {navigate} from '../../../services/navigation';

// function* requestProductCatalog(action) {
//   const {id} = action.payload;
//   try {
//     yield put(commonLoadingActivityOn(''));
//     let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
//     token = JSON.parse(token);
//     const {data} = yield call(api.get, `/linhamatriz?tabelaPreco=${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     yield put(ProductsCatalogSucess(data));
//     yield put(commonActionSucess(''));
//   } catch (err) {
//     yield put(commonActionFailure('Verifique sua conexão'));
//   }
// }

function* moreDetailsProduct(action) {
  yield put(commonLoadingActivityOn(''));
  try {
    const {id, products} = action.payload;
    const product = products.find(element => {
      return element.id === id;
    });
    yield put(catalogMoreDetailsProductSucess(product));
    yield put(commonLoadingActivityOn(''));
    navigate('ProductDetails');
  } catch (err) {
    yield put(commonActionFailure('Produto não encontrado'));
  }
}
function* requestTablePriceSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const {idProduct, idTable} = action.payload;
  try {
    let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
    token = JSON.parse(token);

    const cores = yield call(api.get, `/linhamatriz/${idProduct}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(ProductsCatalogSucessId(cores.data.cores));

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
    yield put(requestTablePriceSucess(data));
    yield put(commonActionSucess(''));
  } catch (err) {
    yield put(commonActionFailure('Verifique sua conexão'));
  }
}
function* backCatalogSaga() {
  yield put(commonLoadingActivityOn(''));
  navigate('Catalogo');
}
function* searchDescripitionSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const {id, description} = action.payload;

  try {
    let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
    token = JSON.parse(token);
    const {data} = yield call(
      api.get,
      `/linhamatriz?tabelaPreco=${id}&descricao=${description}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(searchDescriptionSucess(data));
    yield put(commonActionSucess(''));
  } catch (err) {
    yield put(commonActionFailure('Verifique sua conexão'));
  }
}
function* searchModelSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const {linha, id, model} = action.payload;
  console.tron.log(model);
  try {
    let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
    token = JSON.parse(token);
    const {data} = yield call(
      api.get,
      `/linhamatriz?tabelaPreco=${id}&linha=${linha}&matriz=${model}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(searchModelSucess(data));
    yield put(commonActionSucess(''));
  } catch (err) {
    yield put(commonActionFailure('Verifique sua conexão'));
  }
}
export default all([
  takeLatest('@catalog/CATALOG_MORE_DETAILS_PRODUCT', moreDetailsProduct),
  // takeLatest('@catalog/REQUEST_PRODUCT_CATALOG', requestProductCatalog),
  takeLatest('@catalog/REQUEST_TABLE_PRICE', requestTablePriceSaga),
  takeLatest('@catalog/BACK_CATALOG', backCatalogSaga),
  takeLatest('@catalog/SEARCH_DESCRIPITION', searchDescripitionSaga),
  takeLatest('@catalog/SEARCH_MODEL', searchModelSaga),
]);
