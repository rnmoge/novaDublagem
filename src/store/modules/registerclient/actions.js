export function openModalAddress() {
  return {
    type: '@client/OPEN_MODAL_ADDRESS',
  };
}
export function closeModalAddress() {
  return {
    type: '@client/CLOSE_MODAL_ADDRESS',
  };
}
export function openModalProvider() {
  return {
    type: '@client/OPEN_MODAL_PROVIDER',
  };
}
export function closeModalProvider() {
  return {
    type: '@client/CLOSE_MODAL_PROVIDER',
  };
}
export function openModalClient() {
  return {
    type: '@client/OPEN_MODAL_CLIENT',
  };
}
export function closeModalClient() {
  return {
    type: '@client/CLOSE_MODAL_CLIENT',
  };
}
export function openModalBank() {
  return {
    type: '@client/OPEN_MODAL_BANK',
  };
}
export function closeModalBank() {
  return {
    type: '@client/CLOSE_MODAL_BANK',
  };
}
export function openModalInfo() {
  return {
    type: '@client/OPEN_MODAL_INFO',
  };
}
export function closeModalInfo() {
  return {
    type: '@client/CLOSE_MODAL_INFO',
  };
}
export function requestCep(cep) {
  return {
    type: '@client/REQUEST_CEP',
    payload: {cep},
  };
}
export function cepSucess(address) {
  return {
    type: '@client/CEP_SUCESS',
    payload: {address},
  };
}
export function cepClean() {
  return {
    type: '@client/CEP_CLEAN',
  };
}
export function saveAddress(
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
  equal2
) {
  return {
    type: '@client/SAVE_ADDRESS',
    payload: {
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
    },
  };
}
export function saveAddressSucess(data) {
  return {
    type: '@client/SAVE_ADDRESS_SUCESS',
    payload: {data},
  };
}
export function addressExist(state1, state2) {
  return {
    type: '@client/ADDRESS_EXIST',
    payload: {state1, state2},
  };
}
export function saveClient(
  RazonClient1,
  MobileClient1,
  BuyClient1,
  RazonClient2,
  MobileClient2,
  BuyClient2,
  RazonClient3,
  MobileClient3,
  BuyClient3
) {
  return {
    type: '@client/SAVE_CLIENT',
    payload: {
      RazonClient1,
      MobileClient1,
      BuyClient1,
      RazonClient2,
      MobileClient2,
      BuyClient2,
      RazonClient3,
      MobileClient3,
      BuyClient3,
    },
  };
}
export function saveProvider(
  RazonProvider1,
  MobileProvider1,
  BuyProvider1,
  RazonProvider2,
  MobileProvider2,
  BuyProvider2,
  RazonProvider3,
  MobileProvider3,
  BuyProvider3
) {
  return {
    type: '@client/SAVE_PROVIDER',
    payload: {
      RazonProvider1,
      MobileProvider1,
      BuyProvider1,
      RazonProvider2,
      MobileProvider2,
      BuyProvider2,
      RazonProvider3,
      MobileProvider3,
      BuyProvider3,
    },
  };
}
export function saveClientSucess(data) {
  return {
    type: '@client/SAVE_CLIENT_SUCESS',
    payload: {data},
  };
}
export function saveProviderSucess(data) {
  return {
    type: '@client/SAVE_PROVIDER_SUCESS',
    payload: {data},
  };
}
export function saveBank(
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
  Time3
) {
  return {
    type: '@client/SAVE_BANK',
    payload: {
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
    },
  };
}
export function saveBankSucess(data) {
  return {
    type: '@client/SAVE_BANK_SUCESS',
    payload: {data},
  };
}
export function saveInfo(
  Time,
  NumberWork,
  Headquarters,
  Age,
  Production,
  Billing
) {
  return {
    type: '@client/SAVE_INFO',
    payload: {
      Time,
      NumberWork,
      Headquarters,
      Age,
      Production,
      Billing,
    },
  };
}
export function saveInfoSucess(data) {
  return {
    type: '@client/SAVE_INFO_SUCESS',
    payload: {data},
  };
}
export function saveClientTotal(
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
  clienteFornecedores
) {
  return {
    type: '@client/SAVE_CLIENT_TOTAL',
    payload: {
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
    },
  };
}
export function saveClientTotalSucess(data) {
  return {
    type: '@client/SAVE_CLIENT_TOTAL_SUCESS',
    payload: {data},
  };
}
export function cleanModals() {
  return {
    type: '@client/CLEAN_MODALS',
  };
}
export function cleanData() {
  return {
    type: '@client/CLEAN_DATA',
  };
}
