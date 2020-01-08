export function saveNewOrder(
  emissao,
  codPedido,
  typeChargeId,
  packingId,
  idTable,
  descont,
  pagamentId,
  note,
  billingId
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
export function saveOrderTotal(
  codEmissao,
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
  transpoId,
  despachId,
  products
) {
  return {
    type: '@finalizeorder/SAVE_ORDER_TOTAL',
    payload: {
      codEmissao,
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
      transpoId,
      despachId,
      products,
    },
  };
}
