export function requestTablePrice(tabelaprecos) {
  return {
    type: '@table/LOGIN_REQUEST_TABLE_PRICE',
    payload: {tabelaprecos},
  };
}

export function requestTablePriceSucess(tablePrice) {
  return {
    type: '@table/LOGIN_REQUEST_TABLE_PRICE_SUCESS',
    payload: {tablePrice},
  };
}
