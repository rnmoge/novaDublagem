// actions para a requisição das tabelas para o realm e salvar ela dentro de um estado
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
// actions para a selecão da tabela
export function selectTablePrice(id, tabelas) {
  return {
    type: '@table/SELECT_TABLE_PRICE',
    payload: {id, tabelas},
  };
}

export function selectTablePriceSucess(id) {
  return {
    type: '@table/SELECT_TABLE_PRICE_SUCESS',
    payload: {id},
  };
}
