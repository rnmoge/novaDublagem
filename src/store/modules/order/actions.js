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

export function handleDetailsClient(data) {
  return {
    type: '@order/HANDLE_DETAILS_CLIENT',
    payload: {data},
  };
}
export function backRegisterOrder() {
  return {
    type: '@order/BACK_REGISTER_ORDER',
  };
}
