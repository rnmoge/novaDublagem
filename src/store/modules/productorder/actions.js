export function backNewOrder() {
  return {
    type: '@productorder/BACK_NEW_ORDER',
  };
}
export function dateValidator(idProduto, date) {
  return {
    type: '@productorder/DATE_VALIDATOR',
    payload: {idProduto, date},
  };
}
export function dateValidatorSucess(message) {
  return {
    type: '@productorder/DATE_VALIDATOR_SUCESS',
    payload: {message},
  };
}
export function cleanValidator() {
  return {
    type: '@productorder/CLEAN_VALIDATOR',
  };
}
export function selectTransport() {
  return {
    type: '@productorder/SELECT_TRANSPORT',
  };
}
export function selectTransportSucess(transport) {
  return {
    type: '@productorder/SELECT_TRANSPORT_SUCESS',
    payload: {transport},
  };
}
export function selectTransportInput(id, transports) {
  return {
    type: '@productorder/SELECT_TRANSPORT_INPUT',
    payload: {id, transports},
  };
}
export function selectTransportInputSucess(transport) {
  return {
    type: '@productorder/SELECT_TRANSPORT_INPUT_SUCESS',
    payload: {transport},
  };
}
export function selectDespachInput(id, despachs) {
  return {
    type: '@productorder/SELECT_DESPACH_INPUT',
    payload: {id, despachs},
  };
}
export function selectDespachInputSucess(despach) {
  return {
    type: '@productorder/SELECT_DESPACH_INPUT_SUCESS',
    payload: {despach},
  };
}
export function closeTransport(state) {
  return {
    type: '@productorder/CLOSE_TRANSPORT',
    payload: {state},
  };
}
export function openTransport(state) {
  return {
    type: '@productorder/OPEN_TRANSPORT',
    payload: {state},
  };
}
export function closeTransportTwo(estado) {
  return {
    type: '@productorder/CLOSE_TRANSPORT_TWO',
    payload: {estado},
  };
}
export function openTransportTwo(estado) {
  return {
    type: '@productorder/OPEN_TRANSPORT_TWO',
    payload: {estado},
  };
}
