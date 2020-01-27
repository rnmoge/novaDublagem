// chama funções assincronas com respostas
// select busca informações sobre o estado
import {put, all, takeLatest, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
// import getRealm from '../../../services/realm';
import axios from 'axios';
import api from '../../../services/api';
import {
  cepSucess,
  saveAddressSucess,
  saveClientSucess,
  saveProviderSucess,
  saveBankSucess,
  saveInfoSucess,
  saveClientTotalSucess,
  addressExist,
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
    cidade_cod: Number(cidade_cod),
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
      cidade_cod: Number(cidade_cod),
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
      cidade_cod: Number(cidade_cod),
      pais_cod,
      pais,
    };

    address.push(newAddress3);
  }
  yield put(addressExist(equal1, equal2));
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

  yield put(commonActionSucess());
  yield put(saveProviderSucess(newProviders));
}
function* saveBankSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const {
    NameBank1,
    Agency1,
    Manager1,
    Time1,
    NameBank2,
    Agency2,
    Manager2,
    Time2,
    NameBank3,
    Agency3,
    Manager3,
    Time3,
  } = action.payload;
  const newBanks = [];
  const bank1 = {
    nome_banco: NameBank1,
    agencia: Agency1,
    gerente: Manager1,
    quantidade_tempo: Time1,
  };
  newBanks.push(bank1);
  if (NameBank2 !== null) {
    const bank2 = {
      nome_banco: NameBank2,
      agencia: Agency2,
      gerente: Manager2,
      quantidade_tempo: Time2,
    };
    newBanks.push(bank2);
  }
  if (NameBank3 !== null) {
    const bank3 = {
      nome_banco: NameBank3,
      agencia: Agency3,
      gerente: Manager3,
      quantidade_tempo: Time3,
    };
    newBanks.push(bank3);
  }

  yield put(commonActionSucess());
  yield put(saveBankSucess(newBanks));
}

function* saveInfoSaga(action) {
  yield put(commonLoadingActivityOn(''));
  const {
    Time,
    NumberWork,
    Headquarters,
    Age,
    Production,
    Billing,
  } = action.payload;
  const newInfo = {
    sede_propria: Headquarters,
    numero_funcionario: NumberWork,
    fundacao: Age,
    producao_mensal: Production,
    faturamento_mensal: Billing,
    tempo_endereco: Time,
  };

  yield put(saveInfoSucess(newInfo));
}
function* saveClientTotalSaga(action) {
  yield put(commonLoadingActivityOn());
  let user = yield call(AsyncStorage.getItem, '@novaDublagem:user');
  user = JSON.parse(user);
  const {id} = user.cliente;
  let token = yield call(AsyncStorage.getItem, '@novaDublagem:token');
  token = JSON.parse(token);

  try {
    const {
      Razon,
      Name,
      Cnpj,
      SubscriptionOne,
      SubscriptionTwo,
      suffrage,
      SuffrageInput,
      Contat,
      CellFix,
      Email,
      Mobile,
      clienteEnderecos,
      clienteFornecedores,
    } = action.payload;
    let newSuffrage;
    if (suffrage) {
      newSuffrage = 1;
    } else {
      newSuffrage = 0;
    }
    const data = {
      representante_id: id,
      transportadora_id: null,
      redespacho_id: null,
      nome_razao: Razon,
      sobrenome_fantasia: Name,
      tipo_pessoa: 'J',
      tipo_entidade: 'CLIENTE',
      cpf: null,
      cnpj: Cnpj,
      email: Email,
      email_nfe: Email,
      suframa: newSuffrage,
      suframa_cod: SuffrageInput,
      status: null,
      telefone: CellFix,
      celular: Mobile,
      clienteEnderecos,
      clienteFornecedores,
    };
    const response = yield call(api.post, '/cliente', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const razaoSocial = response.data.nome_razao;
    const newCnpj = response.data.cnpj;
    const newAddress = response.data.clienteEnderecos[0].endereco;
    const newData = {
      razaoSocial,
      newCnpj,
      newAddress,
    };

    yield put(saveClientTotalSucess(newData));
    yield put(commonActionSucess());
  } catch (err) {
    yield put(commonActionFailure());
  }
}
export default all([
  takeLatest('@client/REQUEST_CEP', requestCepSaga),
  takeLatest('@client/SAVE_ADDRESS', saveAddressSaga),
  takeLatest('@client/SAVE_CLIENT', saveClientsSaga),
  takeLatest('@client/SAVE_PROVIDER', saveProviderSaga),
  takeLatest('@client/SAVE_BANK', saveBankSaga),
  takeLatest('@client/SAVE_INFO', saveInfoSaga),
  takeLatest('@client/SAVE_CLIENT_TOTAL', saveClientTotalSaga),
]);
