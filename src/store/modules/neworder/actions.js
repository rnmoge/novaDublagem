export function backDetailsClient() {
  return {
    type: '@neworder/BACK_DETAILS_CLIENT',
  };
}
export function handleProducts(table, condition) {
  return {
    type: '@neworder/HANDLE_PRODUCTS',
    payload: {table, condition},
  };
}
export function selectTableOrder(idTable) {
  return {
    type: '@neworder/SELECT_TABLE_ORDER',
    payload: {idTable},
  };
}
export function selectTableOrderSucess(idTable) {
  return {
    type: '@neworder/SELECT_TABLE_ORDER_SUCESS',
    payload: {idTable},
  };
}
export function searchDescription(id, description) {
  return {
    type: '@newOrder/SEARCH_DESCRIPITION',
    payload: {id, description},
  };
}
export function searchDescriptionSucess(data) {
  return {
    type: '@newOrder/SEARCH_DESCRIPITION_SUCESS',
    payload: {data},
  };
}
export function searchModel(linha, id, model, descricao) {
  return {
    type: '@newOrder/SEARCH_MODEL',
    payload: {linha, id, model, descricao},
  };
}
export function searchModelSucess(data) {
  return {
    type: '@newOrder/SEARCH_MODEL_SUCESS',
    payload: {data},
  };
}
export function colorAndSizes(idTable, idProduct) {
  return {
    type: '@newOrder/COLOR_AND_SIZES',
    payload: {idTable, idProduct},
  };
}

export function colorAndSizesSucess(cores, data) {
  return {
    type: '@newOrder/COLOR_AND_SIZES',
    payload: {cores, data},
  };
}
