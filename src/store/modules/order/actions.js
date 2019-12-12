// actions page order -> navigation user

export function handleRegisterOrder() {
  return {
    type: '@order/HANDLE_REGISTER_ORDER',
  };
}
export function handleQueryOrder() {
  return {
    type: '@order/HANDLE_QUERY_ORDER',
  };
}
export function handleTransmitOrder() {
  return {
    type: '@order/HANDLE_TRANSMIT_ORDER',
  };
}

export function backOrder() {
  return {
    type: '@order/BACK_ORDER',
  };
}

// actions page RegisterOrder

export function handleDetailsClient(id, data) {
  return {
    type: '@order/HANDLE_DETAILS_CLIENT',
    payload: {id, data},
  };
}
export function handleDetailsClientSucess(client) {
  return {
    type: '@order/HANDLE_DETAILS_CLIENT_SUCESS',
    payload: {client},
  };
}
export function backRegisterOrder() {
  return {
    type: '@order/BACK_REGISTER_ORDER',
  };
}
// Actions page DetailsClient

export function handleNewOrder(client) {
  return {
    type: '@order/HANDLE_NEW_ORDER',
    payload: {client},
  };
}
export function cleanCatalog() {
  return {
    type: '@order/CLEAN_CATALOG',
  };
}
