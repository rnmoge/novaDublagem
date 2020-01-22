// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
// import getRealm from '../../../services/realm';
import axios from 'axios';
import {
  cepSucess,
  saveAddressSucess,
  saveClientSucess,
  saveProviderSucess,
} from './actions';
import {
  commonLoadingActivityOn,
  commonActionFailure,
  commonActionSucess,
} from '../common/actions';
import {navigate} from '../../../services/navigation';

// import {navigate} from '../../../services/navigation';

function* requestCepSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const {cep} = action.payload;
  const api1 = axios.create({
    baseURL: 'https://viacep.com.br/ws',
  });
  try {
    const {data} = yield call(api1.get, `/${cep}/json/`);
    console.tron.log(data);
    yield put(cepSucess(data));
    yield put(commonActionSucess());
  } catch (err) {
    yield put(commonActionFailure());
  }
}
function* saveAddressSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const tipoEndereco = 'Principal';
  const {
    cep,
    endereco,
    numero,
    bairro,
    cidade,
    uf,
    complemento,
    cidade_cod,
    pais_cod,
    pais,
    equal1,
    equal2,
  } = action.payload;
  const newAddress = {
    cep,
    endereco,
    tipo_endereco: tipoEndereco,
    numero: Number(numero),
    bairro,
    cidade,
    uf,
    complemento,
    cidade_cod,
    pais_cod,
    pais,
  };

  const address = [];
  address.push(newAddress);
  if (equal1) {
    const tipoEndereco2 = 'Entrega';
    const newAddress2 = {
      cep,
      endereco,
      tipo_endereco: tipoEndereco2,
      numero: Number(numero),
      bairro,
      cidade,
      uf,
      complemento,
      cidade_cod,
      pais_cod,
      pais,
    };

    address.push(newAddress2);
  }
  if (equal2) {
    const tipoEndereco3 = 'Cobrança';
    const newAddress3 = {
      cep,
      endereco,
      tipo_endereco: tipoEndereco3,
      numero: Number(numero),
      bairro,
      cidade,
      uf,
      complemento,
      cidade_cod,
      pais_cod,
      pais,
    };

    address.push(newAddress3);
  }
  yield put(saveAddressSucess(address));
}
function* saveClientsSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const {
    RazonClient1,
    MobileClient1,
    BuyClient1,
    RazonClient2,
    MobileClient2,
    BuyClient2,
    RazonClient3,
    MobileClient3,
    BuyClient3,
  } = action.payload;
  const newClients = [];
  const clients1 = {
    nome: RazonClient1,
    telefone: MobileClient1,
    compra_mensal: BuyClient1,
  };
  newClients.push(clients1);
  if (RazonClient2 !== null) {
    const clients2 = {
      nome: RazonClient2,
      telefone: MobileClient2,
      compra_mensal: BuyClient2,
    };
    newClients.push(clients2);
  }
  if (RazonClient3 !== null) {
    const clients3 = {
      nome: RazonClient3,
      telefone: MobileClient3,
      compra_mensal: BuyClient3,
    };
    newClients.push(clients3);
  }
  console.tron.log(newClients);
  yield put(commonActionSucess());
  yield put(saveClientSucess(newClients));
}
function* saveProviderSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const {
    RazonProvider1,
    MobileProvider1,
    BuyProvider1,
    RazonProvider2,
    MobileProvider2,
    BuyProvider2,
    RazonProvider3,
    MobileProvider3,
    BuyProvider3,
  } = action.payload;
  const newProviders = [];
  const provider1 = {
    nome: RazonProvider1,
    telefone: MobileProvider1,
    compra_mensal: BuyProvider1,
  };
  newProviders.push(provider1);
  if (RazonProvider2 !== null) {
    const provider2 = {
      nome: RazonProvider2,
      telefone: MobileProvider2,
      compra_mensal: BuyProvider2,
    };
    newProviders.push(provider2);
  }
  if (RazonProvider3 !== null) {
    const provider3 = {
      nome: RazonProvider3,
      telefone: MobileProvider3,
      compra_mensal: BuyProvider3,
    };
    newProviders.push(provider3);
  }
  console.tron.log(newProviders);
  yield put(commonActionSucess());
  yield put(saveProviderSucess(newProviders));
}
export default all([
  takeLatest('@client/REQUEST_CEP', requestCepSaga),
  takeLatest('@client/SAVE_ADDRESS', saveAddressSaga),
  takeLatest('@client/SAVE_CLIENT', saveClientsSaga),
  takeLatest('@client/SAVE_PROVIDER', saveProviderSaga),
]);
