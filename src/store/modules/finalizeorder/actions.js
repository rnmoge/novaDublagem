export function saveNewOrder(
  emissao,
  codPedido,
  typeChargeId,
  packingId,
  idTable,
  descont,
  pagamentId,
  note,
  billingId,
  clientId,
  representativeId,
  typeOrder
) {
  return {
    type: '@finalizeorder/SAVE_NEW_ORDER',
    payload: {
      emissao,
      codPedido,
      typeChargeId,
      packingId,
      idTable,
      descont,
      pagamentId,
      note,
      billingId,
      clientId,
      representativeId,
      typeOrder,
    },
  };
}
export function saveClient(clientId, representativeId, typeOrder) {
  return {
    type: '@finalizeorder/SAVE_CLIENT',
    payload: {clientId, representativeId, typeOrder},
  };
}
export function selectTranspoId(transpoId) {
  return {
    type: '@finalizeorder/SELECT_TRANSPO_ID',
    payload: {transpoId},
  };
}
export function selectDespachId(despachId) {
  return {
    type: '@finalizeorder/SELECT_DESPACH_ID',
    payload: {despachId},
  };
}
export function saveOrderTotal(transpoId, despachId, situacaoCod) {
  return {
    type: '@finalizeorder/SAVE_ORDER_TOTAL',
    payload: {
      transpoId,
      despachId,
      situacaoCod,
    },
  };
}
export function statusOrder(statusCod) {
  return {
    type: '@finalizeorder/STATUS_ORDER',
    payload: {statusCod},
  };
}
export function cleanFinalizeOrder() {
  return {
    type: '@finalizeorder/CLEAN_FINALIZE_ORDER',
  };
}
export function changeQuant(newQuant) {
  return {
    type: '@finalizeorder/CHANGE_QUANT',
    payload: {newQuant},
  };
}
export function addRemoveQuant(newQuant) {
  return {
    type: '@finalizeorder/ADD_REMOVE_QUANT',
    payload: {newQuant},
  };
}

export function reponseApi(
  id,
  client,
  table,
  charge,
  conditionPagament,
  billingDate,
  status,
  pedidoItens
) {
  return {
    type: '@finalizeorder/RESPONSE_API',
    payload: {
      id,
      client,
      table,
      charge,
      conditionPagament,
      billingDate,
      status,
      pedidoItens,
    },
  };
}
export function handleOrder() {
  return {
    type: '@finalizeorder/handleOrder',
  };
}
export function priceTotal(price, quantTotal) {
  return {
    type: '@finalizeorder/PRICE_TOTAL',
    payload: {price, quantTotal},
  };
}
// export function saveOrderNotTransmitted(transpoId, despachId, situacaoCod) {
//   return {
//     type: '@finalizeorder/SAVE_ORDER_NOT_TRANSMITTED',
//     payload: {
//       transpoId,
//       despachId,
//       situacaoCod,
//     },
//   };
// }
