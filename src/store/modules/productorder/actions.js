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
