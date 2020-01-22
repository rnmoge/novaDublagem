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
